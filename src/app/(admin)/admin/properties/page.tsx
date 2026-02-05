import PropertiesTable from "@/components/admin/PropertiesTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function PropertiesManagementPage() {
    return (
        <div className="min-h-screen bg-[#F8F8FF] px-6 py-8">
            <div className="mx-auto max-w-7xl space-y-8">
                <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div data-aos="fade-up" className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                                <TrendingUp className="h-4 w-4" />
                                Property
                            </div>

                            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#00292D] sm:text-5xl">
                                Property Management
                            </h1>

                            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-[#00292D]/70 sm:text-lg">
                                Manage, publish, and control all listed properties
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Link href="/admin">
                                <Button className="" variant={"secondary"}>
                                    <ArrowLeft />
                                    Back
                                </Button>
                            </Link>

                            <Link href="/admin/properties/create">
                                <Button className="bg-[#00292D] text-[#F8F8FF] hover:bg-[#00292D]/90">
                                    <Plus />
                                    Create Property
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                <PropertiesTable />
            </div>
        </div>
    );
}
