import { NextResponse } from "next/server";
import { BlogModel } from "@/models/Blog";
import { DBconnection } from "@/lib/mongodb";

export async function DELETE(
    req: Request,
    context: { params: { slug: string } | Promise<{ slug: string }> }
) {
    try {
        await DBconnection();

        const { slug } = await context.params;

        const deleted = await BlogModel.findOneAndDelete({ slug }).lean();

        if (!deleted) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, message: "Blog deleted successfully", data: deleted },
            { status: 200 }
        );

    } catch (error: any) {
        console.error("DELETE /api/blog/[slug] ERROR:", error);
        return NextResponse.json(
            { success: false, message: error?.message ?? "Failed to delete blog" },
            { status: 500 }
        );
    }
}

export async function PATCH(
    req: Request,
    context: { params: { slug: string } | Promise<{ slug: string }> }
) {
    try {
        await DBconnection();

        const { slug } = await context.params;
        const body = await req.json();

        const updated = await BlogModel.findOneAndUpdate(
            { slug },
            {
                ...body,
                updatedAt: new Date(),
            },
            {
                new: true,
                runValidators: true,
            }
        ).lean();

        if (!updated) {
            return NextResponse.json(
                { success: false, message: "Blog not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Blog updated successfully",
                data: updated,
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("PATCH /api/blog/[slug] ERROR:", error);
        return NextResponse.json(
            { success: false, message: error?.message ?? "Failed to update blog" },
            { status: 500 }
        );
    }
}

