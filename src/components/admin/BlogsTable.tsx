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
import { Eye, Pencil, Trash2 } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

interface Blog {
    slug: string;
    title: string;
    category: string;
    status: "published" | "draft";
    date: string;
}

const blogs: Blog[] = [
    {
        slug: "renting-dubai-mistakes",
        title: "7 Common Renting Mistakes in Dubai (and How to Avoid Them)",
        category: "Renting",
        status: "published",
        date: "Jan 26, 2026",
    },
    {
        slug: "buy-property-dubai-guide",
        title: "Complete Guide to Buying Property in Dubai",
        category: "Buying",
        status: "published",
        date: "Jan 18, 2026",
    },
    {
        slug: "off-plan-investment",
        title: "Is Off-Plan Property a Smart Investment in 2026?",
        category: "Investment",
        status: "draft",
        date: "Jan 10, 2026",
    },
];

export default function BlogsTable() {
    return (
        <div className="overflow-hidden rounded-xl border bg-white">
            <Table>
                <TableHeader>
                    <TableRow className="border-b">
                        <TableHead className="px-6">Title</TableHead>
                        <TableHead className="px-6">Category</TableHead>
                        <TableHead className="px-6">Status</TableHead>
                        <TableHead className="px-6">Publish Date</TableHead>
                        <TableHead className="px-6 text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {blogs.map((blog) => (
                        <TableRow key={blog.slug} className="hover:bg-muted/40">
                            <TableCell className="px-6 font-medium max-w-[420px]">
                                {blog.title}
                            </TableCell>

                            <TableCell className="px-6 text-muted-foreground">
                                {blog.category}
                            </TableCell>

                            <TableCell className="px-6">
                                <Badge
                                    className={
                                        blog.status === "published"
                                            ? "bg-green-500/15 text-green-700"
                                            : "bg-amber-500/15 text-amber-700"
                                    }
                                >
                                    {blog.status}
                                </Badge>
                            </TableCell>

                            <TableCell className="px-6 text-muted-foreground">
                                {blog.date}
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
                                                <Link href={"/admin/blogs/1/edit"}>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                </Link>
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
