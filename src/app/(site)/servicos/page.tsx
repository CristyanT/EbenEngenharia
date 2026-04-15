import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seu laudo aprovado e seu alvará em dia! | Eben Engenharia",
  description:
    "A Eben Engenharia oferece elaboração de Projetos de Bombeiros (PPCI e AVCB / CLCB) para garantir a segurança do seu patrimônio. Proteger seu negócio do fogo e das multas não precisa ser complicado. Precisa ser Eben!",
};

export default function Servicos() {
  const servicos = [
    {
      titulo: "PPCI - Projeto de Prevenção Contra Incêndio",
      texto:
        "Elaboração de Projeto de Prevenção Contra Incêndio, trazendo adequação personalizada da edificação com as Instruções Técnicas do Estado, garantindo segurança e regularização.",
    },
    {
      titulo: "Emissão de Alvarás - AVCB / CLCB",
      texto:
        "Adequação da edificação para emissão de Auto de Vistoria do Corpo de Bombeiros ou Certificado de Licenciamento do Corpo de Bombeiros.",
    },
    {
      titulo: "Renovação de Alvarás - AVCB / CLCB",
      texto:
        "Auxílio para regularização e renovação dos alvarás de funcionamento, identificando pendências no Corpo de Bombeiros e traçando planos para aprovação.",
    },
    {
      titulo: "Pré-vistoria do Corpo de Bombeiros",
      texto:
        "Inspeção e acompanhamento prévio para verificação dos sistemas instalados a fim de auxiliar na aprovação da vistoria do Corpo de Bombeiros.",
    },
    {
      titulo: "Consultorias",
      texto:
        "Consultoria técnica especializada para emissão e renovação de laudos dos Bombeiros, correta forma de elaboração de PPCI e outros temas sobre prevenção contra incêndios.",
    },
  ];

  return (
    <>
      {/* Hero Image Banner */}
      <section className="relative h-[45vh]">
        <Image
          src="/hero-bg.png"
          alt="Serviços contra incêndio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#0a1a3f]/50"></div>
      </section>

      {/* Title Bar */}
      <section className="bg-[#1a2b5f] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8">
            Atuamos em toda a prevenção contra incêndio, da elaboração do
            projeto preventivo até a regularização junto ao Corpo de Bombeiros.
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

      {/* Services List */}
      <section className="bg-[#eaeaea] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            {servicos.map((servico, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-[#1a2b5f] text-xl font-bold mb-3">
                  {servico.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {servico.texto}
                </p>
                <Link
                  href="https://wa.me/message/PEMSXHWV34TIB1"
                  target="_blank"
                  className="inline-block bg-[#1a2b5f] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-[#152450] transition-colors"
                >
                  Fale com um especialista
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
