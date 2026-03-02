export default function Hardware() {
    const specs = [
        {
            icon: 'videocam',
            tag: 'Optic_01',
            title: 'Resolução Ultra HD 4K',
            description: 'Captura de detalhes críticos com fidelidade absoluta em 3840x2160 pixels.',
        },
        {
            icon: 'thermostat',
            tag: 'Optic_02',
            title: 'Visão Térmica Avançada',
            description: 'Sensores de radiação infravermelha para monitoramento em escuridão total ou fumaça.',
        },
        {
            icon: 'zoom_in',
            tag: 'Optic_03',
            title: 'Lentes Varifocais Motorizadas',
            description: 'Ajuste remoto de foco e zoom para cobertura adaptável de perímetros dinâmicos.',
        },
        {
            icon: 'psychology',
            tag: 'Core_AI',
            title: 'Analíticos de IA Integrados',
            description: 'Processamento na borda para reconhecimento facial e detecção de intrusão autônoma.',
        },
    ];

    return (
        <section className="py-32 border-t border-white/5 relative overflow-hidden bg-background-dark">
            <div className="absolute inset-0 grid-bg opacity-5"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Hardware Infrastructure</h2>
                        <h3 className="text-4xl font-bold text-white tracking-tighter uppercase italic">Technical Specifications</h3>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-primary font-mono text-[10px] tracking-widest uppercase mb-1">Hardware Revision: v4.0.2</div>
                        <div className="text-slate-500 font-mono text-[10px] tracking-widest uppercase">Firmware: Encrypted_XOS</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
                    {specs.map((spec, i) => (
                        <div key={i} className="bg-elephant-gray p-8 group hover:bg-primary/5 transition-colors relative">
                            <div className="flex items-center justify-between mb-12">
                                <span className="material-symbols-outlined text-primary text-3xl">{spec.icon}</span>
                                <div className="text-[8px] text-primary/30 font-mono uppercase tracking-widest">{spec.tag}</div>
                            </div>
                            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-3">{spec.title}</h4>
                            <p className="text-slate-500 text-xs leading-relaxed">{spec.description}</p>

                            <div className="mt-8 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-500" />
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 border border-primary/20 rounded-full bg-primary/5">
                        <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="text-[9px] text-primary/60 uppercase tracking-widest font-mono font-bold">
                            Sistema de hardware totalmente auditado por protocolos SOC2
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
