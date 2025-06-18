import {cn} from "@/lib/utils";

interface H1Props {
    children: React.ReactNode;
    className?: string;
}

export function H1({ children, className }: H1Props) {
    return (
        <h1 className={cn("text-4xl md:text-5xl font-bold text-white", className)}>
            {children}
        </h1>
    );
} 