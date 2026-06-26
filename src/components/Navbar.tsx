import { useState, useEffect } from 'react';
import avlisLogo from '../assets/Avlis-logo.png';

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
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                    <img src={avlisLogo} alt="Avlis Logo" className="h-14 w-auto object-contain" />
                </a>

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
