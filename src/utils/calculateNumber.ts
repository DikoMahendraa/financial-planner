export const calculateSum = (data: number[]) => {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('Input data should be an array with at least one number.');
  }

  const sum = data.reduce((acc, num) => acc + num, 0);
  return sum;
};
