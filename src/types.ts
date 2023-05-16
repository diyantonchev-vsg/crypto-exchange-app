export type Trade = {
  id: string,
  price: number,
  amount: number,
  time?: string,
  isBuyerMaker?: boolean
};

export type Price = {
  id: string,
  exchange: string,
  price: number
};

export type User = {
  id: string,
  name: string,
  email?: string,
}

export type ExchangeState = {
  selectedExchange: string,
  cryptocurrencyPair: string
};

export type ApplicationState = {
  user: User,
  exchange: ExchangeState,
};
