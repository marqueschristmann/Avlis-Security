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
                            Security Operations Center Enabled
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8 uppercase italic">
                            Segurança<br />
                            <span className="text-primary text-glow">Estratégica</span>
                        </h1>

                        <p className="text-lg text-slate-400 max-w-lg mb-12 font-light leading-relaxed">
                            Domínio operacional absoluto e inteligência preditiva para a proteção de ativos críticos em escala global.
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

                    {/* Right side status card */}
                    <div className="hidden lg:block animate-fade-in">
                        <div className="glass-card p-10 rounded-2xl border-primary/20 relative overflow-hidden backdrop-blur-2xl">
                            <div className="flex justify-between items-center mb-10">
                                <div className="text-[10px] font-bold text-primary tracking-widest uppercase">Live Monitoring Status</div>
                                <div className="text-[10px] text-slate-500 font-mono tracking-tighter">SYNC_ENCRYPTED</div>
                            </div>

                            <div className="space-y-8">
                                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold">Operational Load</div>
                                        <div className="text-3xl font-bold text-white font-display italic">98.4%</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold">Active Nodes</div>
                                        <div className="text-3xl font-bold text-white font-display tracking-widest italic">1,248</div>
                                    </div>
                                </div>

                                <div className="h-40 rounded-xl bg-black/40 border border-primary/10 flex items-center justify-center relative group">
                                    <div className="text-[10px] text-primary/50 tracking-[0.4em] animate-pulse font-bold">SCANNING PERIMETER...</div>
                                    {/* Decorative corner lines */}
                                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/30" />
                                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/30" />
                                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/30" />
                                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/30" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
