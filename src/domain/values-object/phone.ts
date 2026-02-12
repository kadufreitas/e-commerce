export interface Phone {
  countryCode: string;
  areaCode: string;
  number: string;
}

export const createPhone = (fullNumber: string): Phone => {
  const cleaned = fullNumber.replace(/\D/g, '');

  if (cleaned.length === 11) {
    return {
      countryCode: '55',
      areaCode: cleaned.substring(0, 2),
      number: cleaned.substring(2),
    };
  }

  throw new Error('Invalid phone number format');
};

export const formatPhone = (phone: Phone): string => {
  const { areaCode, number } = phone;
  if (number.length === 9) {
    return `(${areaCode}) ${number.substring(0, 5)}-${number.substring(5)}`;
  }
  return `(${areaCode}) ${number.substring(0, 4)}-${number.substring(4)}`;
};
