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
  auth: { email: string; password: string };
};

export const signIn = ({ clientRepository }: Dependencies) => {
  return async ({ auth }: Args, { onSuccess, onError }: Callbacks) => {
    try {
      const client = await clientRepository.findByAuth(auth);

      return onSuccess(client);
    } catch (error) {
      return onError(error as Error);
    }
  };
};
