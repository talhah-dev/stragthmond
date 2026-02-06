import { NextResponse } from "next/server";
import { del } from "@vercel/blob";

export async function POST(req: Request) {
    try {
        const { url } = await req.json();

        if (!url) {
            return NextResponse.json(
                { success: false, message: "Missing url" },
                { status: 400 }
            );
        }

        await del(url);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json(
            { success: false, message: error?.message ?? "Failed to delete blob" },
            { status: 500 }
        );
    }
}
