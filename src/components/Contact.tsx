import { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        sector: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Utilizando o FormSubmit para envio direto de email (adaptável para qualquer email alterando a URL)
            const response = await fetch('https://formsubmit.co/ajax/comercial@avliscompany.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nome: formData.name,
                    Email: formData.email,
                    Setor: formData.sector,
                    Mensagem: formData.message,
                    _subject: 'Nova Solicitação de Contato - Site Avlis'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', sector: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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
                            Preencha o formulário ao lado ou entre em contato e um consultor sênior entrará em contato.
                        </p>

                        <div className="space-y-8">
                            <a href="https://wa.me/5584999726100" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer w-fit">
                                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                    <span className="material-symbols-outlined text-2xl">call</span>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">Atendimento 24/7</p>
                                    <p className="text-slate-100 font-bold text-lg font-mono transition-colors"> (084) 99972-6100 </p>
                                </div>
                            </a>

                            <a href="mailto:comercial@avliscompany.com" className="flex items-center gap-6 group cursor-pointer w-fit">
                                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                                    <span className="material-symbols-outlined text-2xl">mail</span>
                                </div>
                                <div>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">E-mail Corporativo</p>
                                    <p className="text-slate-100 font-bold text-lg font-mono transition-colors">comercial@avliscompany.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="glass-card p-10 lg:p-12 rounded-2xl border-white/5 shadow-2xl backdrop-blur-3xl min-h-[500px] flex flex-col justify-center">
                        {status === 'success' ? (
                            <div className="text-center space-y-6 animate-in fade-in duration-500">
                                <div className="size-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
                                </div>
                                <h4 className="text-3xl font-bold text-white uppercase italic">Mensagem Enviada!</h4>
                                <p className="text-slate-400 font-light leading-relaxed">
                                    Recebemos suas informações com sucesso. Um de nossos consultores entrará em contato em breve através do e-mail informado.
                                </p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 px-8 py-4 border border-primary text-primary rounded-xl font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-primary hover:text-background-dark transition-colors"
                                >
                                    Enviar Nova Mensagem
                                </button>
                            </div>
                        ) : (
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                {status === 'error' && (
                                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm text-center">
                                        Ocorreu um erro ao enviar. Tente novamente mais tarde.
                                    </div>
                                )}
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Nome Completo</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder:text-slate-700 text-sm"
                                            placeholder="Seu nome"
                                            type="text"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">E-mail Corporativo</label>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder:text-slate-700 text-sm"
                                            placeholder="email@empresa.com"
                                            type="email"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Setor Estratégico</label>
                                    <input
                                        name="sector"
                                        value={formData.sector}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder:text-slate-700 text-sm"
                                        placeholder="Indústria, Condomínio, Governo..."
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-2">Mensagem</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 text-slate-100 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none placeholder:text-slate-700 text-sm resize-none"
                                        placeholder="Descrição da sua necessidade operacional..."
                                        rows={4}
                                    />
                                </div>
                                <button
                                    disabled={status === 'loading'}
                                    className="w-full bg-primary text-background-dark py-5 rounded-xl font-bold tracking-[0.3em] uppercase transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(147,197,114,0.4)] text-xs active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <span className="size-4 border-2 border-background-dark/20 border-t-background-dark rounded-full animate-spin"></span>
                                            Processando...
                                        </>
                                    ) : 'Iniciar Solicitação'}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
