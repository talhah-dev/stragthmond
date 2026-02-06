import { Contact } from "@/types/Contact";
import axios from "axios";

// create Contact
export async function createContact(payload: Contact) {
    const res = await axios.post("/api/contact", payload);

    if (!res.data?.success) {
        throw new Error(res.data?.message || "Failed to create contact");
    }

    return res;
}

// get all contacts
export async function getContact(): Promise<Contact[]> {
    const res = await axios.get("/api/admin/contact");
    if (!res.data?.success) {
        throw new Error("Failed to fetch contacts");
    }
    return res.data.data;
}