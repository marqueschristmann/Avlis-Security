import avlisHero from '../assets/avlis-hero.png';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background-dark" id="inicio">
            {/* Background layers */}
            <div className="absolute inset-0 z-0 bg-background-dark overflow-hidden flex items-center justify-center">
                {/* Technological Animations (Underneath) */}
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">
                    <div className="absolute w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] border border-white/5 rounded-full animate-[spin_60s_linear_infinite] border-dashed"></div>
                    <div className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] border border-primary/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                    <div className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] border border-primary/20 rounded-full animate-[spin_20s_linear_infinite] border-dotted flex items-center justify-center">
                        <div className="absolute top-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#93C572]"></div>
                        <div className="absolute bottom-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#93C572]"></div>
                        <div className="absolute left-0 w-1 h-1 bg-primary/50 rounded-full"></div>
                        <div className="absolute right-0 w-1 h-1 bg-primary/50 rounded-full"></div>
                    </div>
                    <div className="absolute w-[30vw] h-[30vw] md:w-[20vw] md:h-[20vw] border border-primary/30 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full"></div>
                </div>

                <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10 pointer-events-none"></div>
                
                <img
                    className="w-full h-full object-contain relative z-20"
                    alt="Centro de controle de alta tecnologia"
                    src={avlisHero}
                />

                {/* Technological Animations (Above) */}
                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-40 pointer-events-none">
                    <div className="absolute w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] border border-white/5 rounded-full animate-[spin_60s_linear_infinite] border-dashed"></div>
                    <div className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] border border-primary/10 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
                    <div className="absolute w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] border border-primary/20 rounded-full animate-[spin_20s_linear_infinite] border-dotted flex items-center justify-center">
                        <div className="absolute top-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#93C572]"></div>
                        <div className="absolute bottom-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#93C572]"></div>
                        <div className="absolute left-0 w-1 h-1 bg-primary/50 rounded-full"></div>
                        <div className="absolute right-0 w-1 h-1 bg-primary/50 rounded-full"></div>
                    </div>
                    <div className="absolute w-[30vw] h-[30vw] md:w-[20vw] md:h-[20vw] border border-primary/30 rounded-full animate-pulse"></div>
                </div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
                            <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                            Securança Operacional
                        </div>

                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8 uppercase italic">
                            Segurança<br />
                            <span className="text-primary text-glow">Estratégica</span>
                        </h1>

                        <p className="text-lg text-white-400 max-w-lg mb-12 font-light leading-relaxed text-justify">
                           Segurança não é apenas presença. É controle, prevenção, procedimento e confiança.
                        </p>

                        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
                            <a href="#servicos" className="bg-primary text-background-dark px-10 py-5 rounded-lg font-bold tracking-[0.2em] transition-all hover:scale-105 uppercase text-xs text-center">
                                Conhecer Soluções
                            </a>
                            <a href="#hardware" className="glass-card text-white px-10 py-5 rounded-lg font-bold tracking-[0.2em] transition-all hover:glass-card-hover uppercase text-xs text-center">
                                Nossa Tecnologia
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
