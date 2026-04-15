import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peça um orçamento, nós cuidaremos de tudo | Eben Engenharia",
  description:
    "Nosso foco é entregar resultados: projetos aprovados e edificações em conformidade. Aplicamos conhecimento técnico com objetividade, eficiência e compromisso com o prazo.",
};

export default function Contato() {
  return (
    <>
      {/* Hero Image + Title */}
      <section className="relative h-[30vh] flex items-center justify-center">
        <Image
          src="/sobre-hero.png"
          alt="Contato"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1a3f]/50"></div>
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-bold italic">
          Contato
        </h1>
      </section>

      {/* Contato Content */}
      <section className="bg-[#eaeaea] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Left - Contact Info */}
            <div>
              <h2 className="text-[#1a2b5f] text-2xl md:text-3xl font-bold mb-8">
                Fale com um de nossos especialistas
              </h2>

              <div className="space-y-4 text-gray-700 text-base">
                <p>projetos@ebenengenharia.com.br</p>
                <p>(11) 9 6417-8455</p>
                <p>Atendemos toda a Grande São Paulo</p>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <p className="text-gray-600 text-base mb-6">
                Peça um orçamento, nós cuidaremos de tudo.
              </p>
              <form className="bg-[#c7962e] p-8 rounded-2xl space-y-5">
                <div>
                  <label className="block text-[#1a2b5f] text-sm font-bold mb-1">
                    Nome*
                  </label>
                  <input
                    type="text"
                    placeholder="Nome e Sobrenome"
                    className="w-full px-4 py-3 rounded-md bg-white text-gray-800 text-sm border-none outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#1a2b5f] text-sm font-bold mb-1">
                    WhatsApp*
                  </label>
                  <input
                    type="tel"
                    placeholder="DDD + WhatsApp"
                    className="w-full px-4 py-3 rounded-md bg-white text-gray-800 text-sm border-none outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[#1a2b5f] text-sm font-bold mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Seu melhor email"
                    className="w-full px-4 py-3 rounded-md bg-white text-gray-800 text-sm border-none outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Se quiser, pode especificar o serviço que você deseja fazer conosco"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md bg-white text-gray-800 text-sm border-none outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#1a2b5f] text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-[#152450] transition-colors"
                >
                  Solicitar Orçamento
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
