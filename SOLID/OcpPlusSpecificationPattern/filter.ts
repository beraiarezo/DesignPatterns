import { Payment } from "./payment";
import { AndSpecification } from "./specs";

export class PaymentFilter {
  filter(payments: Payment[], spec: AndSpecification) {
    return payments.filter((p) => spec.isSatisfied(p));
  }
}
