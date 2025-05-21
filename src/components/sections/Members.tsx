export const MembersSection = () => {
    return (
        <section className="relative h-[800px] overflow-hidden">
            <div className="absolute inset-0 min-md:bg-[url(/backgrounds/members.png)] bg-cover bg-center max-md:bg-white z-0" />

            <div className="relative container mx-auto px-6 h-full flex items-center justify-end max-md:justify-start z-10">
                <div className="text-end max-md:text-start">
                    <h2 className="text-[#ffd600] text-6xl font-bold mb-2">+1 200 000</h2>
                    <h3 className="text-[#3b444b] text-2xl font-medium mb-6">OF MEMBERS</h3>
                    <p className="text-[#3b444b] mb-2">Join the community!</p>
                    <p className="text-[#3b444b]">Register now and take advantage of the best gym.</p>
                </div>
            </div>
        </section>
    )
}
