export const convertCurrency = (value: number) => {
  const currency = Number(value)?.toLocaleString('id-ID', {
    currency: 'IDR',
    minimumFractionDigits: 0
  });

  return currency;
};
