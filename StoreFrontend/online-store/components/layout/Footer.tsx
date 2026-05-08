export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 mt-12">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                        </div>
                        <span className="font-bold text-gray-800">Storee</span>
                    </div>
                    <p className="text-sm text-gray-400">&copy; 2025 Storee. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}