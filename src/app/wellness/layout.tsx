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
            <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50">
                <Breadcrumb />
                {children}
            </div>
            <Footer />
        </main>
    );
}