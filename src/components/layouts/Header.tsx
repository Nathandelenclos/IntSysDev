"use client";

import Link from "next/link";
import Image from "next/image";
import {Connect} from "@/components/icons/Connect";
import {useState} from "react";
import {Dropdown, DropdownProps} from "@/components/common/Dropdown";

export type NavItem = {
    label: string;
    href: string;
};

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems: (NavItem | DropdownProps)[] = [
        { label: "CLUBS", href: "/clubs" },
        { label: "BLOG", href: "/blog" },
        {
            label: "ACTIVITIES",
            href: "/activities",
            items: [
                { label: "CrossFit", href: "/activities/crossfit" },
                { label: "Pilates", href: "/activities/pilates" },
                { label: "Zumba", href: "/activities/zumba" },
                { label: "Mom Sessions", href: "/activities/mom-sessions" },
            ]
        },
        {
            label: "WELLNESS",
            href: "/wellness",
            items: [
                { label: "Sauna", href: "/wellness/sauna" },
                { label: "Massage", href: "/wellness/massage" },
                { label: "Relaxation", href: "/wellness/relaxation" }
            ]
        },
        {
            label: "OUR CENTER",
            items: [
                { label: "Contact", href: "/contact" },
                { label: "About us", href: "/about-us" },
                { label: "Kids' area", href: "/kids" },
            ]
        },
    ];

    return (
        <nav className="bg-[#3b444b] px-6 sm:px-8 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-between w-full md:w-auto gap-6 md:gap-[100px]">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={75} height={25} />
                    </Link>

                    <div className="hidden md:flex gap-8">
                        {navItems.map((item, index) => {
                            if ('items' in item) {
                                return (
                                    <Dropdown key={index} label={item.label} items={item.items} href={item.href} />
                                );
                            }
                            return (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="text-white hover:text-[#ffd600] font-bold italic"
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login" className="text-white hover:text-[#ffd600] flex items-center gap-2">
                        <Connect />
                        Connect
                    </Link>
                    <Link href="/register" className="bg-[#ffd600] text-black font-bold px-6 py-2">REGISTER</Link>
                </div>

                <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4">
                    {navItems.map((item, index) => {
                        if ('items' in item) {
                            return (
                                <Dropdown key={index} label={item.label} items={item.items} />
                            );
                        }
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-white hover:text-[#ffd600] font-bold italic"
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <hr className="border-gray-600" />
                    <Link href="/login" className="text-white hover:text-[#ffd600] flex items-center gap-2">
                        <Connect />
                        Connect
                    </Link>
                    <Link href="/register" className="bg-[#ffd600] text-black font-bold px-4 py-2 w-fit">
                        REGISTER
                    </Link>
                </div>
            )}
        </nav>
    );
};
