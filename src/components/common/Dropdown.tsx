"use client";

import {useState} from "react";
import Link from "next/link";
import {NavItem} from "@/components/layouts/Header";

export interface DropdownProps {
    label: string;
    href?: string;
    items: NavItem[];
}

export const Dropdown = ({ label, href, items }: DropdownProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseLeave={() => setOpen(false)}
            onMouseEnter={() => setOpen(true)}
        >
            <Link
                href={href || '#'}
                onMouseEnter={() => setOpen(true)}
                onClick={(e) => {
                    if (!href) {
                        e.preventDefault();
                        setOpen(!open);
                    }
                }}
                className="text-white hover:text-[#ffd600] font-bold italic"
            >
                {label}
            </Link>
            {open && (
                <div className="absolute pt-2 z-50">
                    <div className="w-40 bg-white shadow-lg rounded-lg z-50 overflow-hidden">
                        {items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-gray-800 hover:bg-[#ffd600] hover:text-black"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
