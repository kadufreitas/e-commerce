export interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export const formatAddress = (address: Address): string => {
  const complement = address.complement ? `, ${address.complement}` : '';
  return `${address.street}, ${address.number}${complement} - ${address.neighborhood}, ${address.city}/${address.state} - CEP: ${address.zipCode}`;
};
