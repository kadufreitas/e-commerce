export interface Money {
  amount: number;
  currency: 'EUR';
}

export const createMoney = (amount: number): Money => ({
  amount,
  currency: 'EUR',
});

export const formatMoney = (money: Money): string => {
  return new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: money.currency,
  }).format(money.amount);
};

export const addMoney = (a: Money, b: Money): Money => ({
  amount: a.amount + b.amount,
  currency: a.currency,
});

export const multiplyMoney = (money: Money, multiplier: number): Money => ({
  amount: money.amount * multiplier,
  currency: money.currency,
});
