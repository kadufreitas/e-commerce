import { Client, ClientInfo } from './client.entity';

export interface ClientRepository {
  getByToken(token: string): Promise<Client | null>;
  getByAuth(auth: { email: string; password: string }): Promise<Client | null>;
  create(client: ClientInfo): Promise<Client>;
  update(id: string, client: Partial<ClientInfo>): Promise<Client>;
  delete(id: string, token: string): Promise<void>;
}
