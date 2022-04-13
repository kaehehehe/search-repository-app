export const formatDate = (date: string) => {
  const DATE = new Date(date);
  const year = DATE.getFullYear();
  const month = DATE.getMonth() + 1;
  const day = DATE.getDate();
  const hours = DATE.getHours();
  const minutes = DATE.getMinutes();
  const seconds = DATE.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
