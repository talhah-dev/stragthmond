export interface SellProperty {
    _id?: string;
    fullname: string;
    email: string;
    phone?: string;
    propertyType: string;
    address: string;
    bedrooms: number;
    sellingTimeline: string;
    priceExpectation: string;
    notes?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
