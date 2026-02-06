import { handleUpload } from "@vercel/blob/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    const jsonResponse = await handleUpload({
        body,
        request,
        onBeforeGenerateToken: async (pathname) => {
            return {
                allowedContentTypes: ["image/jpeg", "image/png", "image/webp", "image/avif"],
                tokenPayload: JSON.stringify({ pathname }),
            };
        }
    });

    return NextResponse.json(jsonResponse);
}
