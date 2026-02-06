export interface Blog {
    _id?: string;
    status: "draft" | "published";
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    content: string;
    coverImage: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type BlogSingleResponse = {
    success: boolean;
    data: Blog;
};

export type BlogListResponse = {
    success: boolean;
    data: Blog[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    };
};

export type BlogDeletedResponse = {
    success: boolean;
    message: string;
    data: Blog;
}