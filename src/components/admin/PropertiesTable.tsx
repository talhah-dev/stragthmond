"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Eye,
    Pencil,
    Trash2,
    Loader2,
    CheckCircle,
    PauseCircle,
} from "lucide-react";
import { useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface Property {
    id: string;
    title: string;
    location: string;
    price: string;
    status: "published" | "draft";
    date: string;
}

type ActionType = "view" | "edit" | "delete";

const properties: Property[] = [
    {
        id: "PROP-001",
        title: "Palm Jumeirah Luxury Villa",
        location: "Palm Jumeirah",
        price: "AED 18,500,000",
        status: "published",
        date: "2024-03-20",
    },
    {
        id: "PROP-002",
        title: "Downtown Skyline Apartment",
        location: "Downtown Dubai",
        price: "AED 3,200,000",
        status: "published",
        date: "2024-03-19",
    },
    {
        id: "PROP-003",
        title: "Off-Plan Beach Residence",
        location: "Dubai Harbour",
        price: "AED 6,750,000",
        status: "draft",
        date: "2024-03-18",
    },
];

export default function PropertiesTable() {

    return (
        <div className="overflow-hidden rounded-xl border bg-white">
            <Table>
                <TableHeader>
                    <TableRow className="border-b">
                        <TableHead className="px-6">Property</TableHead>
                        <TableHead className="px-6">Location</TableHead>
                        <TableHead className="px-6">Price</TableHead>
                        <TableHead className="px-6">Status</TableHead>
                        <TableHead className="px-6">Date</TableHead>
                        <TableHead className="px-6 text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {properties.map((property) => (
                        <TableRow key={property.id} className="hover:bg-muted/40">
                            <TableCell className="px-6 font-medium">
                                {property.title}
                            </TableCell>
                            <TableCell className="px-6 text-muted-foreground">
                                {property.location}
                            </TableCell>
                            <TableCell className="px-6">{property.price}</TableCell>
                            <TableCell className="px-6">
                                <Badge
                                    className={
                                        property.status === "published"
                                            ? "bg-green-500/15 text-green-700"
                                            : "bg-amber-500/15 text-amber-700"
                                    }
                                >
                                    {property.status}
                                </Badge>
                            </TableCell>
                            <TableCell className="px-6 text-muted-foreground">
                                {property.date}
                            </TableCell>
                            <TableCell className="px-6 text-right">
                                <TooltipProvider>
                                    <div className="flex items-center justify-end gap-1">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>View</TooltipContent>
                                        </Tooltip>

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8"
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>Edit</TooltipContent>
                                        </Tooltip>

                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    size="icon"
                                                    className="h-8 w-8 text-red-600 hover:bg-red-600 hover:text-white"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </TooltipTrigger>
                                            <TooltipContent>Delete</TooltipContent>
                                        </Tooltip>
                                    </div>
                                </TooltipProvider>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
