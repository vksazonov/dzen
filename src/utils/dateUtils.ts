export const shortenDate = (date: string) => (
  date.split('/').slice(1).reverse().join('/')
);

export const fullDate = (date: string) => {
  const dateObject = new Date(date);
  const getMonth = (monthNumber: number) => {
    const months = [
      'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
      'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ];

    return months[monthNumber];
  };

  return dateObject.getDate() + '/' +
  getMonth(dateObject.getMonth()) + '/' +
  dateObject.getFullYear();
};