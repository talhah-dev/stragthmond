import { Blog } from "@/types/blog";
import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
    {
        status: {
            type: String,
            enum: ["draft", "published"],
            default: "draft",
            required: true,
        },

        title: {
            type: String,
            trim: true,
            required: true,
        },

        slug: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            index: true,
            required: true,
        },

        category: {
            type: String,
            default: "Insights",
            required: true,
        },

        excerpt: {
            type: String,
            trim: true,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },

        coverImage: {
            type: String,
            trim: true,
            default: "",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const BlogModel = models.Blog || model<Blog>("Blog", BlogSchema);
