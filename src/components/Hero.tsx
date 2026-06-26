export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background-dark" id="inicio">
            {/* Background layers */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent z-10"></div>
                <div className="absolute inset-0 grid-bg opacity-30"></div>
                <img
                    className="w-full h-full object-cover"
                    alt="Cinematic shot of a high-tech control center"
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-8">
                            <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                            Securança Operacional
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8 uppercase italic">
                            Segurança<br />
                            <span className="text-primary text-glow">Estratégica</span>
                        </h1>

                        <p className="text-lg text-slate-400 max-w-lg mb-12 font-light leading-relaxed">
                           Segurança não é apenas presença. É controle, prevenção, procedimento e confiança.
                        </p>

                        <div className="flex flex-wrap gap-5">
                            <button className="bg-primary text-background-dark px-10 py-5 rounded-lg font-bold tracking-[0.2em] transition-all hover:scale-105 uppercase text-xs">
                                Conhecer Soluções
                            </button>
                            <button className="glass-card text-white px-10 py-5 rounded-lg font-bold tracking-[0.2em] transition-all hover:glass-card-hover uppercase text-xs">
                                Nossa Tecnologia
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
