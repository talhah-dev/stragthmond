import type { Blog, BlogDeletedResponse, BlogListResponse, BlogSingleResponse } from "@/types/blog";
import axios from "axios";

// export async function getBlogs(params?: {
//     status?: string;
//     category?: string;
//     page?: number;
//     limit?: number;
// }) {
//     const qs = new URLSearchParams();

//     if (params?.status) qs.set("status", params.status);
//     if (params?.category) qs.set("category", params.category);
//     qs.set("page", String(params?.page ?? 1));
//     qs.set("limit", String(params?.limit ?? 10));

//     const res = await fetch(`/api/blogs?${qs.toString()}`);
//     const json = (await res.json())

//     if (!res.ok) throw new Error(json as any);
//     return json;
// }

// ============

// get all posts
export async function getBlog(params?: {
    status?: string;
    category?: string;
    page?: number;
    limit?: number;
}): Promise<Blog[]> {
    const res = await axios.get<BlogListResponse>("/api/blog", { params });
    if (!res.data?.success) {
        throw new Error("Failed to fetch posts");
    }
    return res.data.data;
}

// get blog by slug
export async function getBlogBySlug(slug: string): Promise<Blog> {
    const res = await axios.get<BlogSingleResponse>(`/api/blog/${slug}`);
    if (!res.data?.success) throw new Error("Failed to fetch blog");
    return res.data.data;
}

// delete blog by slug
export async function deleteBlogBySlug(slug: string) {
    const res = await axios.delete<BlogDeletedResponse>(`/api/admin/blog/${slug}`);
    if (!res.data?.success) throw new Error("Failed to delete blog");
    return res.data;
}

// create blog
export async function createBlog(payload: Blog) {
    const res = await axios.post("/api/admin/blog", payload);

    if (!res.data?.success) {
        throw new Error(res.data?.message || "Failed to create post");
    }

    return res;
}

// update blog
export async function updateBlogBySlug(
    slug: string,
    payload: Partial<Blog>
) {
    const res = await axios.patch(`/api/admin/blog/${slug}`, payload);
    if (!res.data?.success) {
        throw new Error(res.data?.message || "Failed to update blog");
    }
    return res.data;
}

