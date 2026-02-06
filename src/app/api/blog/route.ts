import { DBconnection } from "@/lib/mongodb";
import { BlogModel } from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        await DBconnection();

        const { searchParams } = new URL(req.url);
        const status = searchParams.get("status");
        const category = searchParams.get("category");
        const page = Number(searchParams.get("page") ?? "1");
        const limit = Number(searchParams.get("limit") ?? "10");

        const filter: Record<string, any> = {};
        if (status) filter.status = status;
        if (category) filter.category = category;

        const skip = (page - 1) * limit;

        const [items, total] = await Promise.all([
            BlogModel.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit),
            BlogModel.countDocuments(filter),
        ]);

        return NextResponse.json(
            {
                success: true,
                data: items,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit),
                },
            },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            { success: false, message: err?.message ?? "Something went wrong fetching blogs" },
            { status: 500 }
        );
    }
}