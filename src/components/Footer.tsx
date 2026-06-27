import avlisLogo from '../assets/Avlis-logo.png';

export default function Footer() {
    return (
        <footer className="bg-background-dark border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-3">
                    <img src={avlisLogo} alt="Avlis Logo" className="h-14 w-auto object-contain grayscale brightness-200" />
                </div>

                <div className="text-slate-600 text-[10px] tracking-[0.2em] uppercase font-bold text-center md:text-left">
                    © 2026 AVLIS COMPANY. TODOS OS DIREITOS RESERVADOS.
                </div>
            </div>
        </footer>
    );
}
