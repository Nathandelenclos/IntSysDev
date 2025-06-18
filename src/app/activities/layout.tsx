import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {Breadcrumb} from "@/components/common/Breadcrumb";
import React from "react";

export default function ActivitiesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
                <Breadcrumb />
                {children}
            </div>
            <Footer />
        </main>
    );
}