import {ReactNode} from "react";
import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {Breadcrumb} from "@/components/common/Breadcrumb";

export default function BlogLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="bg-[linear-gradient(180deg,_#03080B_0%,_#012E4A_100%)]">
                <Breadcrumb />
                <section className="flex flex-col bg-cover overflow-hidden px-4 sm:px-8 md:px-16 py-8 gap-8">
                    {children}
                </section>
            </div>
            <Footer />
        </main>
    )
}