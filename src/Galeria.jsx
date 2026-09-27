import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Galeria() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 20 Fotos de altíssima qualidade com tamanhos dinâmicos (Assimetria Editorial de Luxo)
  const galeriaFotosBase = [
    {
      id: 1,
      src: "detalhe1.jpeg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 2,
      src: "pool1.jpeg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 3,
      src: "detalhe7.jpeg",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 4,
      src: "detalhe4.jpeg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 5,
      src: "detalhe2.jpeg",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      id: 6,
      src: "detalhe11.jpeg",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 7,
      src: "detalhe3.jpeg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 8,
      src: "detalhe5.jpeg",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      id: 9,
      src: "detalhe6.jpeg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 10,
      src: "detalhe10.jpeg",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 11,
      src: "detalhe8.jpeg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 12,
      src: "detalhe9.jpeg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 13,
      src: "detalhe13.jpeg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 14,
      src: "detalhe18.jpeg",
      span: "md:col-span-1 md:row-span-2",
    },
    {
      id: 15,
      src: "detalhe12.jpeg",
      span: "md:col-span-2 md:row-span-1",
    },
    {
      id: 16,
      src: "detalhe16.jpeg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 17,
      src: "detalhe17.jpeg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 18,
      src: "b1.jpeg",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      id: 19,
      src: "quinta5.jpeg",
      span: "md:col-span-1 md:row-span-1",
    },
  ];
  const titulosFotos = t("galeria.fotos", { returnObjects: true });
  const galeriaFotos = galeriaFotosBase.map((foto, i) => ({
    ...foto,
    titulo: titulosFotos[i],
  }));
  // Guarda só o índice para que o título mude de língua com o resto da página
  const selectedImage =
    selectedIndex === null ? null : galeriaFotos[selectedIndex];
  const setSelectedImage = (foto) =>
    setSelectedIndex(foto ? foto.id - 1 : null);

  return (
    <div className="bg-[#FBF9F5] text-[#1C2826] antialiased font-light selection:bg-[#E2D4C3] selection:text-[#1C2826]">
      <Header />

      {/* ---------------- HERO SECTION DE LUXO (FOTO ESQUERDA + FRASE DE AUTOR DIREITA) ---------------- */}
      <main className="pt-36 pb-32">
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36 animate-fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Foto Editorial à Esquerda */}
            <div className="lg:col-span-7">
              <div className="relative h-[450px] md:h-[600px] w-full overflow-hidden rounded-[2px] shadow-2xl group">
                <img
                  src="quinta3.jpeg"
                  alt={t("galeria.hero.alt")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Frase Sofisticada à Direita */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center space-x-4">
                <span className="w-8 h-[1px] bg-[#A38250]" />
                <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-[#A38250]">
                  {t("galeria.hero.tag")}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-[#1C2826] leading-tight">
                {t("galeria.hero.titulo")}
              </h1>
              <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
                {t("galeria.hero.texto")}
              </p>
              <div className="pt-4 border-t border-stone-300 flex items-center justify-between text-xs tracking-[0.25em] uppercase text-stone-500">
                <span>{t("galeria.hero.colecao")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- MASONRY / GRID ASSIMÉTRICO DE LUXO (20 FOTOS) ---------------- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#A38250] font-semibold">
              {t("galeria.arquivo.tag")}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1C2826]">
              {t("galeria.arquivo.titulo")}
            </h2>
            <div className="w-12 h-[1px] bg-[#A38250] mx-auto" />
          </div>

          {/* Grid Estilo Galeria de Arte */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-6">
            {galeriaFotos.map((foto, index) => (
              <div
                key={foto.id}
                onClick={() => setSelectedImage(foto)}
                className={`relative overflow-hidden rounded-[2px] shadow-xl group cursor-pointer bg-stone-900 ${foto.span}`}
              >
                <img
                  src={foto.src}
                  alt={foto.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
                />

                {/* Overlay Sofisticado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-amber-200 mb-1">
                    {t("galeria.arquivo.exposicao", {
                      n: String(index + 1).padStart(2, "0"),
                    })}
                  </span>
                  <h3 className="text-lg md:text-xl font-serif font-light text-white">
                    {foto.titulo}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ---------------- LIGHTBOX / MODAL DE LUXO AO CLICAR NA FOTO ---------------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-fade-up"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 text-amber-200 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors focus:outline-none z-50"
            aria-label={t("common.fechar")}
          >
            ✕
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.titulo}
              className="max-h-[70vh] w-auto object-contain rounded-[2px] shadow-2xl border border-white/10"
            />
            <div className="mt-6 text-center space-y-1">
              <span className="text-[9px] tracking-[0.4em] uppercase text-amber-200">
                Quinta da Leira
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-light text-white">
                {selectedImage.titulo}
              </h3>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
