import Button from '@/components/ui/Button';
import {
  useAssignOrderMutation,
  useCreateOrPatchChatMutation,
  useLazyGetModeratorOrderQuery,
} from '@/redux/features/services/admin/moderatorService';
import { useGetAvatarUrlQuery, useGetUsernameQuery } from '@/redux/features/services/public/publicService';
import { IOrder } from '@/types/interfaces';
import { TStoreOrderModerator } from '@/types/types';
import { dateAgo } from '@/utils/dateAgo';
import { handleSimpleError } from '@/utils/handleError';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

interface IProps {
  item: IOrder;
  setChat?: Dispatch<SetStateAction<TStoreOrderModerator>>;
  isAssign?: boolean;
}

const OrderCard = ({ item, setChat, isAssign }: IProps) => {
  const { created_at, payment_method, amount, steam_id, id, status } = item;
  const result = dateAgo({ created_at, lng: 'ru' });
  const navigate = useNavigate();
  const [assignOrder] = useAssignOrderMutation();
  const [getOrder] = useLazyGetModeratorOrderQuery();
  const [createChat] = useCreateOrPatchChatMutation();
  const { data: avatar } = useGetAvatarUrlQuery(steam_id);
  const { data: username } = useGetUsernameQuery(steam_id);
  const notTablet = useMediaQuery('(min-width: 1024px)');

  const handleCreate = async () => {
    try {
      const data = await createChat({ id: steam_id }).unwrap();
      let chatInfo: TStoreOrderModerator = { steam_id, isChat: true, order_id: id, chat_id: data.id, status };
      setChat && setChat(chatInfo);
      localStorage.setItem('moderator-last-order-chat', JSON.stringify(chatInfo));
      if (!notTablet) {
        navigate('/moderator/chat');
      }
    } catch (error) {
      handleSimpleError(error);
    }
  };

  const handleAssign = async () => {
    try {
      await assignOrder({ order_id: id }).unwrap();
      await getOrder();
      navigate('/moderator');
    } catch (error) {
      handleSimpleError(error);
    }
  };

  return (
    <div className='px-[6px] py-[10px] lg:p-6 gap-2 bg-header rounded-[10px] flex items-center justify-between'>
      <div className='flex gap-[10px]'>
        {avatar && (
          <div className='min-max-60 sm:min-max-80 rounded-[10px] overflow-hidden'>
            <img className='object-fill w-full h-full' src={avatar} />
          </div>
        )}
        {!avatar && <span className='min-max-60 sm:min-max-80 rounded-[10px] bg-[#D9D9D9]' />}
        <div className='text-gray'>
          <div className='flex items-center gap-[5px]'>
            <span className='w-[10px] h-[10px] bg-success rounded-full' />
            <p className='text-xs'>{result}</p>
          </div>
          <h3 className='my-[5px] lg:text-2xl text-white font-medium'>{username || 'User'}</h3>
          <p className='break-words'>
            Покупка {amount}¥ - {payment_method}
          </p>
        </div>
      </div>
      <Button
        variant='admin'
        className='px-2 min-w-[76px]'
        label='К заказу'
        onClick={!isAssign ? () => handleCreate() : () => handleAssign()}
      />
    </div>
  );
};

export default OrderCard;
