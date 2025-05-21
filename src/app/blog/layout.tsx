import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";

export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="flex flex-col bg-[linear-gradient(180deg,_#03080B_0%,_#012E4A_100%)] bg-cover overflow-hidden px-4 sm:px-8 md:px-16 py-8 gap-8">
                {children}
            </section>

            <Footer />
        </main>
    )
}