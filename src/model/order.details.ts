import { Order } from "./order";
import { Product } from "./product";

export class OrderDetails {
    id: string;
    quantity: number;
    product: Product;
    order: Order;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;

    constructor(initialValue: Partial<OrderDetails>) {
        Object.assign(this, initialValue);
    }

}