import { NextResponse } from "next/server";
import { BlogModel } from "@/models/Blog";
import { DBconnection } from "@/lib/mongodb";


export async function POST(req: Request) {
    try {
        await DBconnection();

        const body = await req.json();

        const blog = await BlogModel.create({
            status: body.status ?? "draft",
            title: body.title,
            slug: body.slug,
            category: body.category ?? "Insights",
            excerpt: body.excerpt,
            content: body.content,
            coverImage: body.coverImage ?? "",
        });

        if (!blog) {
            return NextResponse.json(
                { success: false, message: "Something went wrong while creating blog" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data: blog }, { status: 201 });

    } catch (err: any) {
        if (err?.code === 11000) {
            return NextResponse.json(
                { success: false, message: "Slug already exists" },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { success: false, message: err?.message ?? "Something went wrong while creating blog" },
            { status: 500 }
        );
    }
}


