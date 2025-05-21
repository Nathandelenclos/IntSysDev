"use client";

import Link from "next/link";
import Image from "next/image";
import { Connect } from "@/components/icons/Connect";
import { useState } from "react";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#3b444b] px-6 sm:px-8 py-4">
            <div className="flex items-center justify-between">
                {/* Logo + Nav Links */}
                <div className="flex items-center justify-between w-full md:w-auto gap-6 md:gap-[100px]">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={75} height={25} />
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex gap-8">
                        <Link href="/clubs" className="text-white hover:text-[#ffd600] font-bold italic">
                            CLUBS
                        </Link>
                        <Link href="/blog" className="text-white hover:text-[#ffd600] font-bold italic">
                            BLOG
                        </Link>
                        <Link href="/about-us" className="text-white hover:text-[#ffd600] font-bold italic">
                            ABOUT US
                        </Link>
                        <Link href="/contact" className="text-white hover:text-[#ffd600] font-bold italic">
                            CONTACT
                        </Link>
                    </div>
                </div>

                {/* Desktop actions */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link href="/login" className="text-white hover:text-[#ffd600] flex items-center gap-2">
                        <Connect />
                        Connect
                    </Link>
                    <Link href="/register" className="bg-[#ffd600] text-black font-bold px-6 py-2">REGISTER</Link>
                </div>

                {/* Burger icon (Unicode) */}
                <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile nav */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col gap-4">
                    <Link href="/clubs" className="text-white hover:text-[#ffd600] font-bold italic">
                        CLUBS
                    </Link>
                    <Link href="/blog" className="text-white hover:text-[#ffd600] font-bold italic">
                        BLOG
                    </Link>
                    <Link href="/about-us" className="text-white hover:text-[#ffd600] font-bold italic">
                        ABOUT US
                    </Link>
                    <Link href="/contact" className="text-white hover:text-[#ffd600] font-bold italic">
                        CONTACT
                    </Link>
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
