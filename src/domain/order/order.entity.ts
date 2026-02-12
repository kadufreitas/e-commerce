import { Address } from '../values-object/address';

export interface Order {
  id: string;
  clientId: string;
  productIds: string[];
  totalAmount: number;
  shippingAddress: Address;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export type OrderInfo = Omit<Order, 'id' | 'createdAt' | 'updatedAt'>;
