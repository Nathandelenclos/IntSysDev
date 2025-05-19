export const NewsletterSection = () => {
    return (
        <section className="bg-[#ffd600] py-12">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="w-full max-w-md">
                    <input type="email" placeholder="Your email" className="w-full p-3 mb-4 border border-gray-300 bg-white" />
                    <button className="w-full bg-[#3b444b] text-white py-3 font-medium">REGISTER TO THE NEWSLETTER</button>
                </div>
            </div>
        </section>
    )
}