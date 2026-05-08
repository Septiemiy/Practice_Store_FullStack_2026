import Link from "next/link";

const navLinks = [
  { label: "Homepage", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Checkout", href: "/checkout" },
];

export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between px-8 h-16">
                    <Link href="/" className="flex items-center gap-2 ">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-gray-900">Storee</span>
                    </Link>
                    <nav className="absolute left-1/2 -translate-x-1/2 flex gap-6">
                        { navLinks.map(({ label, href }) => (
                            <Link key={href} href={href} className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}