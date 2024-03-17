export const getAmount = (amount?: string, rate?: string) => {
  return parseFloat((+(amount as string) * +(rate as string)).toFixed(1)).toString();
};
