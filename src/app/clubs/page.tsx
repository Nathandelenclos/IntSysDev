"use client"

import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import Link from "next/link";
import React, {useState} from "react";
import {AnimatedButton, AnimatedCard, AnimatedElement, AnimatedPage} from "@/components/common/AnimatedPage";
import {useAuth} from "@/contexts/AuthContext";

interface IClub {
    name: string,
    address: string,
    city: string,
    coordinates: {
        lat: number,
        lng: number
    }
}

const ClubCard = ({
    name,
    address,
    city,
    index
}: IClub & { index: number }) => {
    const { user } = useAuth()
    return (
        <AnimatedCard delay={0.2 + index * 0.1}>
            <div className="flex w-full px-6 py-4 justify-between rounded-xl shadow-lg border-gray-50 border-[0.5px] bg-white/90 backdrop-blur-sm">
                <div className="flex flex-col">
                    <p className="font-bold text-lg text-gray-800">{name}</p>
                    <p className="font-medium text-gray-600">{city}</p>
                    <p className="font-light text-gray-500 text-sm">{address}</p>
                </div>
                {user && (
                    <div className="flex justify-center items-center">
                        <AnimatedButton className="bg-[#FFD600] py-2 px-4 rounded-md hover:bg-[#E6C200] transition-colors">
                            <Link href="#">Like</Link>
                        </AnimatedButton>
                    </div>
                )}
            </div>
        </AnimatedCard>
    )
}

export default function Clubs() {
    const [clubs, setClubs] = useState<IClub[]>([])
    const [selectedCity, setSelectedCity] = useState<string>("")
    
    const allClubs: IClub[] = [
        {
            name: "Club Varazdin Central",
            address: "Podravska ul. 14, 42000, Varaždin",
            city: "Varaždin",
            coordinates: { lat: 46.3057, lng: 16.3366 }
        },
        {
            name: "Club Zagreb Downtown",
            address: "Ilica 123, 10000, Zagreb",
            city: "Zagreb",
            coordinates: { lat: 45.8150, lng: 15.9819 }
        },
        {
            name: "Club Split Beach",
            address: "Riva 45, 21000, Split",
            city: "Split",
            coordinates: { lat: 43.5081, lng: 16.4402 }
        },
        {
            name: "Club Rijeka Harbor",
            address: "Korzo 15, 51000, Rijeka",
            city: "Rijeka",
            coordinates: { lat: 45.3271, lng: 14.4422 }
        },
        {
            name: "Club Osijek East",
            address: "Europska avenija 15, 31000, Osijek",
            city: "Osijek",
            coordinates: { lat: 45.5550, lng: 18.6955 }
        }
    ]

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSelectedCity(value)
        setClubs(value === "" ? [] : allClubs.filter(club => 
            club.name.toLowerCase().includes(value.toLowerCase()) ||
            club.city.toLowerCase().includes(value.toLowerCase())
        ))
    }

    // Google Maps iframe URL with Croatia as default view
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1150000!2d15.9819!3d45.8150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2shr!4v1703123456789!5m2!1sen!2shr"

    return (
        <main className="min-h-screen">
            <Header />

            <section className="min-h-screen">
                <AnimatedPage className="h-full">
                    <div className="flex flex-col gap-8 p-8 max-w-7xl mx-auto">
                        {/* Header Section */}
                        <AnimatedElement delay={0.1}>
                            <div className="text-center mb-8">
                                <h2 className="text-white text-4xl font-bold uppercase mb-4">Our Clubs</h2>
                                <p className="text-white/80 text-lg max-w-2xl mx-auto">
                                    Discover our partner clubs across Croatia. 
                                    Find the club closest to you.
                                </p>
                            </div>
                        </AnimatedElement>

                        {/* Search Section */}
                        <AnimatedElement delay={0.2}>
                            <div className="flex justify-center">
                                <input
                                    type="text"
                                    placeholder="Search by city or club name..."
                                    className="w-full max-w-md p-4 border border-gray-300 bg-white rounded-lg shadow-lg text-lg"
                                    onChange={onChange}
                                    value={selectedCity}
                                />
                            </div>
                        </AnimatedElement>

                        {/* Map and Clubs Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                            {/* Google Maps Section */}
                            <AnimatedElement delay={0.3}>
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="p-4 bg-gray-50 border-b">
                                        <h3 className="text-xl font-bold text-gray-800">Interactive Map</h3>
                                        <p className="text-gray-600 text-sm">Locate our clubs on the map</p>
                                    </div>
                                    <div className="relative w-full h-[500px]">
                                        <iframe
                                            src={mapUrl}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Clubs Map"
                                            className="rounded-b-xl"
                                        />
                                    </div>
                                </div>
                            </AnimatedElement>

                            {/* Clubs List Section */}
                            <AnimatedElement delay={0.4}>
                                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            Clubs List
                                        </h3>
                                        <p className="text-gray-600 text-sm">
                                            {clubs.length > 0 
                                                ? `${clubs.length} club(s) found` 
                                                : selectedCity 
                                                    ? "No clubs found" 
                                                    : "All our partner clubs"
                                            }
                                        </p>
                                    </div>
                                    
                                    <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
                                        {(clubs.length > 0 ? clubs : allClubs).map((club, index) => (
                                            <ClubCard {...club} key={index} index={index} />
                                        ))}
                                    </div>
                                </div>
                            </AnimatedElement>
                        </div>

                        {/* Contact Section */}
                        <AnimatedElement delay={0.5}>
                            <div className="text-center mt-8">
                                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        Want to become a partner?
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Contact us to integrate your club into our partner network.
                                    </p>
                                    <AnimatedButton className="bg-[#FFD600] py-3 px-8 rounded-lg font-bold hover:bg-[#E6C200] transition-colors">
                                        <Link href="/contact">Contact Us</Link>
                                    </AnimatedButton>
                                </div>
                            </div>
                        </AnimatedElement>
                    </div>
                </AnimatedPage>
            </section>
            
            <Footer />
        </main>
    )
}