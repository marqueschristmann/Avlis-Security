export default function About() {
    return (
        <section className="py-32 relative overflow-hidden bg-elephant-gray" id="sobre">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="aspect-square glass-card rounded-2xl overflow-hidden relative">
                        <img
                            className="w-full h-full object-cover grayscale opacity-80"
                            alt="High-tech surveillance center"
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-colors group-hover:bg-primary/5"></div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-2xl hidden md:block border-primary/20 backdrop-blur-3xl shadow-2xl">
                        <div className="text-5xl font-bold text-primary mb-2 font-display italic">0%</div>
                        <div className="text-[10px] text-slate-400 tracking-widest uppercase font-bold">Falha Operacional Histórica</div>
                    </div>
                </div>

                <div className="order-1 lg:order-2">
                    <h2 className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 flex items-center gap-2">
                        <span className="size-2 bg-primary"></span> Nossa Essência
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase italic leading-tight mb-10">
                        Vigilância Constante,<br />Liderança Absoluta.
                    </h3>
                    <div className="space-y-10">
                        <p className="text-slate-400 text-lg leading-relaxed font-light">
                            Nascemos da necessidade de um novo padrão de segurança: um que não apenas reaja, mas preveja.
                            A Avlis combina disciplina tática com as tecnologias mais disruptivas do mercado global.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="border-l-2 border-primary pl-8 transition-all hover:pl-10">
                                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-4">Missão</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">Garantir a inviolabilidade dos ativos mais valiosos do mundo.</p>
                            </div>
                            <div className="border-l-2 border-primary pl-8 transition-all hover:pl-10">
                                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-4">Visão</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">Ser a interface definitiva entre tecnologia e proteção humana.</p>
                            </div>
                        </div>
                        
                        <div className="pt-6">
                            <a
                                href="/apresentacao-avlis.pdf"
                                download
                                className="inline-flex items-center gap-3 bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 hover:border-primary px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all group"
                            >
                                <svg className="size-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Saiba mais sobre a Nossa Empresa PDF
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
