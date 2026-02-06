import { NextResponse } from "next/server";
import { ContactModel } from "@/models/Contact";
import { DBconnection } from "@/lib/mongodb";

export async function GET() {
    try {
        await DBconnection();

        const contacts = await ContactModel.find()
            .sort({ createdAt: -1 });

        return NextResponse.json(
            { success: true, data: contacts },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            {
                success: false,
                message: err?.message || "Failed to fetch contacts",
            },
            { status: 500 }
        );
    }
}
