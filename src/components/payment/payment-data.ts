import tinkoff from '@svgs/payment/tinkoff.svg';
import qiwi from '@svgs/payment/qiwi.svg';
import sberbank from '@svgs/payment/sberbank.svg';
import yoomoney from '@svgs/payment/yoomoney.svg';
import kaspibank from '@svgs/payment/kaspi-bank.svg';
import usdt from '@svgs/payment/usdt.svg';

export const paymentIncrementButtons = [
  { label: '1000¥', increment_data: 1000 },
  { label: '3000¥', increment_data: 3000 },
  { label: '5000¥', increment_data: 5000 },
  { label: '10000¥', increment_data: 10000 },
];

export const paymentMethods = [
  {
    title: 'Банковские карты - RU',
    buttons: [
      { id: '1', label: 'Tinkoff', leftIcon: tinkoff },
      { id: '2', label: 'SberBank', leftIcon: sberbank },
      { id: '3', label: 'Qiwi', leftIcon: qiwi },
      { id: '4', label: 'Yoomoney', leftIcon: yoomoney },
    ],
  },
  { title: 'Банковские карты - KZ', buttons: [{ id: '5', label: 'Kaspi Bank', leftIcon: kaspibank }] },
  { title: 'Криптовалюта', buttons: [{ id: '6', label: 'USDT', leftIcon: usdt }] },
];

export const paymentMessages = [
  {
    userId: 1,
    isModerator: true,
    content: `Уважаемый пользователь переведите средства по реквизитам и нажмите кнопку “Оплачено“ если вы хотите изменить способ оплаты или просто передумали нажмите кнопку "Отменить заказ"`,
  },
  {
    userId: 1,
    isModerator: true,
    content: 'Реквизиты Тинькофф: 2200 7009 3558 9290 | Бакитгалей И',
  },
  {
    userId: 2,
    isModerator: false,
    content: 'Я сделал перевод, жду юани',
  },
  {
    userId: 2,
    isModerator: false,
    content: 'Сейчас скину qr код от buff',
  },
];
