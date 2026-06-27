import { useState, useEffect, useCallback } from 'react';
import edpGrupoImg from '../assets/EDP-Grupo.png';
import statkraftImg from '../assets/Complex-Sao-fernando.png';
import anemusImg from '../assets/2w-eolica.png';
import elawanImg from '../assets/Elawan-Macambiras.png';
import echoenergiaImg from '../assets/echoenergia.png';
import cpelImg from '../assets/copel.png';
import mpe from '../assets/Serra-do-tigre.png';
import vestas from '../assets/Vestas-do-Brasil.png';
import elera from '../assets/Elera.png';
import nordex from '../assets/Nordex.png';
import totalwind from '../assets/RNMacau.png';
import elawan2 from '../assets/Elawan.png';
import iberobras from '../assets/Iberobras.png';
import tsk from '../assets/TSK.png';
import fazenda from '../assets/fazenda-Itaueira.png';

type ClientStatus = 'ATIVO' | 'PARCEIROS ANTERIORES';

interface ClientSlide {
    client: string;
    projects: string[];
    status: ClientStatus;
    image: string;
    sector: string;
}

const slides: ClientSlide[] = [
    // ── ATIVOS ──────────────────────────────────────────────────────────────
    {
        client: 'EDP',
        projects: [
            'Complexo Eólico Baixa do Feijão I-IV',
            'Complexo Eólico JAU (Jericó-Umbuzeiro-Aroeira)',
            'Complexo Eólico Aventura I',
            'Complexo Eólico Monte Verde I-VI',
            'Usina Fotovoltaica Monte Verde Solar II, III, IV, V e VII',
            'Complexo Eólico Catanduba I-II',
            'Complexo Eólico Itaúna I-III & São Domingos I-V',
        ],
        status: 'ATIVO',
        sector: 'Cliente Ativo · Energia Eólica & Solar',
        image: edpGrupoImg,
    },
    {
        client: 'Statkraft',
        projects: [
            'Complexo Eólico Ventos de São Fernando I-IV',
            'Complexo Eólico Jerusalém I-VI & Boqueirão I-II',
        ],
        status: 'ATIVO',
        sector: 'Cliente Ativo · Energia Eólica',
        image: statkraftImg,
    },
    {
        client: 'Anemus Wind',
        projects: ['Complexo Eólico Anemus I-III'],
        status: 'ATIVO',
        sector: 'Cliente Ativo · Energia Eólica',
        image: anemusImg,
    },
    {
        client: 'Elawan',
        projects: [
            'Parque Eólico Macambira I',
            'Parque Eólico Macambira II',
        ],
        status: 'ATIVO',
        sector: 'Cliente Ativo · Energia Eólica',
        image: elawanImg,
    },
    {
        client: 'Fazenda Itaueira',
        projects: ['Viveiro de Camarões Itaueira'],
        status: 'ATIVO',
        sector: 'Cliente Ativo · Aquicultura',
        image: fazenda,
    },
    // ── ANTECESSORES ────────────────────────────────────────────────────────
    {
        client: 'Echoenergia (Grupo Equatorial)',
        projects: [
            'Complexo Eólico João Câmara (Cabeço Preto)',
            'Complexo Eólico Lagoa Nova',
            'Complexo Eólico Pedra Rajada I-II',
            'Complexo Eólico Pedra do Reino I-III',
            'Complexo Eólico Serra do Mel I',
            'Complexo Eólico Serra do Mel II',
        ],
        status: 'PARCEIROS ANTERIORES',
        sector: 'PARCEIROS ANTERIORES · Energia Eólica',
        image: echoenergiaImg,
    },
    {
        client: 'COPEL',
        projects: [
            'Complexo Eólico Aventura II-V',
            'Complexo Eólico Santa Rosa Mundo Novo I-VI',
        ],
        status: 'PARCEIROS ANTERIORES',
        sector: 'PARCEIROS ANTERIORES · Energia Eólica',
        image: cpelImg,
    },
    {
        client: 'MPE Engenharia',
        projects: ['Complexo Eólico Serra do Tigre Sul'],
        status: 'PARCEIROS ANTERIORES',
        sector: 'PARCEIROS ANTERIORES · Energia Eólica',
        image: mpe,
    },
    {
        client: 'Vestas do Brasil',
        projects: [
            'Complexo Eólico Cumaru',
            'Complexo Eólico Rio dos Ventos',
        ],
        status: 'PARCEIROS ANTERIORES',
        sector: 'PARCEIROS ANTERIORES · Energia Eólica',
        image: vestas,
    },
    {
        client: 'Elera',
        projects: ['Complexo Eólico Seridó'],
        status: 'PARCEIROS ANTERIORES',
        sector: 'PARCEIROS ANTERIORES · Energia Eólica',
        image: elera,
    },
    {
        client: 'Nordex',
        projects: [
            'Complexo Eólico Jandaíra',
            'Parque Eólico Passagem',
        ],
        status: 'PARCEIROS ANTERIORES',
        sector: 'PARCEIROS ANTERIORES · Energia Eólica',
        image: nordex,
    },
    {
        client: 'TOTAL WIND BRASIL',
        projects: ['Complexo Eólico Macau'],
        status: 'PARCEIROS ANTERIORES',
        sector: 'PARCEIROS ANTERIORES · Energia Eólica',
        image: totalwind,
    },
    {
        client: 'Elawan',
        projects: ['Parque Eólico Pedra do Reino IV'],
        status: 'PARCEIROS ANTERIORES',
        sector: 'PARCEIROS ANTERIORES · Energia Eólica',
        image: elawan2,
    },
    {
        client: 'Iberobras',
        projects: [
            'Parque Eólico Calango 6',
            'Parque Eólico Santana 1 e 2',
            'Parque Eólico Santa Luzia',
        ],
        status: 'PARCEIROS ANTERIORES',
        sector: 'PARCEIROS ANTERIORES · Energia Eólica',
        image: iberobras,
    },
    {
        client: 'TSK',
        projects: [
            'Parque Eólico Aventura III',
            'Parque Eólico João Câmara',
        ],
        status: 'PARCEIROS ANTERIORES',
        sector: 'PARCEIROS ANTERIORES · Energia Eólica',
        image: tsk,
    },
];

export default function Presence() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState<'next' | 'prev'>('next');

    const goto = useCallback(
        (index: number, dir: 'next' | 'prev') => {
            if (animating) return;
            setDirection(dir);
            setAnimating(true);
            setTimeout(() => {
                setCurrent(index);
                setAnimating(false);
            }, 450);
        },
        [animating],
    );

    const prev = () => goto((current - 1 + slides.length) % slides.length, 'prev');
    const next = () => goto((current + 1) % slides.length, 'next');

    // Auto-advance every 6 s
    useEffect(() => {
        const id = setInterval(() => {
            goto((current + 1) % slides.length, 'next');
        }, 6000);
        return () => clearInterval(id);
    }, [current, goto]);

    // Keyboard navigation
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    });

    const slide = slides[current];

    const slideClass = animating
        ? direction === 'next'
            ? 'opacity-0 translate-x-[2%]'
            : 'opacity-0 -translate-x-[2%]'
        : 'opacity-100 translate-x-0';

    return (
        <section className="py-32 bg-background-dark relative overflow-hidden" id="presenca">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-4 flex items-center justify-center gap-2">
                        <span className="size-2 bg-primary"></span> Presença Estratégica
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase italic">
                        Atuação & Clientes
                    </h3>
                </div>

                {/* Carousel */}
                <div className="relative group">
                    {/* Main Card */}
                    <div
                        className="relative glass-card rounded-2xl overflow-hidden border-primary/20 backdrop-blur-xl"
                        style={{ minHeight: '320px', aspectRatio: 'auto' }}
                    >
                        {/* Background image */}
                        <img
                            key={`img-${current}`}
                            className={`w-full h-full object-cover grayscale opacity-40 absolute inset-0 transition-all duration-500 ease-out group-hover:scale-105 ${slideClass}`}
                            src={slide.image}
                            alt={slide.client}
                            loading="lazy"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-background-dark/70 via-transparent to-transparent"></div>

                        {/* Status badge top-right */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 flex items-center gap-2 z-10">
                            <span
                                className={`text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 border font-mono ${slide.status === 'ATIVO'
                                    ? 'border-primary/50 text-primary bg-primary/10'
                                    : 'border-slate-500/50 text-slate-400 bg-slate-800/40'
                                    }`}
                            >
                                {slide.status === 'ATIVO' ? (
                                    <span className="flex items-center gap-2">
                                        <span className="size-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#93C572]"></span>
                                        ATIVO
                                    </span>
                                ) : (
                                    'PARCEIROS ANTERIORES'
                                )}
                            </span>
                        </div>

                        {/* Content */}
                        <div
                            className={`absolute bottom-0 left-0 right-0 p-5 md:p-12 transition-all duration-500 ease-out ${slideClass}`}
                        >
                            {/* Sector tag */}
                            <div className="text-primary text-[9px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-3 border-l-2 border-primary pl-3 md:pl-4 font-mono">
                                {slide.sector}
                            </div>

                            {/* Client name */}
                            <h4 className="text-2xl md:text-5xl font-bold text-white uppercase italic tracking-tighter mb-4 leading-none">
                                {slide.client}
                            </h4>

                            {/* Projects list — limit on mobile */}
                            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2">
                                {slide.projects.slice(0, window.innerWidth < 640 ? 2 : slide.projects.length).map((p, i) => (
                                    <span
                                        key={i}
                                        className="text-[9px] md:text-[10px] text-slate-300 border border-white/10 bg-white/5 px-2 md:px-2.5 py-1 font-mono tracking-wider leading-tight"
                                    >
                                        {p}
                                    </span>
                                ))}
                                {window.innerWidth < 640 && slide.projects.length > 2 && (
                                    <span className="text-[9px] text-slate-500 border border-white/10 bg-white/5 px-2 py-1 font-mono">
                                        +{slide.projects.length - 2} mais
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-3 mt-6 z-20">
                        {/* Prev button */}
                        <button
                            onClick={prev}
                            aria-label="Slide anterior"
                            className="size-11 md:size-14 bg-background-dark border border-primary/30 flex items-center justify-center hover:bg-primary text-primary hover:text-background-dark transition-all shadow-2xl focus:outline-none"
                            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                        >
                            <span className="material-symbols-outlined font-bold text-base md:text-xl">chevron_left</span>
                        </button>

                        {/* Counter */}
                        <div className="px-5 md:px-10 py-3 bg-background-dark border border-primary/20 text-xs font-mono text-primary tracking-[0.4em] md:tracking-[0.6em] flex items-center gap-3 md:gap-6 rounded-sm shadow-xl select-none">
                            <span className="opacity-40 font-bold">{String(current + 1).padStart(2, '0')}</span>
                            <div className="w-10 md:w-16 h-[1px] bg-primary/30 relative overflow-hidden">
                                <div
                                    className="h-full bg-primary transition-all duration-500 ease-out"
                                    style={{ width: `${((current + 1) / slides.length) * 100}%` }}
                                ></div>
                            </div>
                            <span className="font-bold">{String(slides.length).padStart(2, '0')}</span>
                        </div>

                        {/* Next button */}
                        <button
                            onClick={next}
                            aria-label="Próximo slide"
                            className="size-11 md:size-14 bg-background-dark border border-primary/30 flex items-center justify-center hover:bg-primary text-primary hover:text-background-dark transition-all shadow-2xl focus:outline-none"
                            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                        >
                            <span className="material-symbols-outlined font-bold text-base md:text-xl">chevron_right</span>
                        </button>
                    </div>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-1.5 mt-12 flex-wrap">
                        {slides.map((s, i) => (
                            <button
                                key={i}
                                onClick={() => goto(i, i > current ? 'next' : 'prev')}
                                aria-label={`Ir para ${s.client}`}
                                className={`transition-all duration-300 focus:outline-none ${i === current
                                    ? 'w-8 h-1.5 bg-primary shadow-[0_0_8px_#93C572]'
                                    : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 max-w-4xl mx-auto justify-center">
                    {[
                        { value: '24/7', label: 'Monitoramento' },
                        { value: '15+', label: 'Parques Ativos' },
                        { value: '500+', label: 'Ativos Protegidos' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center border-t border-primary/10 pt-10 group hover:border-primary/40 transition-colors">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display italic transition-colors group-hover:text-primary">
                                {stat.value}
                            </div>
                            <div className="text-[10px] text-slate-500 tracking-[0.2em] uppercase font-bold">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
