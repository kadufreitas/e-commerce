import * as apiService from '@/lib/api.service';
import { ProductServices } from './product.model';

export const productServices: ProductServices = {
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
  async findAll({ page, limit, filters }) {
    const { data } = await apiService.get('products', {
      params: { page, limit, ...filters },
    });
    return data.products;
  },
  async getRecommendations(strategy) {
    const { data } = await apiService.get('products/recommendations', {
      params: { strategy },
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
};
