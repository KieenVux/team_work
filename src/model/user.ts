
export class User {
    id: string;
    name: string;
    age: number;
    email: string;
    role: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;

    constructor(initialValue: Partial<User>) {
        Object.assign(this, initialValue);
    }

}
