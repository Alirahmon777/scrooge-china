import { useEffect, useRef, useState } from 'react';
import Message from '@/components/payment/Message';
import { useGetHistoryMutation } from '@/redux/features/services/admin/adminService';
import { useGetAvatarUrlQuery, useGetRequisitesQuery } from '@/redux/features/services/public/publicService';
import {} from '@/redux/features/services/user/userService';
import { IOrder } from '@/types/interfaces';
import { handleSimpleError } from '@/utils/handleError';
import { subYears } from 'date-fns';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'usehooks-ts';
import { useGetOrderMessagesQuery } from '@/redux/features/services/admin/moderatorService';

interface IProps {
  id: string;
}

const Chat = ({ id }: IProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 375px)');
  const { t } = useTranslation('chat', { lng: 'ru' });
  const [order, setOrder] = useState<IOrder>();
  const [getOrder] = useGetHistoryMutation();
  const date = subYears(new Date(), 100);
  const isoStringWithoutTimezone = date.toISOString().slice(0, -1);
  const { data: all_requisites } = useGetRequisitesQuery(undefined, {
    skip: !order?.requisites_id,
  });
  const { data: historyMessages, isSuccess: historyMessageSuccess } = useGetOrderMessagesQuery(id, {
    skip: !id,
  });
  const { data: avatar } = useGetAvatarUrlQuery(order?.steam_id as string, { skip: !order?.steam_id });

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await getOrder({
          start_datetime: isoStringWithoutTimezone,
          end_datetime: new Date().toISOString().slice(0, -1),
        }).unwrap();
        const data = response.find((order) => order.id == id);
        setOrder(data);
      } catch (err) {
        handleSimpleError(err);
      }
    })();
  }, []);

  return (
    <div className='min-h-[330px] max-h-[340px] overflow-y-auto max-w-[800px] pr-1 max-[375px]:pr-2' ref={scrollRef}>
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
                content={
                  t(`automessage-requisite-${order?.payment_method.toLocaleLowerCase().replace(' ', '')}`, {
                    ns: 'chat',
                  }) + ` ${all_requisites?.find((req) => req.id == order?.requisites_id)?.data}`
                }
                isCurrentUser={true}
                currentMessageBg={'bg-[#2B1818]'}
                sender={'Moderator'}
              />
            </li>
          </ul>
        </div>
        {historyMessageSuccess &&
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

export default Chat;
