import { NextResponse } from "next/server";
import { SellPropertyModel } from "@/models/SellProperty";
import { DBconnection } from "@/lib/mongodb";

export async function POST(req: Request) {
    try {
        await DBconnection();

        const body = await req.json();

        const sellProperty = await SellPropertyModel.create({
            fullname: body.fullname,
            email: body.email,
            phone: body.phone,
            propertyType: body.propertyType,
            address: body.address,
            bedrooms: body.bedrooms,
            sellingTimeline: body.sellingTimeline,
            priceExpectation: body.priceExpectation,
            notes: body.notes,
        });

        if (!sellProperty) {
            return NextResponse.json(
                { success: false, message: "Failed to submit sell property request" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, data: sellProperty },
            { status: 201 }
        );
    } catch (err: any) {
        return NextResponse.json(
            {
                success: false,
                message:
                    err?.message ?? "Something went wrong while submitting sell property form",
            },
            { status: 500 }
        );
    }
}
