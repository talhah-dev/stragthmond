import { NextResponse } from "next/server";
import { BlogModel } from "@/models/Blog";
import { DBconnection } from "@/lib/mongodb";

export async function GET(
    req: Request,
    context: { params: { slug: string } | Promise<{ slug: string }> }
) {
    try {
        await DBconnection();

        const resolved = await context.params;
        // console.log("resolve", resolved);
        // resolve { slug: 'this-is-the-draft-blog' }

        const slug = resolved.slug;
        // console.log("rawSlug",rawSlug);
        // resolve { slug: 'this-is-the-draft-blog' }


        const blog = await BlogModel.findOne({ slug }).lean();

        if (!blog) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: blog }, { status: 200 });
    } catch (error: any) {
        console.error("GET /api/blog/[slug] ERROR:", error);
        return NextResponse.json(
            { success: false, message: error?.message ?? "Failed to fetch blog" },
            { status: 500 }
        );
    }
}
