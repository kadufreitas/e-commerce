import { Address } from '@/lib/utils/values-object/address';
import { Email } from '@/lib/utils/values-object/email';
import { Phone } from '@/lib/utils/values-object/phone';

export interface Client {
  id: string;
  name: string;
  email: Email;
  phone: Phone;
  address: Address;
  // document?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ClientInfo = Omit<Client, 'id' | 'createdAt' | 'updatedAt'>;

export interface Callbacks {
  onSuccess: (client: Client | null) => void;
  onError: (error: Error) => void;
}

export interface ClientServices {
  getByToken(token: string): Promise<Client | null>;
  getByAuth(auth: { email: string; password: string }): Promise<Client | null>;
  create(client: ClientInfo): Promise<Client>;
  update(id: string, client: Partial<ClientInfo>): Promise<Client>;
  delete(id: string, token: string): Promise<void>;
}
