import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

export async function GET() {
    const res = await list();

    const usedBytes = res.blobs.reduce(
        (sum, blob) => sum + (blob.size ?? 0),
        0
    );

    return NextResponse.json({
        success: true,
        usedStorageBytes: usedBytes,
        // usedStorageMB: usedBytes / 1024 / 1024,
        usedStorageMB: Number((usedBytes / 1024 / 1024).toFixed(2)),
        fileCount: res.blobs.length,
    });
}
