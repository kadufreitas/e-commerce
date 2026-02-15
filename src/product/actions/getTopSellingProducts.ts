import { Callbacks } from '../product.model';
import { productServices } from '../product.services';

export const getTopSellingProducts = async (callbacks?: Callbacks) => {
  const { onSuccess, onError } = callbacks || {};

  try {
    const products = await productServices.findAll({
      filters: { topSelling: true },
    });

    onSuccess?.(products);

    return products;
  } catch (error) {
    onError?.(error as Error);

    return null;
  }
};
