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
      { label: 'Tinkoff', leftIcon: tinkoff },
      { label: 'SberBank', leftIcon: sberbank },
      { label: 'Qiwi', leftIcon: qiwi },
      { label: 'Yoomoney', leftIcon: yoomoney },
    ],
  },
  { title: 'Банковские карты - KZ', buttons: [{ label: 'Kaspi Bank', leftIcon: kaspibank }] },
  { title: 'Криптовалюта', buttons: [{ label: 'USDT', leftIcon: usdt }] },
];
