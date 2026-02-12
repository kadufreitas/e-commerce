import { productRepository as createProductRepository } from '@/src/infra/product.respository';
import { clientRepository as createClientRepository } from '@/src/infra/client.respository';
import * as ApiService from '@/src/infra/api.service';
import {
  getAllProducts as createGetAllProducts,
  getProductById as createGetProductById,
  getProductByName as createGetProductByName,
} from '@/src/application/product';
import {
  getClient as createGetClient,
  register as createRegister,
  signIn as createSignIn,
} from '@/src/application/client';

const productRepository = createProductRepository({
  apiService: ApiService,
});

const clientRepository = createClientRepository({
  apiService: ApiService,
});

const getAllProducts = createGetAllProducts({ productRepository });
const getProductById = createGetProductById({ productRepository });
const getProductByName = createGetProductByName({ productRepository });

const getClient = createGetClient({ clientRepository });
const register = createRegister({ clientRepository });
const signIn = createSignIn({ clientRepository });

export {
  getAllProducts,
  getProductById,
  getProductByName,
  getClient,
  register,
  signIn,
};
