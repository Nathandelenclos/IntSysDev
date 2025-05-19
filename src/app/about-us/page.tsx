import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";

export default function AboutUs() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="h-[800px] bg-[url(/backgrounds/about-us.png)] bg-cover overflow-hidden">
                <div className="inline-flex flex-col flex-start gap-8 mt-12 ml-12 w-full">
                    <H2>About us</H2>

                </div>
            </section>
            <Footer />
        </main>
    )
}
