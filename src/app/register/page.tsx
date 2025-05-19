import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";
import Link from "next/link";

export default function Register() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="h-[800px] bg-[url(/backgrounds/register.png)] bg-cover overflow-hidden">
                <div className="inline-flex flex-col flex-start gap-8 h-full justify-center ml-12 w-[450px]">
                    <H2>Register</H2>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <input type="name" placeholder="Name" className="w-full p-3 border border-gray-300 bg-white" />
                            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 bg-white" />
                            <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 bg-white" />
                            <input type="confirm-password" placeholder="Confirm password" className="w-full p-3 border border-gray-300 bg-white" />
                            <Link href="/register" className="bg-[#003A5E] text-white py-4 font-bold justify-center flex">
                                Register
                            </Link>
                        </div>
                        <hr className="bg-gray-600"/>
                        <Link href="/login" className="w-full text-center">Or login</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}