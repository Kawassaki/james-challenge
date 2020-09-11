export interface Establishment {
  id: string,
  index: number,
  guid: string,
  picture: string,
  name: string,
  email: string,
  phone: string,
  address: string,
  registered: string,
  latitude: string,
  longitude: string,
  account: string;
  bank: string;
  cnpj: string;
  accountNumber: number;
  accountNumberVerify: number;
  agencyNumber: number;
  agencyNumberVerify: number;
  automaticWithdraw: boolean;
  city: string;
}
