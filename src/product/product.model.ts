import { Money } from '@/lib/utils/values-object/Money';

export interface Product {
  id: string;
  name: string;
  description: string;
  img: string;
  price: Money;
  stock: number;
  soldCount: number;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductInfo = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type Filters = {
  name?: string;
  priceRange?: { min: Money; max: Money };
  inStock?: boolean;
};

export const ProductStrategy = {
  BEST_SELLERS: 'best-sellers',
  FEATURED: 'featured',
  SIMILAR_ITEMS: 'similar-items',
} as const;

export type ProductStrategyType =
  (typeof ProductStrategy)[keyof typeof ProductStrategy];

export type PageOptions = {
  page?: number;
  limit?: number;
};

export type Callbacks<T = Product[]> = {
  onSuccess?: (products: T | null) => void;
  onError?: (error: Error) => void;
};

export interface ProductServices {
  findById(id: string): Promise<Product | null>;
  findByName(name: string): Promise<Product | null>;
  findAll({
    page,
    limit,
    filters,
  }: PageOptions & { filters?: Filters }): Promise<Product[]>;
  getRecommendations(strategy: ProductStrategyType): Promise<Product[]>;
  create(product: ProductInfo): Promise<Product>;
  update(id: string, product: Partial<ProductInfo>): Promise<Product>;
  delete(id: string): Promise<void>;
}
