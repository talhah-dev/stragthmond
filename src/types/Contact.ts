export interface Contact {
    _id?: string;
    fullname: string;
    email: string;
    phone: string;
    goal: string;
    budget: string;
    preferredArea: string;
    message: string;
    createdAt?: Date;
    updatedAt?: Date;
}