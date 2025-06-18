import {cn} from "@/lib/utils";

interface H3Props {
    children: React.ReactNode;
    className?: string;
}

export function H3({ children, className }: H3Props) {
    return (
        <h3 className={cn("text-2xl font-bold text-white", className)}>
            {children}
        </h3>
    );
} 