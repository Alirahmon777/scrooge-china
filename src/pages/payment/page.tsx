import PaymentCard from '@/components/payment/PaymentCard';
import PaymentChat from '@/components/payment/PaymentChat';
import { ChatContextUser, initialOrderChat } from '@/context/ChatContext';
import Seo from '@/layout/seo/Seo';
import {
  useCreateOrPatchChatMutation,
  useGetUserOrderQuery,
  useGetUserOrderWithIdQuery,
} from '@/redux/features/services/user/userService';
import { selectCurrentUser } from '@/redux/features/slices/auth/authReducer';
import { useAppSelector } from '@/redux/hooks/hooks';
import { TStoreOrderUser } from '@/types/types';
import { handleSimpleError } from '@/utils/handleError';
import { toastCustom, toastSuccess } from '@/utils/toast/toast';
import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

const PaymentPage = () => {
  const notTablet = useMediaQuery('(min-width: 1024px)');
  const user = useAppSelector(selectCurrentUser);
  const bigMobile = useMediaQuery('(min-width: 560px)');
  const { orderChat, setOrderChat } = useContext(ChatContextUser);
  const { data: order, isSuccess } = useGetUserOrderQuery(undefined, {
    skip: !user?.steam_id,
    selectFromResult: ({ data, isSuccess }) => {
      return {
        data: data?.filter((order) => order.moderator_id && order.status == '"Created"').at(-1),
        isSuccess,
      };
    },
  });
  const { data: orderWithId, isSuccess: orderWithIdSuccess } = useGetUserOrderWithIdQuery(orderChat.order_id, {
    skip: !orderChat.order_id,
    pollingInterval: 25000,
    refetchOnFocus: true,
  });

  const [addChat] = useCreateOrPatchChatMutation();

  const {
    i18n: { language },
  } = useTranslation();

  const navigate = useNavigate();
  const handleRedirect = () => {
    window.scrollTo({ top: 0 });
    navigate(`/${language}/payment-chat`);
  };

  const createChat = async (order_id?: string, status?: string, moderator_id?: string) => {
    if (!order_id || !status) {
      setOrderChat(initialOrderChat);
      return;
    }
    try {
      if (!moderator_id) {
        toastSuccess('Ваш заказ в ожидании');
        return;
      }
      const chat = await addChat({ id: moderator_id }).unwrap();
      let chatInfo: TStoreOrderUser = {
        isChat: true,
        order_id,
        chat_id: chat.id,
        status,
        moderator_id,
      };
      setOrderChat(chatInfo);
      localStorage.setItem('user-last-order-chat', JSON.stringify(chatInfo));
      if (!notTablet) {
        handleRedirect();
      }
      return;
    } catch (error) {
      handleSimpleError(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      if (!order) return;
      createChat(order?.id, order?.status, order?.moderator_id);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!user) {
      setOrderChat(initialOrderChat);
    }
    if (orderChat.status == '"Cancelled"') {
      setOrderChat(initialOrderChat);
      localStorage.removeItem('user-last-order-chat');
      toastCustom('этот заказ был отменен');
    }
  }, []);

  useEffect(() => {
    if (orderWithIdSuccess) {
      setOrderChat((prev) => {
        if (!orderWithId?.status || !orderWithId?.moderator_id) return { ...prev };
        return { ...prev, status: orderWithId.status, moderator_id: orderWithId.moderator_id };
      });
    }
  }, [orderWithId]);

  return (
    <Seo metaTitle='Scrooge China - Пополнить'>
      <section className='my-[55px] sm:mt-[66px] sm:mb-[200px]'>
        <div className='container'>
          {bigMobile && (
            <h2 className='text-center'>
              Пополнение на <span className='text-success'>buff.163</span>
            </h2>
          )}
          <div className='flex lg:grid lg:grid-cols-2 justify-center lg:justify-between mt-[55px] gap-5'>
            <PaymentCard handleRedirect={handleRedirect} createChat={createChat} />
            {notTablet && <PaymentChat />}
          </div>
        </div>
      </section>
    </Seo>
  );
};

export default PaymentPage;
