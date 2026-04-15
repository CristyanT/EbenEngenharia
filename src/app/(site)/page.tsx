import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Bombeiros em ação"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0a1a3f]/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-8">
              Empresa especializada em{" "}
              <br className="hidden md:block" />
              Soluções Contra Incêndios
            </h1>

            <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              Garantimos a regularização do seu imóvel com total segurança e
              economia. Desenvolvemos projetos com agilidade e expertise,
              assegurando aprovação junto ao Corpo de Bombeiros.
            </p>

            <p className="text-gray-200 text-base md:text-lg mb-10">
              Proteger seu negócio do fogo e das multas não precisa ser
              complicado.{" "}
              <strong className="text-white font-bold">Precisa ser </strong>
              <span className="text-[#c7962e] font-bold">Eben</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/servicos"
                className="bg-[#1a2b5f] text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-[#152450] transition-colors"
              >
                Serviços
              </Link>
              <Link
                href="https://wa.me/message/PEMSXHWV34TIB1"
                target="_blank"
                className="bg-[#c7962e] text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-[#b5861f] transition-colors"
              >
                Fale com um especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== NOSSO PROCESSO ==================== */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[350px] md:h-[400px]">
              <Image
                src="/nosso-processo.png"
                alt="Nosso Processo"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <div>
              <h2 className="text-[#1a2b5f] text-3xl md:text-4xl font-bold mb-6">
                Nosso Processo
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Atendemos{" "}
                <strong className="text-gray-800">
                  empresários, investidores, administradores e proprietários
                </strong>{" "}
                que não podem correr riscos com{" "}
                <strong className="text-gray-800">
                  multas, embargos ou interdições.
                </strong>{" "}
                Nosso compromisso é entregar{" "}
                <strong className="text-gray-800">agilidade</strong>,
                conformidade{" "}
                <strong className="text-gray-800">técnica</strong> e total{" "}
                <strong className="text-gray-800">acompanhamento</strong> do
                processo.
              </p>
              <Link
                href="https://wa.me/message/PEMSXHWV34TIB1"
                target="_blank"
                className="inline-block bg-[#1a2b5f] text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-[#152450] transition-colors"
              >
                Fale com um especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PORQUE ESCOLHER A EBEN ==================== */}
      <section className="bg-[#0f1f4b] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-4">
            Porque escolher a{" "}
            <span className="text-[#c7962e]">Eben</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* INTEGRIDADE */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h4l2-3h6l2 3h4v13H3V6z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold tracking-wider mb-4 uppercase">
                INTEGRIDADE
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Atuamos com ética e rigor técnico absoluto, sempre alinhados às
                normas e à segurança real. Somos transparentes em prazos,
                processos e responsabilidades, porque confiança se constrói com
                verdade.
              </p>
            </div>

            {/* SOLUÇÃO */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold tracking-wider mb-4 uppercase">
                SOLUÇÃO
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Nosso foco é entregar resultados: projetos aprovados e
                edificações em conformidade. Aplicamos conhecimento técnico com
                objetividade, eficiência e compromisso com o prazo.
              </p>
            </div>

            {/* SEGURANÇA */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold tracking-wider mb-4 uppercase">
                SEGURANÇA
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Cada decisão técnica tem um único propósito: proteger vidas e
                patrimônios. Tratamos este compromisso com a seriedade e
                responsabilidade que ele exige, porque sabemos o impacto do
                nosso trabalho.
              </p>
            </div>

            {/* CONFIANÇA */}
            <div className="text-center text-white">
              <div className="flex justify-center mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold tracking-wider mb-4 uppercase">
                CONFIANÇA
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Valorizamos parcerias duradouras, onde o cliente sabe que pode
                contar conosco. Na aprovação de um projeto, em uma dúvida
                técnica futura, em uma ampliação planejada, sempre com
                consistência e suporte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INSTAGRAM ==================== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <h2 className="text-[#1a2b5f] text-2xl md:text-3xl font-bold">
              Siga-nos no Instagram{" "}
              <a
                href="https://instagram.com/ebenengenharia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c7962e] hover:underline"
              >
                @ebenengenharia
              </a>
            </h2>
            <a
              href="https://instagram.com/ebenengenharia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a2b5f]"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="bg-[#eaeaea] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#1a2b5f] text-2xl md:text-4xl font-light leading-relaxed mb-10">
            Proteger seu negócio do fogo e das multas não precisa ser
            complicado.{" "}
            <strong className="font-bold">Precisa ser </strong>
            <span className="text-[#c7962e] font-bold">Eben</span>
          </p>
          <Link
            href="https://wa.me/message/PEMSXHWV34TIB1"
            target="_blank"
            className="inline-block bg-[#c7962e] text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-[#b5861f] transition-colors"
          >
            Fale com um especialista
          </Link>
        </div>
      </section>
    </>
  );
}
