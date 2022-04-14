export const formatDate = (date: string) => {
  const DATE = new Date(date);
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth();
  const DAY = DATE.getDate();
  const HOURS = DATE.getHours();
  const MINUTES = DATE.getMinutes();
  const SECONDS = DATE.getSeconds();

  const month = MONTH + 1 < 10 ? `0${MONTH}` : MONTH;
  const day = DAY < 10 ? `0${DAY}` : DAY;
  const hours = HOURS < 10 ? `0${HOURS}` : HOURS;
  const minutes = MINUTES < 10 ? `0${MINUTES}` : MINUTES;
  const seconds = SECONDS < 10 ? `0${SECONDS}` : SECONDS;

  return `${YEAR}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
