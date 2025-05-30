import {Header} from "@/components/layouts/Header";
import {HeroSection} from "@/components/sections/Hero";
import {MembersSection} from "@/components/sections/Members";
import {NewsletterSection} from "@/components/sections/Newsletter";
import {Footer} from "@/components/layouts/Footer";

export default function Home() {
  return (
      <main className="min-h-screen">
        <Header />

        <HeroSection />

        <MembersSection />

        <NewsletterSection />

        <Footer />
      </main>
  );
}
