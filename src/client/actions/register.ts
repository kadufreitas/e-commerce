import { Callbacks, ClientInfo } from '../client.model';
import { clientServices } from '../client.services';

type Args = {
  clientInfo: ClientInfo;
};

export const register = async ({ clientInfo }: Args, callbacks?: Callbacks) => {
  const { onSuccess, onError } = callbacks || {};

  try {
    const client = await clientServices.create(clientInfo);

    onSuccess?.(client);

    return client;
  } catch (error) {
    onError?.(error as Error);

    return null;
  }
};
