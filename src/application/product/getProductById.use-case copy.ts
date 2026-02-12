import { Product, ProductRepository } from '@/src/domain';

type Dependencies = {
  productRepository: ProductRepository;
};

type Callbacks = {
  onSuccess: (product: Product | null) => void;
  onError: (error: Error) => void;
};

type Args = {
  productName: string;
};

export const getProductByName = ({ productRepository }: Dependencies) => {
  return async ({ productName }: Args, { onSuccess, onError }: Callbacks) => {
    try {
      const product = await productRepository.findByName(productName);

      return onSuccess(product);
    } catch (error) {
      return onError(error as Error);
    }
  };
};
