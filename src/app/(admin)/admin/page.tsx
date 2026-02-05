import AdminStats from "@/components/admin/AdminStats";
import PropertiesTable from "@/components/admin/PropertiesTable";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-[#F8F8FF] px-6 py-8">
            <div className="mx-auto max-w-7xl space-y-10">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold text-[#00292D]">
                            Admin Overview
                        </h1>
                        <p className="text-sm text-[#00292D]/60">
                            Strathmond platform snapshot
                        </p>
                    </div>
                    <Button className="rounded-md bg-red-600 text-white hover:bg-red-700">
                        <LogOut />
                        Logout
                    </Button>
                </div>

                <AdminStats />

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-[#00292D]">
                        Recent Properties
                    </h2>
                    <PropertiesTable />
                </div>
            </div>
        </div>
    );
}
