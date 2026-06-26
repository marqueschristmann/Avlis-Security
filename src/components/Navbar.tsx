import { useState, useEffect } from 'react';

const RESTRICTED_AREA_URL = '#'; // ← substitua pelo link da Área Restrita

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll); // fix: was passing setScrolled instead of onScroll
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background-dark/80 backdrop-blur-md border-b border-white/5 ${scrolled ? 'h-16' : 'h-20'}`}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="size-7 text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <span className="text-lg font-bold tracking-widest text-slate-100">AVLIS</span>
                </div>

                {/* Nav links */}
                <div className="hidden md:flex items-center gap-8">
                    {[
                        { label: 'Serviços', href: '#servicos' },
                        { label: 'Sobre', href: '#sobre' },
                        { label: 'Tecnologia', href: '#tecnologia' },
                        { label: 'Contato', href: '#contato' },
                    ].map((link) => (
                        <a
                            key={link.href}
                            className="text-[10px] font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] text-slate-400"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA buttons */}
                <div className="flex items-center gap-3">
                    <a
                        href="#contato"
                        className="border border-primary/30 hover:border-primary text-primary px-5 py-2 rounded-full font-bold text-[10px] transition-all tracking-widest uppercase"
                    >
                        Solicitar Proposta
                    </a>
                    <a
                        href={RESTRICTED_AREA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-primary/30 hover:border-primary hover:bg-primary/10 text-primary px-5 py-2 rounded-full font-bold text-[10px] transition-all tracking-widest uppercase"
                    >
                        Área Restrita
                    </a>
                </div>
            </div>
        </nav>
    );
}
