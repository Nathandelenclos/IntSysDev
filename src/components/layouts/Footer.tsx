import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-[#3b444b] text-white py-4">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-end space-x-4 text-sm">
                    <Link href="/legal" className="hover:underline">
                        Legal notices
                    </Link>
                    <Link href="/cgv" className="hover:underline">
                        GTC
                    </Link>
                    <Link href="/cgu" className="hover:underline">
                        T&C
                    </Link>
                    <Link href="/plan" className="hover:underline">
                        Site Map
                    </Link>
                    <Link href="/privacy" className="hover:underline">
                        Privacy Policy
                    </Link>
                    <Link href="/cookies" className="hover:underline">
                        Configure cookies
                    </Link>
                </div>
            </div>
        </footer>
    )
}