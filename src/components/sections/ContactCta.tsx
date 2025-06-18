import Link from "next/link";
import { AnimatedOnScroll, AnimatedButton } from "@/components/common/AnimatedPage";

export const ContactCtaSection = () => (
  <section className="bg-gradient-to-r from-[#3b444b] to-[#23272b] py-20">
    <div className="container mx-auto px-6 flex flex-col items-center text-center">
      <AnimatedOnScroll delay={0.2}>
        <div className="mb-4">
          <svg width="56" height="56" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#ffd600] mx-auto">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5M21 10.5l-9 5.25L3 10.5m18 0v7a2 2 0 01-2 2h-7" />
          </svg>
        </div>
      </AnimatedOnScroll>
      
      <AnimatedOnScroll delay={0.4}>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#ffd600] to-[#ff9900] bg-clip-text text-transparent drop-shadow">Contact Us</h2>
      </AnimatedOnScroll>
      
      <AnimatedOnScroll delay={0.6}>
        <p className="mb-8 text-[#ffd600] max-w-2xl text-lg">A question or a special need? Our team is here to support you on your fitness journey.</p>
      </AnimatedOnScroll>
      
      <AnimatedOnScroll delay={0.8}>
        <AnimatedButton className="bg-[#ffd600] text-black font-bold px-8 py-3 mt-2">
          <Link href="/contact">Contact</Link>
        </AnimatedButton>
      </AnimatedOnScroll>
    </div>
  </section>
); 