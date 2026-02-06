import { NextResponse } from "next/server";
import { ContactModel } from "@/models/Contact";
import { DBconnection } from "@/lib/mongodb";

export async function POST(req: Request) {
    try {
        await DBconnection();

        const body = await req.json();

        const contact = await ContactModel.create({
            fullname: body.fullname,
            email: body.email,
            phone: body.phone,
            goal: body.goal,
            budget: body.budget,
            preferredArea: body.preferredArea,
            message: body.message,
        });

        if (!contact) {
            return NextResponse.json(
                { success: false, message: "Failed to submit contact form" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, data: contact },
            { status: 201 }
        );
    } catch (err: any) {
        return NextResponse.json(
            {
                success: false,
                message: err?.message ?? "Something went wrong while submitting contact form",
            },
            { status: 500 }
        );
    }
}
