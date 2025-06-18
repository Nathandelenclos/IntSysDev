import Link from "next/link";
import { AnimatedOnScroll, AnimatedButton } from "@/components/common/AnimatedPage";

export const MembersSection = () => {
    return (
        <section className="relative h-[800px] overflow-hidden">
            <div className="absolute inset-0 min-md:bg-[url(/backgrounds/members.png)] bg-cover bg-center max-md:bg-white z-0" />

            <div className="relative container mx-auto px-6 h-full flex items-center justify-end max-md:justify-start z-10">
                <AnimatedOnScroll delay={0.2} direction="right">
                    <div className="flex flex-col gap-2 text-end max-md:text-start">
                        <AnimatedOnScroll delay={0.4}>
                            <h2 className="text-[#ffd600] text-6xl font-bold">+1 200 000</h2>
                        </AnimatedOnScroll>
                        
                        <AnimatedOnScroll delay={0.6}>
                            <h3 className="text-[#3b444b] text-2xl font-medium mb-6">OF MEMBERS</h3>
                        </AnimatedOnScroll>
                        
                        <AnimatedOnScroll delay={0.8}>
                            <div className="mb-2">
                                <p className="text-[#3b444b]">Join the community!</p>
                                <p className="text-[#3b444b]">Register now and take advantage of the best gym.</p>
                            </div>
                        </AnimatedOnScroll>
                        
                        <AnimatedOnScroll delay={1.0}>
                            <div>
                                <AnimatedButton className="bg-[#ffd600] text-black font-bold px-8 py-3 mt-2">
                                    <Link href="/register">REGISTER!</Link>
                                </AnimatedButton>
                            </div>
                        </AnimatedOnScroll>
                    </div>
                </AnimatedOnScroll>
            </div>
        </section>
    )
}
