type Params<T> = {
  data: Array<T>;
};

export const convertToArray = <T>(data: Params<T>): Array<T> => {
  const dataArray: Array<T> = [];

  for (const key in data) {
    /* @ts-ignore */
    dataArray.push(data[key]);
  }

  return dataArray;
};
