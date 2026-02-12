export interface Email {
  value: string;
}

export const createEmail = (email: string): Email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }

  return { value: email.toLowerCase() };
};

export const formatEmail = (email: Email): string => email.value;
