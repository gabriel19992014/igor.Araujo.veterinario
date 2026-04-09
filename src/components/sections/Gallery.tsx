"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const serviceShowcaseItems = [
  {
    src: "/images/gallery/Atendimento1.webp",
    alt: "Atendimento clínico veterinário",
    label: "Dog Loki",
  },
  {
    src: "/images/gallery/Atendimento2.webp",
    alt: "Atendimento clínico veterinário",
    label: "Dog Brutos",
  },
];

const galleryItems = [
  {
    src: "/images/gallery/Consulta_de_rotina.webp",
    alt: "Cachorro em consulta de rotina",
    label: "Consulta de rotina",
  },
  {
    src: "/images/gallery/Avaliacao_felina.webp",
    alt: "Gato em avaliação veterinária",
    label: "Avaliação felina",
  },
  {
    src: "/images/gallery/Retorno_acompanhado.webp",
    alt: "Tutor acompanhando retorno do pet",
    label: "Retorno acompanhado",
  },
  {
    src: "/images/gallery/Recuperacao_com_cuidado.webp",
    alt: "Pet recuperado após atendimento",
    label: "Recuperação com cuidado",
  },
];

export function Gallery() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = serviceShowcaseItems[activeServiceIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveServiceIndex((current) => (current + 1) % serviceShowcaseItems.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const goToPreviousService = () => {
    setActiveServiceIndex((current) =>
      current === 0 ? serviceShowcaseItems.length - 1 : current - 1,
    );
  };

  const goToNextService = () => {
    setActiveServiceIndex((current) => (current + 1) % serviceShowcaseItems.length);
  };

  return (
    <section id="galeria" className="bg-[var(--surface-2)] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Galeria</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink-900)] sm:text-4xl">
            Pets atendidos com carinho e atenção
          </h2>
          <p className="mt-3 text-[var(--ink-600)]">
            Prova visual de um atendimento humanizado para quem busca cuidado veterinário domiciliar de confiança em Manaus.
          </p>
        </div>

        <div className="mb-9 rounded-3xl border border-[var(--brand-blue-soft)] bg-white/85 p-3 shadow-[0_18px_56px_rgba(13,74,165,0.14)] sm:p-4">
          <div className="mb-3 flex items-end justify-between gap-4 px-1">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)]">Serviços em destaque</p>
              <p className="mt-1 text-xs font-semibold text-[var(--ink-500)]">Casos reais com troca automática</p>
            </div>
            <span className="rounded-full bg-[var(--surface-1)] px-2.5 py-1 text-[11px] font-semibold text-[var(--ink-600)]">
              {String(activeServiceIndex + 1).padStart(2, "0")} / {String(serviceShowcaseItems.length).padStart(2, "0")}
            </span>
          </div>

          <figure className="relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[1.4rem] border border-black/5 bg-[var(--surface-1)] shadow-[0_16px_36px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-[16/8] w-full">
              <Image
                key={activeService.src}
                src={activeService.src}
                alt={activeService.alt}
                fill
                sizes="(max-width: 640px) 92vw, 620px"
                loading="lazy"
                className="gallery-fade-in bg-white object-contain p-2 sm:p-3"
              />
            </div>

            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-4 py-3 text-white sm:px-5 sm:py-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/75">Paciente atendido</p>
              <p className="gallery-fade-in mt-1 text-sm font-semibold sm:text-base">{activeService.label}</p>
            </figcaption>

            <button
              type="button"
              onClick={goToPreviousService}
              className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-lg font-bold text-[var(--ink-900)] shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white"
              aria-label="Foto anterior"
            >
              &lt;
            </button>

            <button
              type="button"
              onClick={goToNextService}
              className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-lg font-bold text-[var(--ink-900)] shadow-md backdrop-blur-sm transition hover:scale-105 hover:bg-white"
              aria-label="Próxima foto"
            >
              &gt;
            </button>
          </figure>

          <div className="mt-4 flex items-center justify-center gap-2">
            {serviceShowcaseItems.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActiveServiceIndex(index)}
                aria-label={`Mostrar ${item.label}`}
                className={
                  activeServiceIndex === index
                    ? "h-1.5 w-7 rounded-full bg-[var(--brand-blue)] transition"
                    : "h-1.5 w-3 rounded-full bg-[var(--brand-blue-soft)] transition hover:bg-[var(--brand-blue)]/40"
                }
              />
            ))}
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-[760px] grid-cols-4 gap-1.5 sm:gap-2">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="group flex w-full min-w-0 flex-col overflow-hidden rounded-lg border border-black/5 bg-white p-1 shadow-[0_8px_18px_rgba(17,24,39,0.08)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(17,24,39,0.12)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 24vw, (max-width: 1024px) 18vw, 180px"
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="flex h-6 items-center px-1.5 text-[10px] font-semibold leading-tight text-[var(--ink-700)]">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
