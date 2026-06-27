import missaoImg from '../assets/missao.jpg';
import portfolioZip from '../assets/zip/Pasta-Anexo-para-Portfolio.zip';

export default function About() {
    return (
        <section className="py-32 relative overflow-hidden bg-elephant-gray" id="sobre">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="aspect-square glass-card rounded-2xl overflow-hidden relative">
                        <img
                            className="w-full h-full object-cover grayscale opacity-80"
                            alt="Missão e Valores da Empresa"
                            src={missaoImg}
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-colors group-hover:bg-primary/5"></div>
                    </div>
                    <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl hidden md:block border border-primary/20 backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] group hover:scale-105 transition-all duration-500 overflow-hidden z-20">
                        {/* Decorative background glow */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10 group-hover:bg-primary/30 transition-colors"></div>
                        
                        <div className="flex items-start gap-5 relative z-10">
                            <div className="size-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors">
                                <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">military_tech</span>
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-white mb-2 font-display italic tracking-tighter flex items-end gap-1">
                                    1<span className="text-primary text-4xl">º</span>
                                </div>
                                <div className="text-[11px] text-primary tracking-[0.2em] uppercase font-bold mb-1">
                                    Em Eficiência
                                </div>
                                <div className="text-[9px] text-slate-400 tracking-widest uppercase">
                                    Operacional
                                </div>
                            </div>
                        </div>
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
                           Nosso objetivo é entregar aos clientes uma estrutura de serviços capaz de proteger patrimônios, controlar acessos, monitorar eventos, apoiar operações e garantir maior organização nas rotinas diárias.
Para isso, atuamos com equipes orientadas, procedimentos padronizados, uso adequado da tecnologia e acompanhamento constante das atividades executadas, buscando reduzir riscos, prevenir ocorrências, melhorar a comunicação operacional e gerar evidências claras da prestação dos serviços.
Trabalhamos para que cada cliente tenha mais tranquilidade, previsibilidade e confiança na gestão da sua segurança, seja por meio da presença física dos nossos profissionais, seja por meio da operação remota, dos sistemas eletrônicos ou da integração entre todos esses recursos.

                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="border-l-2 border-primary pl-8 transition-all hover:pl-10">
                                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-4">Missão</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">Nossa missão é oferecer soluções integradas em segurança patrimonial, portaria, controle de acesso, recepção, monitoramento e sistemas eletrônicos, unindo pessoas, tecnologia e procedimentos bem definidos para proteger patrimônios, organizar fluxos e apoiar a rotina operacional dos nossos clientes.
Atuamos com responsabilidade, presença, disciplina e atenção aos detalhes, entendendo que cada acesso controlado, cada ocorrência registrada, cada equipamento funcionando e cada colaborador bem orientado fazem parte de um compromisso maior: cuidar do ambiente do cliente com seriedade, respeito e confiabilidade.
</p>
                            </div>
                            <div className="border-l-2 border-primary pl-8 transition-all hover:pl-10">
                                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-4">Visão</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">Ser reconhecido como um grupo empresarial de referência na prestação de serviços de segurança patrimonial, controle de acesso e soluções operacionais integradas, destacando-se pela qualidade da execução, pela organização documental, pela postura das equipes e pela capacidade de unir atendimento humano e tecnologia de forma eficiente.
Queremos ser lembrados não apenas como fornecedores, mas como parceiros estratégicos dos nossos clientes, contribuindo para ambientes mais seguros, controlados, produtivos e bem assistidos.
</p>
                            </div>
                        </div>
                        
                        <div className="pt-6">
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase italic leading-tight mb-10">
                     Acesse nosso Acervo Técnico-Operacional:
                    </h3>
                            
                            <p className="text-slate-400 text-lg leading-relaxed font-light">
                            Conheça os documentos que estruturam nossas rotinas, procedimentos, descrições de atividades, normas internas, código de ética e padrões operacionais aplicados aos serviços de segurança patrimonial, portaria, controle de acesso, monitoramento e sistemas eletrônicos de segurança e controle de acesso.
                        </p>
                            <a
                                href={portfolioZip}
                                download="Acervo_Tecnico_Avlis.zip"
                                className="inline-flex mt-6 items-center gap-3 bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 hover:border-primary px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all group"
                            >
                                <svg className="size-4 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Baixar Acervo Técnico (.zip)
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
