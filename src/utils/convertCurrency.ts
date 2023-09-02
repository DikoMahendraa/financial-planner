export const convertCurrency = (value: number) => {
  const numericValue: number = Number(
    value?.toString().replace(/[^0-9.]/g, '')
  );

  if (!isNaN(numericValue)) {
    const formattedValue = new Intl.NumberFormat('id-ID', {}).format(
      parseFloat(String(numericValue))
    );

    return formattedValue;
  }

  return value;
};
