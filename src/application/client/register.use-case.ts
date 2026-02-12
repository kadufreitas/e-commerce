import { Client, ClientInfo, ClientRepository } from '@/src/domain/client';

type Dependencies = {
  clientRepository: ClientRepository;
};

type Callbacks = {
  onSuccess: (client: Client) => void;
  onError: (error: Error) => void;
};

type Args = {
  clientInfo: ClientInfo;
};

export const register = ({ clientRepository }: Dependencies) => {
  return async ({ clientInfo }: Args, { onSuccess, onError }: Callbacks) => {
    try {
      const client = await clientRepository.create(clientInfo);

      return onSuccess(client);
    } catch (error) {
      return onError(error as Error);
    }
  };
};
