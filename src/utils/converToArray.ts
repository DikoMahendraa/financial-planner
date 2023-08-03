type Params<T> = {
  data: Array<T>;
};

export const convertToArray = <T>(data: Partial<Params<T>>): Array<T> => {
  const dataArray: Array<T> = [];

  for (const key in data) {
    dataArray.push({
      /* @ts-ignore */
      ...data[key],
      uuid: key
    });
  }

  return dataArray;
};
