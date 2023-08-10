export const calculateSum = (data: number[]) => {
  const sum = data.reduce((acc, num) => acc + num, 0);
  return sum;
};
