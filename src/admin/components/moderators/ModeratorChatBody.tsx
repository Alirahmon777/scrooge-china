import Message from '@components/payment/Message';

const ModeratorChatBody = () => {
  return (
    <div className='min-h-[330px] max-h-[340px] overflow-y-auto flex-grow'>
      <div className='flex flex-col gap-5'>
        {/* <div className='flex items-start gap-[10px] flex-row-reverse'>
          <span className='min-w-5 min-h-5 mobile:min-w-6 mobile:min-h-6 bg-admin rounded-sm' />
          <ul className='flex flex-grow flex-col gap-[10px]'>
            <li className='flex items-end justify-end'>
              <Message
                content='Уважаемый пользователь переведите средства по реквизитам и нажмите кнопку “Оплачено“ если вы хотите изменить способ оплаты или просто передумали нажмите кнопку " Отменить заказ " {new_line_br}{new_line_br} Реквизиты Тинькофф: 2200 7009 3558 9290 | Бакитгалей И'
                isCurrentUser={true}
                currentMessageBg={'bg-[#2B1818]'}
              />
            </li>
          </ul>
        </div>
        <div className='flex items-start gap-[10px]'>
          <span className='min-w-5 min-h-5 mobile:min-w-6 mobile:min-h-6 bg-admin rounded-sm' />
          <ul className='flex flex-col gap-[10px] flex-grow'>
            <li className='flex'>
              <Message content='Я сделал перевод, жду юани' isCurrentUser={false} />
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default ModeratorChatBody;
