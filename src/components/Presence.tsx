export default function Presence() {
    return (
        <section className="py-32 bg-background-dark relative overflow-hidden" id="presenca">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 flex items-center justify-center gap-2">
                        <span className="size-2 bg-primary"></span> Presença Estratégica
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase italic">Parques que Estamos Atuando</h3>
                </div>

                <div className="relative group">
                    <div className="aspect-[21/9] glass-card rounded-2xl overflow-hidden relative border-primary/20 backdrop-blur-xl">
                        <img
                            className="w-full h-full object-cover grayscale opacity-40 transition-transform duration-1000 group-hover:scale-110"
                            src="https://images.unsplash.com/photo-1466611653911-95282fc3656b?q=80&w=2070&auto=format&fit=crop"
                            alt="Wind farm at night"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>

                        <div className="absolute bottom-12 left-12 animate-slide-up">
                            <div className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 border-l-2 border-primary pl-4">Sector: Alpha-9</div>
                            <h4 className="text-4xl md:text-5xl font-bold text-white uppercase italic tracking-tighter mb-8">Complexo Eólico<br />Ventos do Norte</h4>
                            <div className="flex items-center gap-10">
                                <div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold font-mono">Status</div>
                                    <div className="text-primary font-bold text-sm tracking-widest flex items-center gap-2 font-mono">
                                        <span className="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#93C572]"></span>
                                        SECURED
                                    </div>
                                </div>
                                <div className="w-px h-10 bg-white/10 hidden sm:block"></div>
                                <div>
                                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-2 font-bold font-mono">Active Nodes</div>
                                    <div className="text-white font-bold text-sm font-mono tracking-widest">142 Units</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hexagonal Controls */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                        <button className="size-14 bg-background-dark border border-primary/30 flex items-center justify-center hover:bg-primary text-primary hover:text-background-dark transition-all shadow-2xl" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                            <span className="material-symbols-outlined font-bold">chevron_left</span>
                        </button>
                        <div className="px-10 py-3 bg-background-dark border border-primary/20 text-xs font-mono text-primary tracking-[0.6em] flex items-center gap-6 rounded-sm shadow-xl">
                            <span className="opacity-40 font-bold">01</span>
                            <div className="w-16 h-[1px] bg-primary/30"></div>
                            <span className="font-bold">05</span>
                        </div>
                        <button className="size-14 bg-background-dark border border-primary/30 flex items-center justify-center hover:bg-primary text-primary hover:text-background-dark transition-all shadow-2xl" style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
                            <span className="material-symbols-outlined font-bold">chevron_right</span>
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {[
                        { value: '24/7', label: 'Monitoramento' },
                        { value: '15+', label: 'Parques Ativos' },
                        { value: '500+', label: 'Ativos Protegidos' },
                        { value: '0ms', label: 'Latência Operacional' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center border-t border-primary/10 pt-10 group hover:border-primary/40 transition-colors">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display italic transition-colors group-hover:text-primary">{stat.value}</div>
                            <div className="text-[10px] text-slate-500 tracking-[0.2em] uppercase font-bold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
