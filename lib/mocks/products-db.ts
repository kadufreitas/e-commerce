import { Product } from '@/src/domain/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Product A',
    price: 10,
    description: 'Description for Product A',
    createdAt: new Date(),
    updatedAt: new Date(),
    stock: 100,
  },
  {
    id: '2',
    name: 'Product B',
    price: 20,
    description: 'Description for Product B',
    createdAt: new Date(),
    updatedAt: new Date(),
    stock: 50,
  },
];
