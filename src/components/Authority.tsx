import dominio from '../assets/domínio.png';
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
                            src={dominio}
                        />
                        <div className="absolute top-0 right-0 glass-card px-8 py-5 rounded-bl-3xl rounded-tr-2xl z-20 border-l border-b border-primary/20 backdrop-blur-2xl">
                            <span className="text-primary font-bold text-xl tracking-tighter font-display italic">AVLIS COMPANY</span>
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

                    <p className="text-slate-400 text-lg leading-relaxed font-light text-justify">
                        A AVLIS COMPANY não é apenas uma empresa de segurança; somos o arquétipo da proteção inabalável. Por meio de inteligência tática avançada, presença operacional qualificada e tecnologia integrada, dominamos o ambiente operacional para entregar segurança, controle e confiança aos nossos parceiros.

Somos um grupo empresarial especializado na proteção, organização e suporte operacional de ambientes corporativos, condominiais, industriais e estratégicos. Nossa atuação ocorre de forma integrada por meio da Avlis Service, responsável pelos serviços de portaria, recepção, controle de acesso físico e remoto, monitoramento, implantação, instalação e manutenção de sistemas eletrônicos de segurança e controle de acesso, e da Avlis Segurança Privada, especializada na vigilância patrimonial e na proteção de patrimônios de terceiros.

Nossa estrutura combina profissionais capacitados, tecnologia de ponta, padronização de processos e acompanhamento operacional contínuo, garantindo rastreabilidade, eficiência e respostas rápidas às demandas de cada operação. Atuamos com foco na prevenção de riscos, no fortalecimento da segurança patrimonial e na manutenção da ordem operacional, proporcionando aos nossos clientes um ambiente mais seguro, organizado e produtivo.

Mais do que prestar serviços, construímos soluções estratégicas capazes de fortalecer a imagem institucional de nossos clientes, reduzir vulnerabilidades e criar operações sólidas, confiáveis e preparadas para os desafios do presente e do futuro. Na AVLIS COMPANY, proteção não é apenas uma atividade: é um compromisso permanente com a excelência, a disciplina e a segurança inabalável.

                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="glass-card p-8 rounded-xl group transition-all duration-500 hover:glass-card-hover border-primary/10">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">psychology</span>
                                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Inteligência</h4>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed text-justify">Análise neural preditiva em tempo real com processamento de borda.</p>
                        </div>

                        <div className="glass-card p-8 rounded-xl group transition-all duration-500 hover:glass-card-hover border-primary/10">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">verified_user</span>
                                <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em]">Protocolos</h4>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed text-justify">Rigor militar em cada camada operacional.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
