import {cn} from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={cn("bg-[#012E4A] rounded-xl shadow-lg border border-[#0A4D68]", className)}>
            {children}
        </div>
    );
} 