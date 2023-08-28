import { Order } from '../types/Order';

export const ordersFromServer: Order[] = [
  {
    id: 1,
    title: 'Длинное предлинное длиннючее название прихода',
    date: '2023/06/29',
    description: 'desc',
    products: [1, 2],
  },
  {
    id: 2,
    title: 'Длинное название прихода',
    date: '2023/04/17',
    description: 'desc',
    products: [2, 3, 4],
  },
  {
    id: 3,
    title: 'Короткое',
    date: '2023/08/01',
    description: 'desc',
    products: [6, 7, 10],
  },
  {
    id: 4,
    title: 'Длинное предлинное длиннючее длиннейшее название прихода',
    date: '2023/08/01',
    description: 'desc',
    products: [1, 2, 3, 4, 6, 7, 10],
  },
  {
    id: 5,
    title: 'Длинное предлинное название прихода',
    date: '2023/08/01',
    description: 'desc',
    products: [7, 9, 10],
  },
  {
    id: 6,
    title: 'Предлинное длиннючее название прихода',
    date: '2023/08/01',
    description: 'desc',
    products: [1, 2, 3, 4, 8],
  }
];