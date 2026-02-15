import { Callbacks } from '../client.model';
import { clientServices } from '../client.services';

type Args = {
  token: string;
};

export const getClient = async ({ token }: Args, callbacks?: Callbacks) => {
  const { onSuccess, onError } = callbacks || {};

  try {
    const client = await clientServices.getByToken(token);

    onSuccess?.(client);

    return client;
  } catch (error) {
    onError?.(error as Error);

    return null;
  }
};
