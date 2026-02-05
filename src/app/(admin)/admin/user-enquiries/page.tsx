import UserEnquiriesTable from "@/components/admin/UserEnquiriesTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function EnquiriesManagementPage() {
    return (
        <div className="min-h-screen bg-[#F8F8FF] px-6 py-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                                <Mail className="h-4 w-4" />
                                Enquiries
                            </div>

                            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#00292D] sm:text-5xl">
                                User Enquiries
                            </h1>

                            <p className="mt-4 max-w-2xl text-base text-[#00292D]/70 sm:text-lg">
                                Review and manage all contact form submissions
                            </p>
                        </div>

                        <Link href="/admin">
                            <Button className="bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                                <ArrowLeft />
                                Back
                            </Button>
                        </Link>
                    </div>
                </section>

                <UserEnquiriesTable />
            </div>
        </div>
    );
}
