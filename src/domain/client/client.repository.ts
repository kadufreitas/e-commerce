import { Client, ClientInfo } from './client.entity';

export interface ClientRepository {
  findByToken(token: string): Promise<Client | null>;
  findByAuth(auth: { email: string; password: string }): Promise<Client | null>;
  create(client: ClientInfo): Promise<Client>;
  update(id: string, client: Partial<ClientInfo>): Promise<Client>;
  delete(id: string): Promise<void>;
}
