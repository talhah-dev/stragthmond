import { NextResponse } from "next/server";
import { SellPropertyModel } from "@/models/SellProperty";
import { DBconnection } from "@/lib/mongodb";

export async function GET() {
    try {
        await DBconnection();

        const properties = await SellPropertyModel.find()
            .sort({ createdAt: -1 });

        return NextResponse.json(
            { success: true, data: properties },
            { status: 200 }
        );
    } catch (err: any) {
        return NextResponse.json(
            {
                success: false,
                message: err?.message || "Failed to fetch sell properties",
            },
            { status: 500 }
        );
    }
}
