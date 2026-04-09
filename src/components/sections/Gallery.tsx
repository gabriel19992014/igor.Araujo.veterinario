import Image from "next/image";

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
  return (
    <section id="galeria" className="bg-[var(--surface-2)] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Galeria</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink-900)] sm:text-4xl">
            Pets atendidos com carinho e atenção
          </h2>
          <p className="mt-3 text-[var(--ink-600)]">
            Prova visual de um atendimento humanizado para quem busca uma clínica veterinária de confiança em Manaus.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-2 shadow-[0_14px_48px_rgba(17,24,39,0.08)]"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="flex h-10 items-center px-3 text-sm font-semibold leading-tight text-[var(--ink-700)]">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
