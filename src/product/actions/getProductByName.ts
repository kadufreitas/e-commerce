import { Callbacks, Product } from '../product.model';
import { productServices } from '../product.services';

type Args = {
  productId: string;
};

export const getProductById = async (
  { productId }: Args,
  callbacks?: Callbacks<Product>,
) => {
  const { onSuccess, onError } = callbacks || {};

  try {
    const product = await productServices.findById(productId);

    onSuccess?.(product);

    return product;
  } catch (error) {
    onError?.(error as Error);

    return null;
  }
};
