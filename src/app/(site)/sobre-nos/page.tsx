import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proteção contra o fogo e contra as multas | Eben Engenharia",
  description:
    "A Eben Engenharia é uma empresa especializada em Projetos de Proteção Contra Incêndios (PPCI), dedicada a proteger vidas e patrimônios através de soluções técnicas inteligentes e atendimento humanizado.",
};

export default function SobreNos() {
  return (
    <>
      {/* Top Blue Banner */}
      <div className="bg-[#1a2b5f] py-3 text-center">
        <p className="text-white text-xs md:text-sm font-medium px-4">
          Proteger seu negócio do fogo e das multas não precisa ser complicado.
          Precisa ser Eben
        </p>
      </div>

      {/* Hero Image */}
      <section className="relative h-[35vh]">
        <Image
          src="/sobre-hero.png"
          alt="Sobre a Eben Engenharia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1a3f]/30"></div>
      </section>

      {/* About Text */}
      <section className="bg-[#eaeaea] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-[#1a2b5f] text-4xl md:text-5xl font-bold mb-10">
            Sobre nós
          </h1>

          <div className="space-y-6 text-gray-600 text-base leading-relaxed mb-12">
            <p>
              A Eben Engenharia foi fundada com o propósito de elevar o padrão
              de qualidade e atendimento em projetos de proteção contra
              incêndios. Reconhecendo a importância vital deste segmento para a
              preservação de vidas e patrimônios, nos dedicamos a oferecer
              soluções técnicas rigorosas com um diferencial: comunicação clara
              e relacionamentos verdadeiros.
            </p>
            <p>
              O nome Eben, do hebraico &quot;pedra&quot;, carrega profundo significado.
              Representa não apenas solidez e estabilidade, mas também o
              conceito de fundamento — aquilo sobre o qual se pode construir com
              segurança. Da mesma raiz vem Ebenezer (pedra de ajuda), evocando a
              ideia de suporte confiável. Esses conceitos definem nossa
              identidade: ser o alinhamento técnico e relacional sobre o qual
              nossos clientes edificam a proteção de seus empreendimentos.
            </p>
            <p>
              Integridade que sustenta cada decisão. Soluções que entregam
              resultados concretos. Segurança que protege vidas e patrimônios.
              Confiança que constrói parcerias duradouras.
            </p>
          </div>

          <Link
            href="https://wa.me/message/PEMSXHWV34TIB1"
            target="_blank"
            className="inline-block bg-[#c7962e] text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-[#b5861f] transition-colors"
          >
            Fale com um especialista
          </Link>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="bg-[#0f1f4b] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-16">
            Nossos Valores
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <h3 className="text-lg font-bold tracking-wider mb-4">
                INTEGRIDADE
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nosso foco é entregar resultados: projetos aprovados e
                edificações em conformidade. Aplicamos conhecimento técnico com
                objetividade, eficiência e compromisso com o prazo.
              </p>
            </div>
            <div className="text-center text-white">
              <h3 className="text-lg font-bold tracking-wider mb-4">
                CONFIANÇA
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Atuamos com ética e rigor técnico absoluto, sempre alinhados às
                normas e à segurança real. Somos transparentes em prazos,
                processos e responsabilidades, porque confiança se constrói com
                verdade.
              </p>
            </div>
            <div className="text-center text-white">
              <h3 className="text-lg font-bold tracking-wider mb-4">
                SEGURANÇA
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Valorizamos parcerias duradouras, onde o cliente sabe que pode
                contar conosco. Na aprovação de um projeto, em uma dúvida
                técnica futura, em uma ampliação planejada, sempre com
                consistência e suporte.
              </p>
            </div>
            <div className="text-center text-white">
              <h3 className="text-lg font-bold tracking-wider mb-4">
                SOLUÇÃO
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cada decisão técnica tem um único propósito: proteger vidas e
                patrimônios. Tratamos este compromisso com a seriedade e
                responsabilidade que ele exige, porque sabemos o impacto do
                nosso trabalho.
              </p>
            </div>
          </div>

          {/* Value Labels */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            <span className="text-white font-bold tracking-widest text-sm border border-white/20 px-4 py-2">
              INTEGRIDADE
            </span>
            <span className="text-white font-bold tracking-widest text-sm border border-white/20 px-4 py-2">
              CONFIANÇA
            </span>
            <span className="text-white font-bold tracking-widest text-sm border border-white/20 px-4 py-2">
              SEGURANÇA
            </span>
            <span className="text-white font-bold tracking-widest text-sm border border-white/20 px-4 py-2">
              SOLUÇÃO
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
