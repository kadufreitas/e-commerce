import { ProductRepository } from '@/src/domain/product';
import * as ApiService from './api.service';

type Dependencies = {
  apiService: typeof ApiService;
};

export const productRepository = ({
  apiService,
}: Dependencies): ProductRepository => ({
  async findById(id) {
    const { data } = await apiService.get(`products/${id}`);
    return data.product;
  },
  async findByName(name) {
    const { data } = await apiService.get('products', {
      params: { name },
    });
    return data.product;
  },
  async findAll({ page, limit }) {
    const { data } = await apiService.get('products', {
      params: { page, limit },
    });
    return data.products;
  },
  async create(product) {
    const { data } = await apiService.post('products', { product });
    return data.product;
  },
  async update(id, product) {
    const { data } = await apiService.put(`products/${id}`, { product });
    return data.product;
  },
  async delete(id) {
    await apiService.del(`products/${id}`);
  },
});
