import { useTranslation } from 'react-i18next';

export const shortenDate = (date: string) => (
  date.split('/').slice(1).reverse().join('/')
);

export const fullDate = (date: string) => {
  const { t } = useTranslation();
  const dateObject = new Date(date);

  return (
    dateObject.getDate() +
    '/' +
    t(`header.months.${dateObject.toLocaleString('en', { month: 'short' }).toLowerCase()}`) +
    '/' +
    dateObject.getFullYear()
  );
};