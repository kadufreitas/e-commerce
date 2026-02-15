import { AxiosError } from 'axios';

interface ExtractedError {
  message: string;
  status?: number;
  data?: Record<string, unknown>;
}

export const extractAxiosError = (error: unknown): ExtractedError => {
  if (error instanceof AxiosError) {
    return {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    };
  }

  return {
    message: 'An unknown error occurred',
  };
};
