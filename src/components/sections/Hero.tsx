import Link from "next/link";

export const HeroSection = () => {
    return (
        <section className="h-[800px] bg-[url(/backgrounds/hero.png)] bg-cover overflow-hidden">
            <div className="container mx-auto px-6 h-full flex items-center">
                <div className="max-w-md">
                    <h1 className="text-white text-4xl font-bold mb-2">PUSH YOUR LIMITS</h1>
                    <h2 className="text-[#ffd600] text-4xl font-bold mb-8">AND SUCCEED!</h2>
                    <Link href="/clubs" className="bg-[#ffd600] text-black font-bold px-8 py-3">FIND MY CLUB NOW!</Link>
                </div>
            </div>
        </section>
    )
}