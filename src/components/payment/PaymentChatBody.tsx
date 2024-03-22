import { useAppSelector } from '@/redux/hooks/hooks';
import Message from './Message';
import { selectUserToken } from '@/redux/features/slices/auth/authReducer';
import { useContext, useEffect, useRef } from 'react';
import { ChatContextUser } from '@/context/ChatContext';
import { useGetMessagesQuery, useGetUserOrderWithIdQuery } from '@/redux/features/services/user/userService';
import { useMediaQuery } from 'usehooks-ts';
import { cfg } from '@/config/site.config';
import useWebSocket from 'react-use-websocket';
import { ScrollToBottom } from '@/utils/ScrollToBottom';
import { useGetAvatarUrlQuery } from '@/redux/features/services/public/publicService';

const PaymentChatBody = () => {
  const token = useAppSelector(selectUserToken);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { orderChat } = useContext(ChatContextUser);
  const { data: order, isSuccess: orderSuccess } = useGetUserOrderWithIdQuery(orderChat.order_id, {
    skip: !orderChat.order_id,
  });
  const {
    data: historyMessages,
    isSuccess,
    refetch,
  } = useGetMessagesQuery(orderChat.chat_id, { skip: !orderChat.chat_id });

  const isMobile = useMediaQuery('(max-width: 375px)');
  const { data: avatar } = useGetAvatarUrlQuery(order?.steam_id as string, { skip: !orderSuccess });

  useWebSocket(`${cfg.USER_SOCKET_URL}/${orderChat.chat_id}?authorization=Bearer ${token}`, {
    onMessage: () => {
      refetch();
    },
    shouldReconnect: () => !!(orderChat.chat_id && token),
    reconnectAttempts: 10,
    reconnectInterval: (attemptNumber) => Math.min(Math.pow(2, attemptNumber) * 1000, 10000),
  });

  useEffect(() => {
    const timer = setTimeout(() => ScrollToBottom(scrollRef, 'instant'), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    ScrollToBottom(scrollRef, 'smooth');
  }, [historyMessages]);

  return (
    <div className='min-h-[330px] flex-grow h-[372px] max-h-full overflow-y-auto pr-1 max-[375px]:pr-2' ref={scrollRef}>
      <div className='flex flex-col gap-5'>
        {isSuccess &&
          historyMessages.messages.map((messages, idx) => {
            if (messages[0].sender != '"Moderator"') {
              return (
                <div className='flex items-start gap-[10px] flex-row-reverse' key={idx}>
                  {!isMobile && avatar && (
                    <span className='min-max-20 mobile:min-max-24 rounded-sm overflow-hidden'>
                      <img className='object-fill w-full h-full' src={avatar} />
                    </span>
                  )}
                  {!isMobile && !avatar && <span className='min-max-20 mobile:min-max-24 bg-success rounded-sm' />}
                  <ul className='flex flex-grow flex-col gap-[10px]'>
                    <li className='flex items-end justify-end'>
                      <Message
                        content={messages[0].text}
                        isCurrentUser={true}
                        sender={'User'}
                        img_id={messages[1][0]}
                        chat_id={messages[0].chat_id}
                      />
                    </li>
                  </ul>
                </div>
              );
            }
            if (messages[0].sender == '"Moderator"') {
              return (
                <div className='flex items-start gap-[10px]' key={idx}>
                  {!isMobile && <span className='min-max-20 mobile:min-max-24 bg-success rounded-sm' />}
                  <ul className='flex flex-grow flex-col gap-[10px]'>
                    <li className='flex'>
                      <Message
                        content={messages[0].text}
                        img_id={messages[1][0]}
                        chat_id={messages[0].chat_id}
                        isCurrentUser={false}
                        sender={'User'}
                      />
                    </li>
                  </ul>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default PaymentChatBody;
