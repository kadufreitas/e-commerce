import { Product, ProductRepository } from '@/src/domain';

type Dependencies = {
  productRepository: ProductRepository;
};

type Callbacks = {
  onSuccess: (product: Product | null) => void;
  onError: (error: Error) => void;
};

type Args = {
  productId: string;
};

export const getProductById = ({ productRepository }: Dependencies) => {
  return async ({ productId }: Args, { onSuccess, onError }: Callbacks) => {
    try {
      const product = await productRepository.findById(productId);

      return onSuccess(product);
    } catch (error) {
      return onError(error as Error);
    }
  };
};
