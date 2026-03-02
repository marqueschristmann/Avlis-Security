export default function Technology() {
    return (
        <section className="py-32 bg-background-dark border-y border-white/5 relative overflow-hidden" id="tecnologia">
            {/* Decorative Network Path SVG */}
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                <svg fill="none" height="100%" viewBox="0 0 800 400" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 200L150 100M50 200L150 300M150 100L300 150M150 300L300 250M300 150L450 100M300 150L450 200M300 250L450 300M450 100L600 150M450 200L600 150M450 300L600 250M600 150L750 200M600 250L750 200" stroke="#93C572" strokeWidth="0.5"></path>
                    <circle cx="50" cy="200" fill="#93C572" r="2"></circle>
                    <circle cx="150" cy="100" fill="#93C572" r="2"></circle>
                    <circle cx="150" cy="300" fill="#93C572" r="2"></circle>
                    <circle cx="300" cy="150" fill="#93C572" r="2"></circle>
                    <circle cx="300" cy="250" fill="#93C572" r="2"></circle>
                    <circle cx="450" cy="100" fill="#93C572" r="2"></circle>
                    <circle cx="450" cy="200" fill="#93C572" r="2"></circle>
                    <circle cx="450" cy="300" fill="#93C572" r="2"></circle>
                    <circle cx="600" cy="150" fill="#93C572" r="2"></circle>
                    <circle cx="600" cy="250" fill="#93C572" r="2"></circle>
                    <circle cx="750" cy="200" fill="#93C572" r="2"></circle>
                </svg>
            </div>

            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#93C572 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 flex items-center justify-center gap-2">
                        <span className="size-2 bg-primary"></span> Digital Ecosystem
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tighter uppercase italic">Tecnologia de Vanguarda</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                    {/* Left features */}
                    <div className="space-y-16">
                        <div className="text-right flex flex-col items-end group">
                            <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">device_thermostat</span>
                            <h4 className="text-slate-100 font-bold uppercase tracking-widest mb-3">Sensores de Calor</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Detecção térmica avançada integrada a sistemas de IA.</p>
                        </div>
                        <div className="text-right flex flex-col items-end group">
                            <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">visibility</span>
                            <h4 className="text-slate-100 font-bold uppercase tracking-widest mb-3">Visão Computacional</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Reconhecimento de padrões e comportamentos anômalos.</p>
                        </div>
                    </div>

                    {/* Central HUD */}
                    <div className="relative flex justify-center py-10">
                        <div className="size-80 border-2 border-primary/10 rounded-full flex items-center justify-center relative animate-pulse-slow">
                            <div className="size-64 border border-primary/30 rounded-full flex items-center justify-center p-2 relative">
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
                                <img
                                    className="size-full object-cover rounded-full border-4 border-primary shadow-[0_0_50px_rgba(147,197,114,0.3)] saturate-[0.8] contrast-125"
                                    alt="Futuristic HUD display"
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600"
                                />

                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary/20 border border-primary/50 text-primary px-4 py-1.5 text-[8px] font-bold tracking-[0.3em] whitespace-nowrap backdrop-blur-md z-20">
                                    NEURAL PROCESSING: ACTIVE
                                </div>

                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-background-dark px-4 py-1.5 text-[10px] font-bold tracking-widest z-20">
                                    LIVE_FEED
                                </div>
                            </div>
                        </div>

                        {/* Spinning orbit circles */}
                        <div className="absolute inset-0 border-2 border-primary/5 rounded-full -m-10 animate-[spin_30s_linear_infinite]" />
                        <div className="absolute inset-0 border border-primary/5 rounded-full -m-20 animate-[spin_45s_linear_infinite_reverse]" />
                    </div>

                    {/* Right features */}
                    <div className="space-y-16">
                        <div className="text-left flex flex-col items-start group">
                            <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">enhanced_encryption</span>
                            <h4 className="text-slate-100 font-bold uppercase tracking-widest mb-3">Criptografia Ponta-a-Ponta</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Segurança de dados absoluta em todas as comunicações.</p>
                        </div>
                        <div className="text-left flex flex-col items-start group">
                            <span className="material-symbols-outlined text-primary text-3xl mb-4 group-hover:scale-110 transition-transform">satellite_alt</span>
                            <h4 className="text-slate-100 font-bold uppercase tracking-widest mb-3">Rede Mesh Satelital</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">Conectividade garantida mesmo em áreas de sombra.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
