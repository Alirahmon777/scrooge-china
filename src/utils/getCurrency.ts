export const getCurrency = (symbol: string) => {
  if (symbol.includes('₽') || symbol.includes('рубль') || symbol.toLowerCase().includes('rub')) {
    return 'RUB';
  }
  if (symbol.includes('₮') || symbol.toLowerCase().includes('usdt')) {
    return 'USD';
  }
  if (symbol.includes('₸') || symbol.toLowerCase().includes('kzt')) {
    return 'KZT';
  }

  return 'Unknown currency';
};
