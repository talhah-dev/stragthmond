import { SellProperty } from "@/types/sellProperty";
import axios from "axios";

// create property sell
export async function createSellProperty(payload: SellProperty) {
    const res = await axios.post("/api/sell-property", payload);

    if (!res.data?.success) {
        throw new Error(res.data?.message || "Failed to create sell property");
    }

    return res;
}

// get all properties
export async function getSellProperty(): Promise<SellProperty[]> {
    const res = await axios.get("/api/admin/sell-property");
    if (!res.data?.success) {
        throw new Error("Failed to fetch sell properties");
    }
    return res.data.data;
}