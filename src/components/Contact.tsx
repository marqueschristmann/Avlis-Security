export default function Contact() {
    return (
        <section className="py-32 bg-elephant-gray" id="contato">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 flex items-center gap-2">
                            <span className="size-2 bg-primary"></span> Contato
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-100 tracking-tighter uppercase italic mb-8 leading-tight">
                            Pronto para elevar seu<br />padrão de segurança?
                        </h3>
                        <p className="text-slate-400 mb-12 leading-relaxed font-light text-lg">
                            Nossa equipe de especialistas está pronta para desenhar uma solução personalizada para seus ativos mais valiosos.
                            Preencha o formulário e um consultor sênior entrará em contato.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                    <span className="material-symbols-outlined text-2xl">call</span>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Atendimento 24/7</p>
                                    <p className="text-slate-100 font-bold text-lg font-mono">0800 555 9000</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                    <span className="material-symbols-outlined text-2xl">mail</span>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">E-mail Corporativo</p>
                                    <p className="text-slate-100 font-bold text-lg font-mono">contato@avlis-security.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-10 lg:p-12 rounded-2xl border-white/5 shadow-2xl backdrop-blur-3xl">
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Nome Completo</label>
                                    <input
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder:text-slate-700 text-sm"
                                        placeholder="S. Operative Name"
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">E-mail Corporativo</label>
                                    <input
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder:text-slate-700 text-sm"
                                        placeholder="hq@company.com"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Setor Estratégico</label>
                                <input
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder:text-slate-700 text-sm"
                                    placeholder="Energy, Enterprise, Government..."
                                    type="text"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Mensagem</label>
                                <textarea
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder:text-slate-700 text-sm resize-none"
                                    placeholder="Brief description of your operational needs..."
                                    rows={4}
                                />
                            </div>
                            <button
                                className="w-full bg-primary text-background-dark py-5 rounded-xl font-bold tracking-[0.3em] uppercase transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(147,197,114,0.4)] text-xs active:scale-95"
                            >
                                Iniciar Solicitação
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
