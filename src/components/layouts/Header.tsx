"use client";

import Link from "next/link";
import Image from "next/image";
import {Connect} from "@/components/icons/Connect";
import {useState} from "react";
import {Dropdown, DropdownProps} from "@/components/common/Dropdown";
import {useAuth} from "@/contexts/AuthContext";

export type NavItem = {
    label: string;
    href: string;
};

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const { user, logout } = useAuth();
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
                { label: "Kids' area", href: "/kids-area" },
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
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() => setIsProfileOpen(!isProfileOpen)}
                                className="flex items-center gap-2 text-white hover:text-[#ffd600] transition-colors"
                            >
                                <span className="font-bold">{user.name}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                                    <button
                                        onClick={logout}
                                        className="w-full text-left px-4 py-2 text-gray-800 hover:bg-[#ffd600] hover:text-black"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="text-white hover:text-[#ffd600] flex items-center gap-2">
                                <Connect />
                                Connect
                            </Link>
                            <Link href="/register" className="bg-[#ffd600] text-black font-bold px-6 py-2">REGISTER</Link>
                        </>
                    )}
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
                    {user ? (
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={logout}
                                className="text-white hover:text-[#ffd600] flex items-center gap-2"
                            >
                                <Connect />
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="text-white hover:text-[#ffd600] flex items-center gap-2">
                                <Connect />
                                Connect
                            </Link>
                            <Link href="/register" className="bg-[#ffd600] text-black font-bold px-4 py-2 w-fit">
                                REGISTER
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
};
