export interface Product {
  id: string;
  name: string;
  description: string;
  img: string;
  price: number;
  stock: number;
  soldCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductInfo = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type Filters = {
  name?: string;
  priceRange?: { min: number; max: number };
  inStock?: boolean;
  topSelling?: boolean;
};

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
  create(product: ProductInfo): Promise<Product>;
  update(id: string, product: Partial<ProductInfo>): Promise<Product>;
  delete(id: string): Promise<void>;
}
