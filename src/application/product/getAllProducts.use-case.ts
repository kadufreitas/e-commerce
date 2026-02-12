import { PageOptions, Product, ProductRepository } from '@/src/domain/product';

type Dependencies = {
  productRepository: ProductRepository;
};

type Callbacks = {
  onSuccess: (products: Product[] | null) => void;
  onError: (error: Error) => void;
};

type Args = {
  pageOptions: PageOptions;
};

export const getAllProducts = ({ productRepository }: Dependencies) => {
  return async ({ pageOptions }: Args, { onSuccess, onError }: Callbacks) => {
    try {
      const products = await productRepository.findAll(pageOptions);

      return onSuccess(products);
    } catch (error) {
      return onError(error as Error);
    }
  };
};
