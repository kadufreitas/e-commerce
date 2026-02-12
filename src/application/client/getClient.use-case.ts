import { ClientRepository } from '../../domain/client/client.repository';
import { Client } from '../../domain/client/client.entity';

type Dependencies = {
  clientRepository: ClientRepository;
};

type Callbacks = {
  onSuccess: (client: Client | null) => void;
  onError: (error: Error) => void;
};

type Args = {
  token: string;
};

export const getClient = ({ clientRepository }: Dependencies) => {
  return async ({ token }: Args, { onSuccess, onError }: Callbacks) => {
    try {
      const client = await clientRepository.findByToken(token);

      return onSuccess(client);
    } catch (error) {
      return onError(error as Error);
    }
  };
};
