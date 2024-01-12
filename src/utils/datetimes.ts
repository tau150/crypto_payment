export const formatDateTime = (date: string, locale = "es-ES"): string => {
  const format: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Intl.DateTimeFormat(locale, format).format(new Date(date)).replace(",", "");
};

export const getExpireTime = (expireTime: string): { minutes: number; seconds: number } => {
  const expireTimeDate = new Date(expireTime);

  const currentTime = new Date();

  const differenceInMilliseconds = expireTimeDate.getTime() - currentTime.getTime();
  const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
  const seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);

  return { minutes, seconds };
};
