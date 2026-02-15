import { Callbacks, PageOptions } from '../product.model';
import { productServices } from '../product.services';

type Args = {
  pageOptions: PageOptions;
};

export const getAllProducts = async (
  { pageOptions }: Args,
  callbacks?: Callbacks,
) => {
  const { onSuccess, onError } = callbacks || {};

  try {
    const products = await productServices.findAll(pageOptions);

    onSuccess?.(products);

    return products;
  } catch (error) {
    onError?.(error as Error);

    return null;
  }
};
