import { PaymentType, AccountType } from "./type";

export class Payment {
  name;
  type;
  account;
  constructor(name: string, type: PaymentType, account: AccountType) {
    this.name = name;
    this.type = type;
    this.account = account;
  }
}
