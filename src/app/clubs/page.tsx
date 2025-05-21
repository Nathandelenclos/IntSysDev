"use client"

import {Header} from "@/components/layouts/Header";
import {Footer} from "@/components/layouts/Footer";
import {H2} from "@/components/typo/H2";
import Link from "next/link";
import React, {useState} from "react";

interface IClub {
    name: string,
    address: string
}


const Card = ({
    name,
    address
}: IClub) => {
    return (
        <div className="flex w-full px-8 py-4 justify-between rounded-xl shadow-lg border-gray-50 border-[0.5px]">
            <div className="flex flex-col">
                <p className="font-semibold">{name}</p>
                <p className="font-light">{address}</p>
            </div>
            <div className="flex justify-center items-center">
                <Link href="#" className="bg-[#FFD600] py-2 px-4 rounded-md">
                    Like
                </Link>
            </div>
        </div>
    )
}

export default function Contact() {
    const [clubs, setClubs] = useState<IClub[]>([])
    const allClubs: IClub[] = [
        {
            name: "Varazdin",
            address: "Podravska ul. 14, 42000, Varaždin"
        }, {
            name: "Varazdin",
            address: "Podravska ul. 14, 42000, Varaždin"
        }, {
            name: "Varazdin",
            address: "Podravska ul. 14, 42000, Varaždin"
        },
    ]

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClubs(e.target.value == "" ? [] : allClubs.filter(club => club.name.includes(e.target.value)))
    }

    return (
        <main className="min-h-screen">
            <Header />

            <section className="h-[800px] bg-[url(/backgrounds/clubs.png)] bg-cover overflow-hidden">
                <div className="flex flex-col flex-start gap-8 h-full justify-center m-12 max-w-[450px]">
                    <H2>Clubs</H2>
                    <div className="flex flex-col gap-8">
                        <input
                            type="city"
                            placeholder="City"
                            className="w-full p-3 border border-gray-300 bg-white"
                            onChange={onChange}
                        />

                        <div className="flex flex-col gap-4">
                            {clubs.map((club, index) => (<Card {...club} key={index} />))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}