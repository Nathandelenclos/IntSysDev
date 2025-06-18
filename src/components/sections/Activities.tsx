import Link from "next/link";
import Image from "next/image";
import { AnimatedOnScroll, AnimatedCard, AnimatedButton } from "@/components/common/AnimatedPage";

const activities = [
    {
        title: "CrossFit",
        description: "High-intensity functional movements that will challenge your strength, endurance, and mental toughness. Perfect for all fitness levels.",
        image: "/activities/crossfit-hero.jpg",
        link: "/activities/crossfit",
        color: "#FFD600"
    },
    {
        title: "Pilates",
        description: "Improve your core strength, flexibility, and posture through controlled movements. A perfect blend of mind and body training.",
        image: "/activities/pilates-hero.jpg",
        link: "/activities/pilates",
        color: "#4CAF50"
    },
    {
        title: "Zumba",
        description: "Dance your way to fitness with our energetic Zumba classes. A fun and effective way to burn calories while learning new dance moves.",
        image: "/activities/zumba-hero.jpg",
        link: "/activities/zumba",
        color: "#FF1493"
    },
    {
        title: "Mom Sessions",
        description: "Specialized fitness classes designed for mothers, focusing on postnatal recovery, core strength, and overall well-being.",
        image: "/activities/mom-sessions-hero.jpg",
        link: "/activities/mom-sessions",
        color: "#9C27B0"
    }
];

export const ActivitiesSection = () => (
  <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
    <div className="max-w-7xl mx-auto px-4">
      <AnimatedOnScroll delay={0.2}>
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#ffd600] to-[#ff9900] bg-clip-text text-transparent drop-shadow">Our Activities</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">Discover our diverse range of fitness activities designed to challenge, energize, and transform you. From high-intensity CrossFit to mindful Pilates, find your perfect workout!</p>
        </div>
      </AnimatedOnScroll>
      
      {/* Activities Grid - Same as activities page */}
      <AnimatedOnScroll delay={0.4}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {activities.map((activity, index) => (
            <AnimatedCard key={index} delay={0.6 + index * 0.1}>
              <Link 
                href={activity.link}
                className="group"
              >
                <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">{activity.title}</h3>
                    <p className="text-gray-100 mb-6 text-lg">{activity.description}</p>
                    <div 
                      className="inline-block px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-lg"
                      style={{ backgroundColor: activity.color }}
                    >
                      Join Now
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </AnimatedOnScroll>

      {/* Call to Action */}
      <AnimatedOnScroll delay={0.8}>
        <div className="text-center">
            <AnimatedButton className="bg-[#ffd600] text-black font-bold px-8 py-3 mt-2">
              <Link href="/activities">Discover all activities</Link>
            </AnimatedButton>
        </div>
      </AnimatedOnScroll>
    </div>
  </section>
); 