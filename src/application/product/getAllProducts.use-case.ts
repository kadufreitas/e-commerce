import { PageOptions, Product, ProductRepository } from '@/src/domain/product';

type Dependencies = {
  productRepository: ProductRepository;
};

type Callbacks = {
  onSuccess?: (products: Product[] | null) => void;
  onError?: (error: Error) => void;
};

type Args = {
  pageOptions: PageOptions;
};

export const getAllProducts = ({ productRepository }: Dependencies) => {
  return async ({ pageOptions }: Args, callbacks?: Callbacks) => {
    try {
      const products = await productRepository.findAll(pageOptions);

      callbacks?.onSuccess?.(products);

      return products;
    } catch (error) {
      return callbacks?.onError?.(error as Error);
    }
  };
};
