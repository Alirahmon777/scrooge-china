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

export const getSymbolCurrency = (currency: string) => {
  if (currency.includes('₽') || currency.includes('рубль') || currency.toLowerCase().includes('rub')) {
    return '₽';
  }
  if (currency.includes('$') || currency.toLowerCase().includes('usd') || currency.toLowerCase().includes('usdt')) {
    return '$';
  }
  if (currency.includes('₸') || currency.toLowerCase().includes('kzt')) {
    return '₸';
  }

  return 'Unknown currency';
};
