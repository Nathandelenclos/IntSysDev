import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="h-[800px] bg-[url(/backgrounds/contact.png)] bg-cover overflow-hidden">
                <div className="inline-flex flex-col flex-start gap-8 mt-12 ml-12 w-[450px]">
                    <H2>Contact</H2>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-row gap-4">
                            <Link href="tel:+33 3 27 96 47 38" className="flex gap-2 font-bold">
                                <Image src="/icons/phone.svg" alt="phone" height="18" width="18" />
                                <p>+33 3 27 96 47 38</p>
                            </Link>
                            <Link href="mailto:fitnesspark@mail.com" className="flex gap-2 font-bold">
                                <Image src="/icons/mail.svg" alt="mail" height="18" width="18" />
                                <p>fitnesspark@mail.com</p>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <input type="email" placeholder="Your Name" className="w-full p-3 border border-gray-300 bg-white" />
                            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 bg-white" />
                            <input type="email" placeholder="Your Subject" className="w-full p-3 border border-gray-300 bg-white" />
                            <textarea
                                className="w-full p-3 border border-gray-300 bg-white"
                                name="content"
                                id="content"
                                cols={20}
                                rows={5}
                            ></textarea>
                        </div>
                        <button className="bg-[#003A5E] text-white py-4 font-bold">
                            Send Message
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}