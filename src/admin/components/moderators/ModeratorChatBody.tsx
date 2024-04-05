import { ChatContext } from '@/admin/context/ChatContext';
import { cfg } from '@/config/site.config';
import { useGetMessagesQuery } from '@/redux/features/services/admin/moderatorService';
import { useGetAvatarUrlQuery } from '@/redux/features/services/public/publicService';
import { selectCurrentAdminToken } from '@/redux/features/slices/auth/authReducer';
import { useAppSelector } from '@/redux/hooks/hooks';
import { ScrollToBottom } from '@/utils/ScrollToBottom';
import Message from '@components/payment/Message';
import { useContext, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import useWebSocket from 'react-use-websocket';
import { useMediaQuery } from 'usehooks-ts';

const ModeratorChatBody = () => {
  const token = useAppSelector(selectCurrentAdminToken);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { orderChat } = useContext(ChatContext);
  const { t } = useTranslation('chat', { lng: 'ru' });
  const { data: historyMessages, isSuccess, refetch } = useGetMessagesQuery(orderChat.chat_id);
  const isMobile = useMediaQuery('(max-width: 375px)');
  const { data: avatar } = useGetAvatarUrlQuery(orderChat?.steam_id as string, { skip: !orderChat.steam_id });

  useWebSocket(`${cfg.ADMIN_SOCKET_URL}/${orderChat.chat_id}?authorization=Bearer ${token}`, {
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
    <div className='min-h-[330px] max-h-[340px] overflow-y-auto flex-grow pr-1 max-[375px]:pr-2' ref={scrollRef}>
      <div className='flex flex-col gap-5'>
        <div className='flex items-start gap-[10px] flex-row-reverse'>
          {!isMobile && <img src='/favicon/admin/favicon.ico' className='min-max-20 mobile:min-max-24 rounded-sm' />}
          <ul className='flex flex-grow flex-col gap-[10px]'>
            <li className='flex items-end justify-end'>
              <Message
                content={t('automessage-guide', { ns: 'chat' })}
                isCurrentUser={true}
                currentMessageBg={'bg-[#2B1818]'}
                sender={'Moderator'}
              />
            </li>
            <li className='flex items-end justify-end'>
              <Message
                content={t('automessage-requisite', { ns: 'chat' })}
                isCurrentUser={true}
                currentMessageBg={'bg-[#2B1818]'}
                sender={'Moderator'}
              />
            </li>
          </ul>
        </div>
        {isSuccess &&
          historyMessages.messages.map((messages, idx) => {
            if (messages[0].sender != '"Moderator"') {
              return (
                <div className='flex items-start gap-[10px]' key={idx}>
                  {!isMobile && avatar && (
                    <div className='min-max-20 mobile:min-max-24 rounded-sm overflow-hidden'>
                      <img className='object-fill w-full h-full' src={avatar} />
                    </div>
                  )}
                  {!isMobile && !avatar && <span className='min-max-20 mobile:min-max-24 bg-admin rounded-sm' />}
                  <ul className='flex flex-col gap-[10px] flex-grow'>
                    <li className='flex'>
                      <Message
                        content={messages[0].text}
                        img_id={messages[1][0]}
                        chat_id={messages[0].chat_id}
                        isCurrentUser={false}
                        sender={'Moderator'}
                      />
                    </li>
                  </ul>
                </div>
              );
            }
            if (messages[0].sender == '"Moderator"') {
              return (
                <div className='flex items-start gap-[10px] flex-row-reverse' key={idx}>
                  {!isMobile && (
                    <img src='/favicon/admin/favicon.ico' className='min-max-20 mobile:min-max-24 rounded-sm' />
                  )}
                  <ul className='flex flex-grow flex-col gap-[10px]'>
                    <li className='flex items-end justify-end'>
                      <Message
                        content={
                          messages[0].text == 'automessage-payed'
                            ? t('automessage-payed', { ns: 'chat' })
                            : messages[0].text
                        }
                        img_id={messages[1][0]}
                        chat_id={messages[0].chat_id}
                        isCurrentUser={true}
                        currentMessageBg={'bg-[#2B1818]'}
                        sender={'Moderator'}
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

export default ModeratorChatBody;
