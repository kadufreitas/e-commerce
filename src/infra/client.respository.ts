import { ClientRepository } from '@/src/domain/client';
import * as ApiService from './api.service';

type Dependencies = {
  apiService: typeof ApiService;
};

export const clientRepository = ({
  apiService,
}: Dependencies): ClientRepository => ({
  async getByToken(token) {
    const { data } = await apiService.authGet({
      url: 'users/me',
      token,
    });

    return data.user;
  },
  async getByAuth(auth) {
    const { data } = await apiService.get('users/login', {
      params: {
        user: auth,
      },
    });

    return data.user;
  },
  create(user) {
    return apiService.post('users', { user }).then(({ data }) => data.user);
  },
  async update(id, editingUser) {
    const { data } = await apiService.authPut({
      url: `users/${id}`,
      data: { user: editingUser },
      token: '',
    });
    return data.user;
  },
  async delete(id, token) {
    await apiService.authDel({ url: `users/${id}`, token });
  },
});
