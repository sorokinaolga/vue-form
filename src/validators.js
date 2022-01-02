export const validPhone = (value) => String(value)[0] === '7';

export const validDate = (validatedDate) => {
  const date = new Date(validatedDate).getTime();
  const currentDate = Date.now();

  return date <= currentDate;
};