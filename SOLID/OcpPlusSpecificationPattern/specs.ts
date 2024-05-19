import { Payment } from "./payment";
import { PaymentType, AccountType } from "./type";

export interface GenericSpecification {
  isSatisfied: (payment: Payment) => boolean;
}

export class FixedAccountSpec {
  type;
  constructor() {
    this.type = AccountType.FixedDepositAccount;
  }

  isSatisfied(payment: Payment) {
    return payment.account === this.type;
  }
}

export class PaypalSpec {
  type;
  constructor() {
    this.type = PaymentType.PayPal;
  }

  isSatisfied(payment: Payment) {
    return payment.type === this.type;
  }
}

export class BitcoinSpec {
  type;
  constructor() {
    this.type = PaymentType.Bitcoin;
  }

  isSatisfied(payment: Payment) {
    return payment.type === this.type;
  }
}

export class CreditcardSpec {
  type;
  constructor() {
    this.type = PaymentType.CreditCard;
  }

  isSatisfied(payment: Payment) {
    return payment.type === this.type;
  }
}

export class AndSpecification {
  specs;
  constructor(...specs: GenericSpecification[]) {
    this.specs = specs;
  }

  isSatisfied(payment: Payment) {
    return this.specs.every((spec) => spec.isSatisfied(payment));
  }
}
