import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  const d = dayjs(date);
  return d.format('YYYY-MM-DD HH:mm:ss');
};
