import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-[#3b444b] text-white py-4">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center space-x-4 text-sm">
                    <Link href="/legal" className="hover:underline">
                        Mentions légales
                    </Link>
                    <Link href="/cgv" className="hover:underline">
                        CGV
                    </Link>
                    <Link href="/cgu" className="hover:underline">
                        CGU
                    </Link>
                    <Link href="/plan" className="hover:underline">
                        Plan du site
                    </Link>
                    <Link href="/privacy" className="hover:underline">
                        Politique de confidentialité
                    </Link>
                    <Link href="/cookies" className="hover:underline">
                        Paramétrer les cookies
                    </Link>
                </div>
            </div>
        </footer>
    )
}