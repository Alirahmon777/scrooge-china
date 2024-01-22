import Message from './Message';

const PaymentChatBody = () => {
  return (
    <div className='min-h-[330px] flex-grow'>
      <div className='flex flex-col gap-5'>
        <div className='flex items-start gap-[10px]'>
          <span className='w-6 h-6 bg-success rounded-sm' />
          <ul className='flex flex-col gap-[10px]'>
            <li>
              <Message
                content='Уважаемый пользователь переведите средства по реквизитам и нажмите кнопку “Оплачено“ если вы хотите изменить способ оплаты или просто передумали нажмите кнопку " Отменить заказ "'
                isCurrentUser={false}
              />
            </li>
            <li>
              <Message content='Реквизиты Тинькофф: 2200 7009 3558 9290 | Бакитгалей И' isCurrentUser={false} />
            </li>
          </ul>
        </div>
        <div className='flex items-start gap-[10px] flex-row-reverse'>
          <span className='w-6 h-6 bg-success rounded-sm' />
          <ul className='flex flex-col gap-[10px]'>
            <li>
              <Message content='Хорошо, сейчас все переведу' isCurrentUser={true} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentChatBody;