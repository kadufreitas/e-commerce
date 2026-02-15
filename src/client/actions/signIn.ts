import { Callbacks } from '../client.model';
import { clientServices } from '../client.services';

type Args = {
  auth: { email: string; password: string };
};

export const signIn = async ({ auth }: Args, callbacks?: Callbacks) => {
  const { onSuccess, onError } = callbacks || {};

  try {
    const client = await clientServices.getByAuth(auth);

    onSuccess?.(client);

    return client;
  } catch (error) {
    onError?.(error as Error);

    return null;
  }
};
