import { SellProperty } from "@/types/sellProperty";
import { Schema, model, models } from "mongoose";

const SellPropertySchema = new Schema(
    {
        fullname: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
        },

        phone: {
            type: String,
            trim: true,
        },

        propertyType: {
            type: String,
            required: true,
            trim: true,
        },

        address: {
            type: String,
            required: true,
            trim: true,
        },

        bedrooms: {
            type: Number,
            required: true,
        },

        sellingTimeline: {
            type: String,
            required: true,
            trim: true,
        },

        priceExpectation: {
            type: String,
            required: true,
            trim: true,
        },

        notes: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export const SellPropertyModel =
    models.SellProperty || model<SellProperty>("SellProperty", SellPropertySchema);
