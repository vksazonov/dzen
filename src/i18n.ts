import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header: {
            search: 'Search',
            months: {
              jan: 'Jan',
              feb: 'Feb',
              mar: 'Mar',
              apr: 'Apr',
              may: 'May',
              jun: 'Jun',
              jul: 'Jul',
              aug: 'Aug',
              sep: 'Sep',
              oct: 'Oct',
              nov: 'Nov',
              dec: 'Dec'
            },
            weekDays: {
              sun: 'Sunday',
              mon: 'Monday',
              tue: 'Tuesday',
              wed: 'Wednesday',
              thu: 'Thursday',
              fri: 'Friday',
              sat: 'Saturday'
            }
          },
          client: {
            orders: 'Orders',
            products: 'Products'
          },
          product: {
            title: 'Products',
            type: 'Type',
            sort: 'Sort'
          },
          filter: {
            all: 'All',
            laptops: 'Laptops',
            monitors: 'Monitors',
            consoles: 'Consoles',
            tvs: 'TVs',
            phones: 'Phones'
          },
          sorting: {
            byName: 'By name',
            byPriceAsc: 'By price ↑',
            byPriceDesc: 'By price ↓',
            byDateAsc: 'By date ↑',
            byDateDesc: 'By date ↓'
          },
          notFound: 'According to your request, nothing was found',
          free: 'Free',
          repair: 'Under repair',
          from: 'from',
          to: 'to',
          new: 'New',
          used: 'Used',
          uah: 'UAH',
          orderNo: 'Order',
          deleteProduct: 'Are you sure, you want to delete this product?',
          deleteOrder: 'Are you sure, you want to delete this order?',
          delete: 'DELETE',
          cancel: 'CANCEL',
          orders: 'Orders',
          productsQuantity: 'Рroducts',
          productsOne: 'Product',
          noOrders: 'There are no available orders at the moment.',
          add: 'Add a product',
          language: 'Language'
        }
      },
      ru: {
        translation: {
          header: {
            search: 'Поиск',
            months: {
              jan: 'Янв',
              feb: 'Фев',
              mar: 'Мар',
              apr: 'Апр',
              may: 'Май',
              jun: 'Июн',
              jul: 'Июл',
              aug: 'Авг',
              sep: 'Сен',
              oct: 'Окт',
              nov: 'Ноя',
              dec: 'Дек'
            },
            weekDays: {
              sun: 'Воскресенье',
              mon: 'Понедельник',
              tue: 'Вторник',
              wed: 'Среда',
              thu: 'Четверг',
              fri: 'Пятница',
              sat: 'Суббота'
            }
          },
          client: {
            orders: 'Заказы',
            products: 'Продукты'
          },
          product: {
            title: 'Продукты',
            type: 'Тип',
            sort: 'Сортировка'
          },
          filter: {
            all: 'Все',
            laptops: 'Ноутбуки',
            monitors: 'Мониторы',
            consoles: 'Консоли',
            tvs: 'Телевизоры',
            phones: 'Телефоны'
          },
          sorting: {
            byName: 'По имени',
            byPriceAsc: 'По цене ↑',
            byPriceDesc: 'По цене ↓',
            byDateAsc: 'По дате ↑',
            byDateDesc: 'По дате ↓'
          },
          notFound: 'По вашему запросу ничего не найдено',
          free: 'Свободен',
          repair: 'В ремонте',
          from: 'c',
          to: 'по',
          new: 'Новый',
          used: 'Б/У',
          uah: 'грн',
          orderNo: 'Заказ',
          deleteProduct: 'Вы уверены, что хотите удалить этот товар?',
          deleteOrder: 'Вы уверены, что хотите удалить этот заказ?',
          delete: 'УДАЛИТЬ',
          cancel: 'ОТМЕНИТЬ',
          orders: 'Заказы',
          productsQuantity: 'Продукта',
          productsOne: 'Продукт',
          noOrders: 'Сейчас нет доступных заказов.',
          add: 'Добавить продукт',
          language: 'Язык'
        }
      }
    },
  });

export default i18n;