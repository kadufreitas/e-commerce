import { Product, ProductInfo } from './product.entity';

export type PageOptions = {
  page?: number;
  limit?: number;
};

export interface ProductRepository {
  findById(id: string): Promise<Product | null>;
  findByName(name: string): Promise<Product | null>;
  findAll({ page, limit }: PageOptions): Promise<Product[]>;
  create(product: ProductInfo): Promise<Product>;
  update(id: string, product: Partial<ProductInfo>): Promise<Product>;
  delete(id: string): Promise<void>;
}
