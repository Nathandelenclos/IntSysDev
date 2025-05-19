import Link from "next/link";
import Image from "next/image";
import {Connect} from "@/components/icons/Connect";

export const Header = () => {
    return (
        <nav className="bg-[#3b444b] px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-[100px]">
                <Link href="/">
                    <Image src={"/logo.png"} alt="logo" width={75} height={25} />
                </Link>
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
            <div className="flex items-center space-x-4">
                <Link href="/login" className="text-white hover:text-[#ffd600] flex items-center gap-2">
                    <Connect/>
                    Connect
                </Link>
                <Link href="/register" className="bg-[#ffd600] text-black font-bold px-6 py-2">REGISTER</Link>
            </div>
        </nav>
    )
}