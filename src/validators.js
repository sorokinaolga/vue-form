export const validPhone = (value) => (value - value%10000000000)/10000000000 === 7;

export const validDate = (validatedDate) => {
  const date = new Date(validatedDate).getTime();
  const currentDate = Date.now();

  return date <= currentDate;
};