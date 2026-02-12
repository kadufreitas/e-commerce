import { Order, OrderInfo } from './order.entity';

export interface OrderRepositoryInterface {
  findById(id: string): Promise<Order | null>;
  findByClientId(clientId: string): Promise<Order[]>;
  findAll(): Promise<Order[]>;
  create(order: OrderInfo): Promise<Order>;
  update(id: string, order: Partial<OrderInfo>): Promise<Order>;
  delete(id: string): Promise<void>;
}
