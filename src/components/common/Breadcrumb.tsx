"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Breadcrumb = () => {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(segment => segment);

    const formatSegment = (segment: string) => {
        return segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <nav className="flex items-center space-x-2 text-sm text-gray-300 px-4 py-2">
            <Link href="/" className="hover:text-[#ffd600]">
                Home
            </Link>
            {segments.map((segment, index) => {
                const href = `/${segments.slice(0, index + 1).join('/')}`;
                const isLast = index === segments.length - 1;

                return (
                    <div key={href} className="flex items-center">
                        <span className="mx-2">/</span>
                        {isLast ? (
                            <span className="text-[#ffd600]">{formatSegment(segment)}</span>
                        ) : (
                            <Link href={href} className="hover:text-[#ffd600]">
                                {formatSegment(segment)}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
}; 