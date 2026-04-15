"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Compass,
  DraftingCompass,
  HardHat,
  Stamp,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Flame,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

import { HeroSection } from "@/components/ui/hero-section-2";

/* ─── Typing Effect ─── */
function TypingEffect({
  texts,
  className,
}: {
  texts: string[];
  className?: string;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const currentText = texts[currentTextIndex % texts.length];

  useEffect(() => {
    if (!isInView) return;
    if (charIndex < currentText.length) {
      const t = setTimeout(() => {
        setDisplayedText((p) => p + currentText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setCurrentTextIndex((p) => (p + 1) % texts.length);
      }, 2200);
      return () => clearTimeout(t);
    }
  }, [charIndex, currentText, isInView, texts]);

  return (
    <div ref={containerRef} className={className}>
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block h-[1em] w-[3px] rounded-sm bg-[#c7962e] align-middle"
      />
    </div>
  );
}

/* ─── Animated Counter ─── */
function Counter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ─── Animation Variants ─── */
const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ============================================================
   MAIN LP — LIGHT THEME (Matching ebenengenharia.com.br)
   ============================================================ */
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 overflow-x-hidden selection:bg-[#c7962e]/20">
      <HeroSection
        logo={{
          url: "/logosvg.svg",
          alt: "Eben Engenharia",
        }}
        slogan="PPCI · AVCB · CLCB"
        title={
          <>
            Especialista em <br />
            <span className="text-[#c7962e]">Soluções Contra Incêndio</span>
          </>
        }
        typingEffect={
          <TypingEffect
            texts={[
              "Recebeu notificação dos Bombeiros?",
              "Medo de multas e interdições?",
              "Não sabe como regularizar o AVCB?",
              "Projeto anterior foi rejeitado?",
            ]}
          />
        }
        subtitle="Garantimos a regularização do seu imóvel com total segurança e economia. Desenvolvemos projetos com agilidade e expertise, assegurando aprovação junto ao Corpo de Bombeiros."
        callToAction={{
          text: "Agendar Visita Técnica",
          href: "#classificacao",
        }}
        backgroundImage="/hero.png"
        contactInfo={{
          website: "ebenengenharia.com.br",
          phone: "(11) 96417-8455",
          address: "Atendemos Grande SP",
        }}
      />

      {/* ─── SEÇÃO 2: MÉTODO EBEN ─── */}
      <section className="py-20 sm:py-28 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="text-[#c7962e] text-xs font-bold tracking-[0.3em] uppercase block mb-4"
            >
              Uma regularização inteligente
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2b5f]"
            >
              O Método{" "}
              <span className="text-[#c7962e]">EBEN</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* 01: Exploração (Wide) */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-2 group relative bg-[#f8f9fb] border border-gray-100 overflow-hidden rounded-[2rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1a2b5f]/5 hover:-translate-y-1"
            >
              <span className="absolute -bottom-10 -right-4 text-[12rem] font-black text-[#1a2b5f]/[0.02] leading-none transition-transform duration-700 group-hover:scale-110">
                01
              </span>
              <div className="relative z-10 w-full md:w-3/4">
                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#1a2b5f] transition-colors duration-500">
                  <Compass className="w-8 h-8 text-[#1a2b5f] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1a2b5f] mb-4 tracking-tight">
                  Exploração
                </h3>
                <p className="text-base text-gray-500 leading-relaxed">
                  Fazemos o levantamento completo do imóvel, atividade e histórico de regularização. Classificamos a edificação e definimos o enquadramento correto (CLCB ou AVCB) conforme exigências do Corpo de Bombeiros.
                </p>
              </div>
            </motion.div>

            {/* 02: Base Técnica (Square) */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-1 group relative bg-[#1a2b5f] overflow-hidden rounded-[2rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1a2b5f]/10 hover:-translate-y-1 text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b5f] to-[#0f1f4b] opacity-100 z-0"></div>
              {/* Engineering Grid Pattern Overlay */}
              <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

              <span className="absolute -top-6 -right-6 text-[10rem] font-black text-white/[0.04] leading-none transition-transform duration-700 group-hover:rotate-12">
                02
              </span>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-8">
                    <DraftingCompass className="w-8 h-8 text-[#c7962e]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">
                    Base Técnica
                  </h3>
                </div>
                <p className="text-sm text-blue-100/70 leading-relaxed font-light">
                  Mapeamos as exigências legais e desenvolvemos o projeto personalizado. Aproveitamos medidas existentes dentro das normas, gerando economia real.
                </p>
              </div>
            </motion.div>

            {/* 03: Execução (Square) */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-1 group relative bg-[#f8f9fb] border border-gray-100 overflow-hidden rounded-[2rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1a2b5f]/5 hover:-translate-y-1"
            >
              <span className="absolute -bottom-8 -left-8 text-[10rem] font-black text-[#1a2b5f]/[0.02] leading-none transition-transform duration-700 group-hover:-translate-y-4">
                03
              </span>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#c7962e] transition-colors duration-500">
                    <HardHat className="w-8 h-8 text-[#1a2b5f] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-black text-[#1a2b5f] mb-4 tracking-tight">
                    Execução
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Emitimos a ART e protocolamos projeto e empresa no Corpo de Bombeiros, com segurança jurídica e técnica.
                </p>
              </div>
            </motion.div>

            {/* 04: Regularizado (Wide) */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-2 group relative bg-[#c7962e] overflow-hidden rounded-[2rem] p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c7962e]/20 hover:-translate-y-1 text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#c7962e] to-[#b5861f] opacity-100 z-0"></div>
              <span className="absolute -bottom-10 right-4 text-[12rem] font-black text-black/[0.05] leading-none transition-transform duration-700 group-hover:scale-110">
                04
              </span>

              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                <div className="w-12 h-12 rounded-full bg-[#1a2b5f] flex items-center justify-center shadow-md text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" /></svg>
                </div>
              </div>

              <div className="relative z-10 w-full md:w-3/4 flex flex-col justify-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-8 shadow-sm">
                  <Stamp className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight text-white">
                  Regularizado!
                </h3>
                <p className="text-base text-yellow-50/80 leading-relaxed font-medium">
                  Realizamos a conferência técnica completa entre projeto e execução após instalação. Conduzimos até a aprovação final, garantindo emissão do alvará e regularização completa.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-200 pt-12"
          >
            {[
              { value: 100, suffix: "%", label: "Projetos Aprovados" },
              { value: 10, suffix: "+", label: "Anos de Experiência" },
              { value: 500, suffix: "+", label: "Clientes Atendidos" },
              { value: 24, suffix: "h", label: "Tempo de Resposta" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-black text-[#1a2b5f]">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── SEÇÃO 3: PROVA SOCIAL + CTA CORPORATIVO ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <motion.div variants={fadeUp} className="max-w-2xl">
                <span className="text-[#c7962e] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
                  Autoridade Comprovada
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2b5f] tracking-tight">
                  A tranquilidade de quem escolheu a Eben.
                </h2>
              </motion.div>
            </div>

            {/* Premium Testimonials (Staggered Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Featured Testimonial (Left Span) */}
              <motion.div
                variants={fadeUp}
                className="md:col-span-7 bg-[#f8f9fb] rounded-2xl p-10 sm:p-14 border border-gray-100 flex flex-col justify-between"
              >
                <div className="mb-8">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-5 h-5 text-[#c7962e]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <p className="text-xl sm:text-2xl text-[#1a2b5f] font-medium leading-relaxed tracking-tight">
                    "Estava pronto para expandir meu escritório, mas o seguro travou tudo quando não apresentei o AVCB da empresa. A Eben me livrou da burocracia e trouxe de volta tranquilidade jurídica e confiança para investir."
                  </p>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#1a2b5f] uppercase tracking-wider">Carlos Silva</div>
                  <div className="text-xs text-gray-500 mt-1">Diretor no Setor Financeiro</div>
                </div>
              </motion.div>

              {/* Smaller Testimonials (Right Span) */}
              <div className="md:col-span-5 flex flex-col gap-6">
                <motion.div
                  variants={fadeUp}
                  className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#1a2b5f]/20 transition-colors"
                >
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-light">
                    "Não fazia ideia de que precisava regularizar minha empresa e o medo de uma multa era gigante. A visita técnica gratuita da Eben mudou tudo. Eles assumiram a regularização completa com extrema segurança."
                  </p>
                  <div>
                    <div className="text-sm font-bold text-[#1a2b5f]">Rodrigo</div>
                    <div className="text-xs text-gray-400 mt-1">Empresário (Comércio)</div>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#1a2b5f]/20 transition-colors"
                >
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-light">
                    "Recebi notificação dos Bombeiros e não sabia por onde começar. Em poucos dias, o time de engenharia deles traçou o plano e cuidou de tudo até a emissão. Hoje durmo tranquila."
                  </p>
                  <div>
                    <div className="text-sm font-bold text-[#1a2b5f]">Fernanda</div>
                    <div className="text-xs text-gray-400 mt-1">Gestora de Clínica Estética</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SEÇÃO 4: FORMULÁRIO DE CAPTAÇÃO PREMIUM ─── */}
      <section
        id="classificacao"
        className="relative py-24 sm:py-32 overflow-hidden bg-[#0f1f4b]"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2b5f] to-[#0f1f4b] opacity-100 z-0"></div>
        {/* Minimalist geometry overlay */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c7962e]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Text & Entregáveis */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <motion.div variants={fadeUp} className="mb-10">
              <span className="inline-flex items-center gap-3 bg-[#c7962e]/10 border border-[#c7962e]/20 rounded-full px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#c7962e] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c7962e] mb-px animate-pulse"></span>
                Atendimento Prioritário
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                Não deixe para depois.<br />Agende sua Visita Técnica{" "}
                <span className="text-[#c7962e]">Gratuita</span>.
              </h2>
              <p className="text-blue-100/70 text-base leading-relaxed font-light max-w-lg">
                Enquanto muitos escritórios cobram caro para fazer uma análise superficial do seu estabelecimento, nós oferecemos uma consultoria presencial de alto nível sem custo.
              </p>
            </motion.div>

            {/* Entregáveis Verticais */}
            <motion.div variants={stagger} className="flex flex-col gap-6">
              {[
                {
                  title: "Levantamento Investigativo",
                  desc: "Visita presencial detalhada para mapeamento das estruturas existentes do seu imóvel.",
                },
                {
                  title: "Estudo de Viabilidade",
                  desc: "Definição exata do tipo de enquadramento (AVCB ou CLCB) junto aos Bombeiros.",
                },
                {
                  title: "Projeto & Orçamento",
                  desc: "Mapeamento rigoroso e apresentação de orçamento claro, pronto para execução.",
                },
              ].map((item, i) => (
                <motion.div
                  variants={fadeUp}
                  key={i}
                  className="flex items-start gap-5"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#c7962e]" />
                  </div>
                  <div className="pt-1">
                    <h4 className="text-white font-bold text-sm tracking-wide mb-1">
                      {item.title}
                    </h4>
                    <p className="text-blue-100/50 text-xs leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Form Component */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-3xl p-10 sm:p-14 shadow-2xl shadow-black/40 relative overflow-hidden">
              <div className="mb-10 relative z-10">
                <h3 className="text-2xl font-black text-[#1a2b5f] mb-3 tracking-tight">
                  Solicite seu agendamento
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  Nossa engenharia fará o contato imediato via WhatsApp para confirmar seu horário.
                </p>
              </div>

              <form className="relative z-10 flex flex-col gap-8">
                <div className="group">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 transition-colors group-focus-within:text-[#c7962e]">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Carlos Silva"
                    className="w-full bg-transparent border-b border-gray-200 text-[#1a2b5f] px-0 py-2.5 text-base placeholder:text-gray-300 focus:border-[#c7962e] focus:outline-none transition-colors"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 transition-colors group-focus-within:text-[#c7962e]">
                    WhatsApp (Celular)
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 90000-0000"
                    className="w-full bg-transparent border-b border-gray-200 text-[#1a2b5f] px-0 py-2.5 text-base placeholder:text-gray-300 focus:border-[#c7962e] focus:outline-none transition-colors"
                  />
                </div>
                <div className="group">
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 transition-colors group-focus-within:text-[#c7962e]">
                    Perfil do Estabelecimento
                  </label>
                  <input
                    type="text"
                    placeholder="Restaurante, Loja, Indústria, Clínica..."
                    className="w-full bg-transparent border-b border-gray-200 text-[#1a2b5f] px-0 py-2.5 text-base placeholder:text-gray-300 focus:border-[#c7962e] focus:outline-none transition-colors"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="group relative w-full bg-[#1a2b5f] text-white font-bold uppercase tracking-widest text-sm py-5 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#1a2b5f]/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      Agendar Visita Técnica
                    </span>
                    <div className="absolute inset-0 bg-[#0f1f4b] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                  <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-widest">Seus dados estão seguros. Não enviamos spam.</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER MÍNIMO ─── */}
      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-gray-400 mb-2">
            A Eben Engenharia é uma empresa devidamente registrada no CREA.{" "}
            <Link href="/" className="text-[#c7962e] hover:underline">
              Visite nosso site institucional →
            </Link>
          </p>
          <p className="text-[10px] text-gray-300">
            © 2026 Eben Engenharia. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* ─── WHATSAPP FLUTUANTE ─── */}
      <a
        href="https://wa.me/message/PEMSXHWV34TIB1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
