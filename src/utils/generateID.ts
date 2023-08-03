export const generateRandomUUID = (): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomUUID: string = '';

  for (let i = 0; i < 9; i++) {
    const randomIndex: number = Math.floor(Math.random() * characters.length);
    randomUUID += characters.charAt(randomIndex);
  }

  return randomUUID;
};
