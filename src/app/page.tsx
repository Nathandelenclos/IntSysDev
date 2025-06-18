import {Header} from "@/components/layouts/Header";
import {HeroSection} from "@/components/sections/Hero";
import {MembersSection} from "@/components/sections/Members";
import {NewsletterSection} from "@/components/sections/Newsletter";
import {Footer} from "@/components/layouts/Footer";
import {ActivitiesSection} from "@/components/sections/Activities";
import {KidsAreaSection} from "@/components/sections/KidsArea";
import {ContactCtaSection} from "@/components/sections/ContactCta";
import {AnimatedOnScroll} from "@/components/common/AnimatedPage";

export default function Home() {
  return (
      <main className="min-h-screen">
        <Header />

        <AnimatedOnScroll delay={0.1}>
          <HeroSection />
        </AnimatedOnScroll>
        
        <AnimatedOnScroll delay={0.2}>
          <ActivitiesSection />
        </AnimatedOnScroll>
        
        <AnimatedOnScroll delay={0.3}>
          <KidsAreaSection />
        </AnimatedOnScroll>
        
        <AnimatedOnScroll delay={0.4}>
          <MembersSection />
        </AnimatedOnScroll>
        
          <ContactCtaSection />

          <NewsletterSection />

        <Footer />
      </main>
  );
}
