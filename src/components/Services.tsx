import icone1 from '../assets/icone1.png';
import icone2 from '../assets/icone2.png';

export default function Services() {
    const services = [
        {
            title: 'Segurança Patrimonial',
            subtitle: 'Vigilância armada, desarmada e rondas operacionais',
            description: 'Atuação voltada à proteção do patrimônio, prevenção de ocorrências, controle de perímetro e apoio à segurança de pessoas, instalações e ativos. Os serviços podem ser executados por meio de vigilância armada, vigilância desarmada, postos fixos, rondas internas, rondas externas e acompanhamento operacional conforme a necessidade do cliente.',
            includes: 'Vigilância patrimonial, controle preventivo, rondas programadas, comunicação de ocorrências, apoio em situações atípicas e preservação da ordem no ambiente.',
            icon: <img src={icone2} alt="Segurança Patrimonial" className="size-full object-contain" />,
        },
        {
            title: 'Portaria e Controle de Acesso',
            subtitle: 'Controle físico de pessoas, veículos, visitantes e prestadores',
            description: 'Serviço destinado à organização e controle da entrada e saída de pessoas, veículos, visitantes, fornecedores e prestadores de serviço. A atuação da portaria contribui para a segurança, rastreabilidade e fluidez da rotina do cliente, garantindo que os acessos ocorram conforme autorizações e procedimentos definidos.',
            includes: 'Identificação, autorização de acesso, registro de entrada e saída, controle de crachás, controle de veículos, orientation ao público e comunicação com responsáveis internos.',
            icon: <img src={icone1} alt="Portaria e Controle" className="size-full object-contain" />,
        },
        {
            title: 'Controle de Acesso Remoto',
            subtitle: 'Operação à distância com apoio de tecnologia',
            description: 'Solução voltada ao controle de acessos por meio de sistemas eletrônicos, câmeras, interfones, softwares, portões automatizados, cancelas e dispositivos de liberação remota. Permite maior controle, registro e acompanhamento dos acessos, mesmo sem a presença física constante de um profissional no local.',
            includes: 'Liberação remota, validação por imagem ou sistema, registro de eventos, apoio à portaria remota, controle de acessos autorizados e comunicação de tentativas indevidas.',
            icon: <img src={icone1} alt="Controle Remoto" className="size-full object-contain" />,
        },
        {
            title: 'Recepção e Atendimento',
            subtitle: 'Atendimento profissional, cordial e organizado',
            description: 'Serviço voltado ao primeiro contato com visitantes, clientes, colaboradores e fornecedores. A recepção atua como ponto de apoio institucional, promovendo atendimento cordial, organização do fluxo de pessoas, direcionamento correto e suporte administrativo básico conforme a rotina do cliente.',
            includes: 'Atendimento presencial, atendimento telefônico, recepção de visitantes, direcionamento interno, controle de correspondências, apoio administrativo e padronização da comunicação.',
            icon: <img src={icone1} alt="Recepção" className="size-full object-contain" />,
        },
        {
            title: 'Monitoramento Eletrônico',
            subtitle: 'Acompanhamento de imagens, alarmes e eventos operacionais',
            description: 'Atuação voltada ao acompanhamento de sistemas eletrônicos de segurança, com foco na identificação de movimentações atípicas, falhas, alarmes, acessos irregulares e eventos que demandem comunicação ou acionamento. O monitoramento fortalece a prevenção e amplia a capacidade de resposta diante de ocorrências.',
            includes: 'Monitoramento de CFTV, alarmes, sensores, eventos de acesso, registros operacionais, comunicação de ocorrências e acionamento de responsáveis conforme procedimento definido.',
            icon: <img src={icone1} alt="Monitoramento" className="size-full object-contain" />,
        },
        {
            title: 'Sistemas de Segurança Eletrônica',
            subtitle: 'Implantação, instalação e configuração de soluções tecnológicas',
            description: 'Serviços técnicos voltados à implantação de sistemas eletrônicos de segurança, incluindo CFTV, alarmes, sensores, controle de acesso, leitores, fechaduras, portões automatizados, cancelas e softwares de operação. A solução pode ser aplicada em empresas, condomínios, indústrias, áreas comerciais e ambientes remotos.',
            includes: 'Câmeras, DVR/NVR, alarmes, sensores, controle de acesso, biometria, reconhecimento facial, TAG veicular, portões, cancelas, interfones, videoporteiros e softwares de gestão.',
            icon: <img src={icone1} alt="Sistemas de Segurança" className="size-full object-contain" />,
        },
        {
            title: 'Manutenção Preventiva e Corretiva',
            subtitle: 'Suporte técnico para continuidade e confiabilidade dos sistemas',
            description: 'Serviço destinado à conservação, correção e melhoria do funcionamento dos equipamentos e sistemas instalados. A manutenção preventiva reduz falhas e aumenta a vida útil dos dispositivos, enquanto a manutenção corretiva atua na solução de problemas, indisponibilidades e falhas técnicas identificadas.',
            includes: 'Testes de funcionamento, ajustes técnicos, correção de falhas, substituição de componentes autorizados, verificação de conectividade, testes de gravação, avaliação de portões e cancelas e emissão de relatório técnico.',
            icon: <img src={icone1} alt="Manutenção" className="size-full object-contain" />,
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
                        <span className="size-2 bg-primary"></span> Possibilidades
                    </h2>
                    <h3 className="text-5xl font-bold text-white tracking-tighter uppercase italic mb-6">Nossas Soluções Operacionais</h3>
                    <p className="text-slate-400 leading-relaxed font-light">
                        A Avlis Company oferece soluções integradas em segurança patrimonial, portaria, controle de acesso, recepção, monitoramento e sistemas eletrônicos de segurança, unindo profissionais capacitados, tecnologia, padronização de processos e acompanhamento operacional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="glass-card p-8 rounded-2xl border-l-2 border-primary relative group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col min-h-[400px]"
                        >
                            <div className="absolute top-4 right-4 size-16 opacity-80 group-hover:opacity-100 transition-opacity">
                                {service.icon}
                            </div>
                            
                            <h4 className="text-white font-bold uppercase text-lg tracking-widest mb-2 pr-12">{service.title}</h4>
                            <h5 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{service.subtitle}</h5>
                            
                            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>
                            
                            <div className="pt-6 border-t border-white/5">
                                <span className="text-white text-[10px] font-bold uppercase tracking-widest block mb-3">Inclui:</span>
                                <p className="text-slate-500 text-xs leading-relaxed italic">{service.includes}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
