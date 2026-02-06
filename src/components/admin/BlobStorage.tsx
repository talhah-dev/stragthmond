"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { useQuery } from "@tanstack/react-query";
import { getBlobStroage } from "@/lib/api/blob";

type BlobUsageResponse = {
    usedStorageMB: number;
    fileCount: number;
};

const PLAN_LIMIT_MB = 1024;

export function BlobStorage() {
    const { data, isLoading, isError } = useQuery<BlobUsageResponse, Error>({
        queryKey: ["blob-usage"],
        queryFn: getBlobStroage,
    });

    if (isLoading) {
        return (
            <div className="flex flex-col gap-1">
                <p className="text-sm opacity-80">Storage Used</p>
                <Progress value={0} className="w-full" />
            </div>
        );
    }

    if (isError || !data) {
        return (
            <div className="text-sm text-red-500">
                Failed to load storage usage
            </div>
        );
    }

    const percentage = Math.min(
        (data.usedStorageMB / PLAN_LIMIT_MB) * 100,
        100
    );

    return (
        <div className="flex flex-col gap-1">
            <div className="flex w-full items-center justify-between">
                <p className="opacity-80 text-sm">Storage Used</p>
                <p className="font-semibold">
                    {data.usedStorageMB.toFixed(1)} MB
                </p>
            </div>

            <Progress value={percentage} className="w-full" />
        </div>
    );
}
