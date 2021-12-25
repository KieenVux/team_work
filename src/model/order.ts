import { OrderDetails } from "./order.details";
import { User } from "./user";

export class Order {
    user: User;
    orderDetails: Array<OrderDetails>;

    constructor(initialValue: Partial<OrderDetails>) {
        Object.assign(this, initialValue);
    }
}