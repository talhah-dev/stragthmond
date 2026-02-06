import { Contact } from "@/types/Contact";
import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
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
            required: true,
            trim: true,
        },

        goal: {
            type: String,
            required: true,
            trim: true,
        },

        budget: {
            type: String,
            required: true,
            trim: true,
        },

        preferredArea: {
            type: String,
            required: true,
            trim: true,
        },

        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

export const ContactModel = models.Contact || model<Contact>("Contact", ContactSchema);