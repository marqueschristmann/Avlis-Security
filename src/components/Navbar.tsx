import { useState, useEffect } from 'react';
import avlisLogo from '../assets/Avlis-logo.png';

const RESTRICTED_AREA_URL = '#'; // ← substitua pelo link da Área Restrita

const navLinks = [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Tecnologia', href: '#tecnologia' },
    { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Fechar menu ao clicar em link
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 bg-background-dark border-b border-white/5 ${scrolled ? 'h-16' : 'h-20'}`}>
            <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                    <img src={avlisLogo} alt="Avlis Logo" className="h-14 w-auto object-contain grayscale brightness-200" />
                </a>

                {/* Nav links — desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            className="text-[10px] font-bold hover:text-primary transition-colors uppercase tracking-[0.2em] text-slate-400"
                            href={link.href}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA buttons — desktop */}
                <div className="hidden md:flex items-center gap-3">
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

                {/* Hamburger button — mobile only */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2 text-slate-300 hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menu"
                >
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile menu panel */}
            <div className={`md:hidden bg-background-dark border-b border-white/5 overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="text-[11px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-[0.2em] py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="border-t border-white/5 pt-4 flex flex-col gap-3">
                        <a
                            href="#contato"
                            onClick={handleLinkClick}
                            className="border border-primary/30 hover:border-primary text-primary px-5 py-3 rounded-full font-bold text-[10px] transition-all tracking-widest uppercase text-center"
                        >
                            Solicitar Proposta
                        </a>
                        <a
                            href={RESTRICTED_AREA_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleLinkClick}
                            className="border border-primary/30 hover:border-primary hover:bg-primary/10 text-primary px-5 py-3 rounded-full font-bold text-[10px] transition-all tracking-widest uppercase text-center"
                        >
                            Área Restrita
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
