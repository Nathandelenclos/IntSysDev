import Link from "next/link";
import Image from "next/image";

export const KidsAreaSection = () => (
  <section className="bg-[#f5f5f5] py-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10 animate-fade-in">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-[#ffd600] bg-white">
          <Image src="/backgrounds/kids-area-hero.png" alt="Kids area" width={400} height={300} className="object-cover w-full h-64" />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#ffd600] to-[#ff9900] bg-clip-text text-transparent drop-shadow">Kids Area</h2>
        <p className="mb-8 text-gray-700 max-w-lg text-lg">A dedicated space where your children can thrive, play, and learn safely while you enjoy our facilities.</p>
        <Link href="/kids-area" className="bg-[#ffd600] text-black font-bold px-8 py-3 mt-2">Learn more</Link>
      </div>
    </div>
  </section>
);

// Ajout d'une animation fade-in (à placer dans le CSS global si non existant)
// .animate-fade-in { animation: fadeIn 1s ease; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } } 