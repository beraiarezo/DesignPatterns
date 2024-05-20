import { Payment } from "./payment";
import { PaymentType, AccountType } from "./type";
import { PaymentFilter } from "./filter";
import { BitcoinSpec, AndSpecification, FixedAccountSpec } from "./specs";

let p1 = new Payment(
  "Payment-1",
  PaymentType.Bitcoin,
  AccountType.FixedDepositAccount
);
let p2 = new Payment(
  "Payment-2",
  PaymentType.CreditCard,
  AccountType.SavingAccount
);
let p3 = new Payment(
  "Payment-3",
  PaymentType.PayPal,
  AccountType.SavingAccount
);
let p4 = new Payment(
  "Payment-4",
  PaymentType.Bitcoin,
  AccountType.SavingAccount
);

const payments = [p1, p2, p3, p4];

const paymentFilter = new PaymentFilter();

const specs = new AndSpecification(new BitcoinSpec(), new FixedAccountSpec());

for (let p of paymentFilter.filter(payments, specs)) {
  console.debug(`* ${p.name} is paied by bitcoin`);
}
