import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";
import Link from "next/link";

export default function Login() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="h-[800px] bg-[url(/backgrounds/login.png)] bg-cover overflow-hidden">
                <div className="flex flex-col flex-start gap-8 h-full justify-center m-12 max-w-[450px]">
                    <H2>Login</H2>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 bg-white" />
                            <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 bg-white" />
                            <Link href="/login" className="bg-[#003A5E] text-white py-4 font-bold justify-center flex">
                                Login
                            </Link>
                        </div>
                        <hr className="bg-gray-600"/>
                        <Link href="/register" className="w-full text-center">Or register</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}