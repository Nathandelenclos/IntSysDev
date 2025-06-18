import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {Breadcrumb} from "@/components/common/Breadcrumb";
import React from "react";

export default function WellnessLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="bg-[linear-gradient(180deg,_#03080B_0%,_#012E4A_100%)]">
                <Breadcrumb />
                {children}
            </div>
            <Footer />
        </main>
    );
}