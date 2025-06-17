import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import React from "react";

export default function ActivitiesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className="min-h-screen">
            <Header />
            {children}
            <Footer />
        </main>
    );
}