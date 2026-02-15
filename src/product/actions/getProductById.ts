import { Callbacks, Product } from '../product.model';
import { productServices } from '../product.services';

type Args = {
  productName: string;
};

export const getProductByName = async (
  { productName }: Args,
  callbacks?: Callbacks<Product>,
) => {
  const { onSuccess, onError } = callbacks || {};

  try {
    const product = await productServices.findByName(productName);

    onSuccess?.(product);

    return product;
  } catch (error) {
    onError?.(error as Error);

    return null;
  }
};
