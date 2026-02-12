import { Address } from '../values-object/address';
import { Email } from '../values-object/email';
import { Phone } from '../values-object/phone';

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
