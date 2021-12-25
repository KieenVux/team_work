export class Product {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;

    constructor(initialValue: Partial<Product>) {
        Object.assign(this, initialValue);
    }

    getListProducts: () => Array<Product>;
}