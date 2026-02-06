import axios from "axios";

export async function getBlobStroage() {

    const res = await axios.get("/api/admin/blob-usage");
    if (!res.data?.success) {
        throw new Error("Failed to fetch blob usage");
    }
    return res.data;
}