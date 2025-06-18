"use client";

import Link from 'next/link';
import {usePathname} from 'next/navigation';

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
        <div className="w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <nav className="flex items-center space-x-2 text-sm text-gray-600">
                    <Link href="/" className="hover:text-[#FFD600] transition-colors">
                        Home
                    </Link>
                    {segments.map((segment, index) => {
                        const href = `/${segments.slice(0, index + 1).join('/')}`;
                        const isLast = index === segments.length - 1;

                        return (
                            <div key={href} className="flex items-center">
                                <span className="mx-2 text-gray-400">/</span>
                                {isLast ? (
                                    <span className="text-[#003A5E] font-medium">{formatSegment(segment)}</span>
                                ) : (
                                    <Link href={href} className="hover:text-[#FFD600] transition-colors">
                                        {formatSegment(segment)}
                                    </Link>
                                )}
                            </div>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}; 