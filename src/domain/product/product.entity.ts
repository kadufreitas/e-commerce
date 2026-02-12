export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductInfo = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
