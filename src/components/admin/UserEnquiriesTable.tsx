"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Enquiry {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  goal: string;
  budget: string;
  location: string;
  message: string;
  date: string;
}

const enquiries: Enquiry[] = [
  {
    id: "ENQ-001",
    fullName: "Ahmed Khan",
    email: "ahmed@email.com",
    phone: "+971 50 123 4567",
    goal: "Buy",
    budget: "AED 2M – 4M",
    location: "Dubai Hills",
    message: "Looking for a 3-bedroom villa with a private garden.",
    date: "Jan 26, 2026",
  },
  {
    id: "ENQ-002",
    fullName: "Sarah Williams",
    email: "sarah@email.com",
    phone: "+971 55 987 6543",
    goal: "Rent",
    budget: "AED 120K / year",
    location: "Downtown Dubai",
    message: "Need a furnished apartment close to metro.",
    date: "Jan 25, 2026",
  },
];

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="text-xs font-semibold tracking-wide text-[#00292D]/55">
        {label}
      </div>
      <div className="text-sm font-medium text-[#00292D]">{value}</div>
    </div>
  );
}

export default function UserEnquiriesTable() {
  return (
    <div className="space-y-6">
      {enquiries.map((enquiry) => (
        <Card
          key={enquiry.id}
          className="rounded-xl border bg-white ring-1 ring-[#00292D]/10"
        >
          <CardContent className="p-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-1">
                <div className="text-lg font-semibold text-[#00292D]">
                  {enquiry.fullName}
                </div>
                <div className="text-sm text-[#00292D]/60">{enquiry.email}</div>
              </div>

              <div className="inline-flex w-fit items-center rounded-lg bg-[#F8F8FF] px-3 py-2 text-xs font-semibold text-[#00292D] ring-1 ring-[#00292D]/10">
                Submitted: {enquiry.date}
              </div>
            </div>

            <Separator className="my-5" />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Phone" value={enquiry.phone || "—"} />
                  <Field label="Goal" value={enquiry.goal} />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Field label="Budget" value={enquiry.budget || "—"} />
                  <Field label="Preferred Area" value={enquiry.location || "—"} />
                </div>
              </div>

              <div className="rounded-xl bg-[#F8F8FF] p-5 ring-1 ring-[#00292D]/10">
                <div className="text-xs font-semibold tracking-wide text-[#00292D]/55">
                  Message
                </div>
                <div className="mt-2 text-sm leading-relaxed text-[#00292D]/75">
                  {enquiry.message || "—"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
