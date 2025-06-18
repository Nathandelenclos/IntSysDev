import {Header} from "@/components/layouts/Header";
import {HeroSection} from "@/components/sections/Hero";
import {MembersSection} from "@/components/sections/Members";
import {NewsletterSection} from "@/components/sections/Newsletter";
import {Footer} from "@/components/layouts/Footer";
import {ActivitiesSection} from "@/components/sections/Activities";
import {KidsAreaSection} from "@/components/sections/KidsArea";
import {ContactCtaSection} from "@/components/sections/ContactCta";

export default function Home() {
  return (
      <main className="min-h-screen">
        <Header />

        <HeroSection />
        <ActivitiesSection />
        <KidsAreaSection />
        <MembersSection />
        <ContactCtaSection />
        <NewsletterSection />

        <Footer />
      </main>
  );
}
