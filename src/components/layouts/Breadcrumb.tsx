import Link from "next/link";
import {cn} from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav className={cn("flex", className)} aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        {index > 0 && (
                            <svg
                                className="h-5 w-5 text-gray-400 mx-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                        )}
                        <Link
                            href={item.href}
                            className={cn(
                                "text-sm font-medium",
                                index === items.length - 1
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                            )}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
} 