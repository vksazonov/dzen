import { Product } from '../types/Product';
//import axios from 'axios';

export const productsFromServer: Product[] = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: 1,
    photo: './images/products/monitor.jpg',
    title: 'Samsung Odyssey G5',
    type: 'monitors',
    specification: 'Specification 1',
    guarantee: {
      start: '2018/06/29',
      end: '2020/06/29'
    },
    price: [
      {value: 330, symbol: 'USD', isDefault: 0},
      {value: 9999, symbol: 'UAH', isDefault: 1}
    ],
    order: [1, 4, 6],
    date: '2018/06/29'
  },
  {
    id: 2,
    serialNumber: 1324,
    isNew: 0,
    photo: './images/products/monitor2.jpg',
    title: 'Asus TUF Gaming VG27AQ',
    type: 'monitors',
    specification: 'Specification 2',
    guarantee: {
      start: '2019/06/29',
      end: '2021/06/29'
    },
    price: [
      {value: 338, symbol: 'USD', isDefault: 0},
      {value: 12499, symbol: 'UAH', isDefault: 1}
    ],
    order: [1, 2, 4, 6],
    date: '2019/06/29'
  },
  {
    id: 3,
    serialNumber: 1342,
    isNew: 1,
    photo: './images/products/playstation.jpg',
    title: 'PS5 PlayStation 5',
    type: 'consoles',
    specification: 'Specification 1',
    guarantee: {
      start: '2023/06/29',
      end: '2024/06/29'
    },
    price: [
      {value: 615, symbol: 'USD', isDefault: 0},
      {value: 22699, symbol: 'UAH', isDefault: 1}
    ],
    order: [2, 4, 6],
    date: '2023/06/29'
  },
  {
    id: 4,
    serialNumber: 1423,
    isNew: 0,
    photo: './images/products/switch.jpg',
    title: 'Nintendo Switch OLED',
    type: 'consoles',
    specification: 'Specification 2',
    guarantee: {
      start: '2017/08/29',
      end: '2021/06/29'
    },
    price: [
      {value: 487, symbol: 'USD', isDefault: 0},
      {value: 17999, symbol: 'UAH', isDefault: 1}
    ],
    order: [2, 4, 6],
    date: '2017/08/29'
  },
  {
    id: 5,
    serialNumber: 1432,
    isNew: 0,
    photo: './images/products/strix.jpg',
    title: 'ASUS ROG Strix G17',
    type: 'laptops',
    specification: 'Specification 2',
    guarantee: {
      start: '2020/06/29',
      end: '2023/06/29'
    },
    price: [
      {value: 2070, symbol: 'USD', isDefault: 0},
      {value: 76437, symbol: 'UAH', isDefault: 1}
    ],
    order: [],
    date: '2020/06/29'
  },
  {
    id: 6,
    serialNumber: 2134,
    isNew: 1,
    photo: './images/products/legion.jpg',
    title: 'Lenovo Legion 5',
    type: 'laptops',
    specification: 'Specification 1',
    guarantee: {
      start: '2021/06/29',
      end: '2023/06/29'
    },
    price: [
      {value: 1354, symbol: 'USD', isDefault: 0},
      {value: 49999, symbol: 'UAH', isDefault: 1}
    ],
    order: [3],
    date: '2021/06/29'
  },
  {
    id: 7,
    serialNumber: 2314,
    isNew: 1,
    photo: './images/products/samsung.jpg',
    title: 'Samsung QE55Q60CAUXUA',
    type: 'tvs',
    specification: 'Specification 1',
    guarantee: {
      start: '2020/07/29',
      end: '2020/07/29'
    },
    price: [
      {value: 866, symbol: 'USD', isDefault: 0},
      {value: 31999, symbol: 'UAH', isDefault: 1}
    ],
    order: [3],
    date: '2020/07/29'
  },
  {
    id: 8,
    serialNumber: 2341,
    isNew: 0,
    photo: './images/products/lg.jpg',
    title: 'LG 50NANO826QB',
    type: 'tvs',
    specification: 'Specification 2',
    guarantee: {
      start: '2021/06/30',
      end: '20225/06/30'
    },
    price: [
      {value: 622, symbol: 'USD', isDefault: 0},
      {value: 22999, symbol: 'UAH', isDefault: 1}
    ],
    order: [6],
    date: '2021/06/30'
  },
  {
    id: 9,
    serialNumber: 3124,
    isNew: 1,
    photo: './images/products/iphone.jpg',
    title: 'Apple iPhone 14 Pro Max 128GB Deep Purple',
    type: 'phones',
    specification: 'Specification 1',
    guarantee: {
      start: '2022/10/29',
      end: '2025/10/29'
    },
    price: [
      {value: 1448, symbol: 'USD', isDefault: 0},
      {value: 53499, symbol: 'UAH', isDefault: 1}
    ],
    order: [5],
    date: '2022/10/29'
  },
  {
    id: 10,
    serialNumber: 2431,
    isNew: 0,
    photo: './images/products/s21.jpg',
    title: 'Samsung Galaxy S21 FE 8/256GB Olive',
    type: 'phones',
    specification: 'Specification 2',
    guarantee: {
      start: '2023/05/29',
      end: '2025/05/29'
    },
    price: [
      {value: 622, symbol: 'USD', isDefault: 0},
      {value: 22999, symbol: 'UAH', isDefault: 1}
    ],
    order: [3, 5],
    date: '2023/05/29'
  }
];

export const fetchOrders = async () => {
  try {
    //const response = await axios.get('API_endpoint');
    //const productsFromServer = response.data;

    return productsFromServer;
  } catch (error) {
    throw new Error('An error occured while fetching products');
  }
};