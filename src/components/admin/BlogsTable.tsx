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
import { Button, buttonVariants } from "@/components/ui/button";
import { Eye, Pencil, Trash2 } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink, OctagonAlert, Trash, X } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { deleteBlogBySlug, getBlog } from "@/lib/api/blogs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Blog } from "@/types/blog";
import { Spinner } from "../ui/spinner";
import { toast } from "sonner";

export default function BlogsTable() {

    const queryClient = useQueryClient();

    const { data = [], isLoading, isError, error } = useQuery<Blog[], Error>({
        queryKey: ["blogs"],
        queryFn: () => getBlog(),
    });

    const { mutate: deleteBlog, isPending: isDeleting } = useMutation({
        mutationFn: (slug: string) => deleteBlogBySlug(slug),
        onSuccess: (res: any) => {
            toast.success(res?.message || "Blog deleted successfully");
            queryClient.invalidateQueries({ queryKey: ["blogs"] });
            queryClient.invalidateQueries({ queryKey: ["blob-usage"] });
        },
        onError: (err: any) => {
            toast.error(err?.message || "Delete failed");
        },
    });

    if (isLoading) {
        return <div className="flex items-center justify-center p-20"><Spinner /></div >;
    }

    if (isError) {
        return (
            toast.error(error?.message || "Failed to load blogs")
        );
    }


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
                    {data.map((blog) => (
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
                                {blog.createdAt
                                    ? new Date(blog.createdAt).toLocaleDateString()
                                    : "—"
                                }
                            </TableCell>

                            <TableCell className="px-6 text-right">
                                <TooltipProvider>
                                    <div className="flex items-center justify-end gap-1">
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Link href={`/blog/${blog.slug}`}>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-8 w-8"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                </Link>
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
                                                <DeleteBlogDialog
                                                    disabled={!blog.slug || isDeleting}
                                                    onConfirm={() => deleteBlog(blog.slug!)}
                                                    loading={isDeleting}
                                                />
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

function DeleteBlogDialog({
    onConfirm,
    disabled,
    loading,
}: {
    onConfirm: () => void;
    disabled?: boolean;
    loading?: boolean;
}) {

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 text-red-600 hover:bg-red-600 hover:text-white"
                    disabled={disabled}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="overflow-hidden">
                <AlertDialogHeader className="pb-4">
                    <AlertDialogTitle>
                        <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-destructive/10 sm:mx-0">
                            <OctagonAlert className="h-5 w-5 text-destructive" />
                        </div>
                        Delete this blog?
                    </AlertDialogTitle>

                    <AlertDialogDescription className="text-[15px]">
                        This action cannot be undone. This will permanently delete the blog.
                    </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter className="-mx-6 -mb-6 border-t px-6 py-5">
                    <AlertDialogCancel disabled={loading}>
                        <X /> Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                        onClick={onConfirm}
                        className={"bg-red-500 hover:bg-red-600"}
                        disabled={loading}
                    >
                        {loading ? <Spinner /> : <Trash />}
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
