import {cn} from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "success" | "warning" | "danger";
    className?: string;
}

export function Badge({ children, variant = "primary", className }: BadgeProps) {
    const variants = {
        primary: "bg-[#0A4D68] text-white",
        secondary: "bg-gray-600 text-white",
        success: "bg-green-600 text-white",
        warning: "bg-yellow-600 text-white",
        danger: "bg-red-600 text-white",
    };

    return (
        <span className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
} 