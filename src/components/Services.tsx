export default function Services() {
    const services = [
        {
            title: 'Private Investigation Services',
            description: 'Discreet corporate and personal intelligence gathering with digital forensics.',
            icon: (
                <svg className="size-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            ),
        },
        {
            title: 'Personal Investigation Services',
            description: 'Background checks and personal security assessments for high-net-worth individuals.',
            icon: (
                <svg className="size-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            ),
        },
        {
            title: 'Armed Security Guard',
            description: 'Elite tactical response units for critical infrastructure protection.',
            icon: (
                <svg className="size-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            ),
        },
        {
            title: 'Event Security',
            description: 'Logistical security management for high-profile corporate events and summits.',
            icon: (
                <svg className="size-full" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect height="8" rx="2" width="20" x="2" y="2"></rect>
                    <rect height="8" rx="2" width="20" x="2" y="14"></rect>
                </svg>
            ),
        },
    ];

    return (
        <section className="py-32 relative overflow-hidden bg-elephant-gray" id="servicos">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="h-full w-full" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #93C572, #93C572 1px, transparent 1px, transparent 100px)', backgroundSize: '100% 100px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 max-w-2xl">
                    <h2 className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 flex items-center gap-2">
                        <span className="size-2 bg-primary"></span> Core Capabilities
                    </h2>
                    <h3 className="text-5xl font-bold text-white tracking-tighter uppercase italic mb-6">Take A Look At Services We Provide</h3>
                    <p className="text-slate-400 leading-relaxed font-light">
                        Soluções integradas de inteligência e proteção física, desenhadas para
                        neutralizar ameaças complexas em ambientes de alto risco.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="glass-card p-6 rounded-xl border-l-2 border-primary relative group overflow-hidden transition-all duration-300 hover:glass-card-hover"
                        >
                            <div className="absolute top-2 right-2 size-12 opacity-10 text-primary">
                                {service.icon}
                            </div>
                            <h4 className="text-white font-bold uppercase text-sm tracking-widest mb-4 pr-10">{service.title}</h4>
                            <p className="text-slate-500 text-xs mb-8 leading-relaxed">{service.description}</p>
                            <button className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                                Know More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
