export default function Authority() {
    return (
        <section className="py-32 relative overflow-hidden bg-elephant-gray">
            <div className="absolute inset-0 lion-texture pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <div className="relative">
                    <div className="absolute inset-0 border-[20px] border-primary/5 -m-6 rounded-2xl hidden md:block"></div>
                    <div className="relative group">
                        <img
                            className="rounded-2xl shadow-2xl grayscale transition-all duration-1000 group-hover:grayscale-0 relative z-10 border border-white/10"
                            alt="Security specialist in tactical gear"
                            src="https://images.unsplash.com/photo-1590402444816-05d832df2291?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute top-0 right-0 glass-card px-8 py-5 rounded-bl-3xl rounded-tr-2xl z-20 border-l border-b border-primary/20 backdrop-blur-2xl">
                            <span className="text-primary font-bold text-xl tracking-tighter font-display italic">AVLIS // SOC_ALPHA</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 flex items-center gap-2">
                            <span className="size-2 bg-primary"></span> Autoridade & Comando
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase italic leading-tight">
                            O Domínio do Impossível.
                        </h3>
                    </div>

                    <p className="text-slate-400 text-lg leading-relaxed font-light">
                        A Avlis não é apenas uma empresa de segurança; somos o arquétipo da proteção inabalável.
                        Através de inteligência tática avançada, dominamos o ambiente operacional para entregar poder inigualável aos nossos parceiros.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="glass-card p-8 rounded-xl group transition-all duration-500 hover:glass-card-hover border-primary/10">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">psychology</span>
                                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Inteligência</h4>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed">Análise neural preditiva em tempo real com processamento de borda.</p>
                        </div>

                        <div className="glass-card p-8 rounded-xl group transition-all duration-500 hover:glass-card-hover border-primary/10">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">verified_user</span>
                                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Protocolos</h4>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed">Rigor militar em cada camada operacional com certificação SOC2.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
