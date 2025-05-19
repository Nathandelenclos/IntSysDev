import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";

export default function AboutUs() {
    return (
        <main className="min-h-screen">
            <Header />

            <section className="h-[800px] bg-[url(/backgrounds/about-us.png)] bg-cover overflow-hidden">
                <div className="inline-flex flex-col flex-start gap-8 mt-12 ml-12 w-[800px]">
                    <H2>About us</H2>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl">Welcome to Fitness Center – Your Space to Move, Grow, and Thrive.</h3>
                            <p>At Fitness Center, we believe in building a community around wellness, performance, and balance. Located on the outskirts of the city, our modern facilities are designed to help everyone – from beginners to seasoned athletes – achieve their fitness goals in a motivating and safe environment.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl">💪 Facilities</h3>
                            <div>
                                <p>Our club includes:</p>
                                <ul className="list-disc pl-5">
                                    <li>Cardio Room – with treadmills, rowing machines, ellipticals, and more</li>
                                    <li>Weight Training Area – equipped with free weights, machines, and benches</li>
                                    <li>Functional Training Zone – for cross-training, HIIT, and mobility exercises</li>
                                    <li>Group Class Studios – Zumba, Pilates, Yoga, CrossFit, and more</li>
                                    <li>Wellness Area – including sauna, massage space, and relaxation zones</li>
                                    <li>Kids&#39; Play Area – because parents need time for themselves too</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="font-bold text-2xl">💰 Membership Pricing</h3>
                            <div>
                                <p>We offer flexible plans tailored to your needs:</p>
                                <ul className="list-disc pl-5">
                                    <li>Monthly Pass: €39.90/month – Unlimited access, no commitment</li>
                                    <li>Annual Pass: €399/year – 2 months free + welcome gift</li>
                                    <li>Student Plan: €29.90/month – on valid student ID</li>
                                    <li>One-Day Access: €9.90 – perfect for travelers or tryouts</li>
                                </ul>
                                <p>All plans include access to group classes and wellness areas (except day pass).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
