import Image from "next/image";

const galleryItems = [
  {
    src: "/images/gallery/pet-01.webp",
    alt: "Cachorro em consulta de rotina",
    label: "Consulta de rotina",
  },
  {
    src: "/images/gallery/pet-02.webp",
    alt: "Gato em avaliacao veterinaria",
    label: "Avaliacao felina",
  },
  {
    src: "/images/gallery/pet-03.webp",
    alt: "Tutor acompanhando retorno do pet",
    label: "Retorno acompanhado",
  },
  {
    src: "/images/gallery/pet-04.webp",
    alt: "Pet recuperado apos atendimento",
    label: "Recuperacao com cuidado",
  },
];

export function Gallery() {
  return (
    <section id="galeria" className="bg-[var(--surface-2)] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue)]">Galeria</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--ink-900)] sm:text-4xl">
            Pets atendidos com carinho e atencao
          </h2>
          <p className="mt-3 text-[var(--ink-600)]">
            Prova visual de um atendimento humanizado para quem busca uma clinica veterinaria de confianca em Manaus.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className="group overflow-hidden rounded-3xl border border-black/5 bg-white p-2 shadow-[0_14px_48px_rgba(17,24,39,0.08)]"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={440}
                  loading="lazy"
                  className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="px-3 pb-2 pt-3 text-sm font-semibold text-[var(--ink-700)]">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
