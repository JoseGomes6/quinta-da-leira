import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Quinta() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = ["quinta5.jpeg", "b3.jpeg", "detalhe12.jpeg"].map(
    (src, i) => ({
      src,
      subtitle: t("quinta.slides", { returnObjects: true })[i].subtitulo,
      title: t("quinta.slides", { returnObjects: true })[i].titulo,
    }),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="bg-[#FBF9F5] text-[#1C2826] antialiased font-light selection:bg-[#E2D4C3] selection:text-[#1C2826]">
      <Header />

      {/* ---------------- CONTEÚDO DA PÁGINA (ESTILO EDITORIAL / VILLALTA) ---------------- */}
      <main className="pt-40 pb-32">
        {/* Cabeçalho minimalista de luxo */}
        <section className="max-w-4xl mx-auto px-6 text-center space-y-6 mb-20 animate-fade-up">
          <span className="text-[10px] font-semibold tracking-[0.6em] uppercase text-[#A38250] inline-block pb-2 border-b border-[#A38250]/30">
            {t("quinta.tag")}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#1C2826] leading-tight">
            {t("quinta.titulo")}
          </h1>
          <p className="text-stone-500 font-light tracking-wide text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            {t("quinta.subtitulo")}
          </p>
        </section>

        {/* Bloco de Abertura: Carrossel Imersivo de Luxo */}
        <section className="max-w-6xl mx-auto px-6 mb-28">
          <div className="relative h-[450px] md:h-[620px] w-full overflow-hidden rounded-[2px] shadow-2xl group">
            {/* Slides do Carrossel */}
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-150 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={image.src}
                  alt={t("quinta.slideAlt", { n: index + 1 })}
                  className="w-full h-full object-cover scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white space-y-1 z-20">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-amber-200">
                    {image.subtitle}
                  </span>
                  <h2 className="text-lg md:text-2xl font-serif font-light">
                    {image.title}
                  </h2>
                </div>
              </div>
            ))}

            {/* Setas de Navegação Minimalistas */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + heroImages.length) % heroImages.length,
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 focus:outline-none"
              aria-label={t("quinta.slideAnterior")}
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % heroImages.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50 focus:outline-none"
              aria-label={t("quinta.slideSeguinte")}
            >
              ›
            </button>

            {/* Indicadores de Paginação */}
            <div className="absolute bottom-6 right-8 md:right-12 z-30 flex items-center space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-[2px] transition-all duration-500 focus:outline-none ${
                    index === currentSlide
                      ? "w-8 bg-amber-200"
                      : "w-3 bg-white/40 hover:bg-white"
                  }`}
                  aria-label={t("quinta.irParaSlide", { n: index + 1 })}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Texto Editorial Centralizado (Estilo Artigo de Luxo) */}
        <section className="max-w-3xl mx-auto px-6 text-center space-y-8 mb-32">
          <h3 className="text-2xl md:text-3xl font-serif font-light text-[#1C2826] leading-snug">
            {t("quinta.citacao")}
          </h3>
          <div className="w-12 h-[1px] bg-[#A38250] mx-auto" />
          <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
            {t("quinta.texto")}
          </p>
        </section>

        {/* Secções Alternadas (Fotos ricas e textos refinados) */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 mb-32">
          {/* Par 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#A38250] font-semibold">
                {t("quinta.terroir.tag")}
              </span>
              <h4 className="text-3xl md:text-4xl font-serif font-light text-[#1C2826] leading-snug">
                {t("quinta.terroir.titulo")}
              </h4>
              <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">
                {t("quinta.terroir.texto")}
              </p>
              <div className="pt-4 border-t border-stone-300 grid grid-cols-2 gap-6">
                <div>
                  <span className="block text-2xl font-serif text-[#A38250] mb-1">
                    450m
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-stone-500">
                    {t("quinta.terroir.altitude")}
                  </span>
                </div>
                <div>
                  <span className="block text-2xl font-serif text-[#A38250] mb-1">
                    100%
                  </span>
                  <span className="text-[9px] tracking-[0.2em] uppercase text-stone-500">
                    {t("quinta.terroir.respeito")}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative h-[400px] md:h-[480px] w-full overflow-hidden rounded-[2px] shadow-xl group">
                <img
                  src="quinta2.jpeg"
                  alt={t("quinta.terroir.alt")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Par 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative h-[400px] md:h-[480px] w-full overflow-hidden rounded-[2px] shadow-xl group">
                <img
                  src="b1.jpeg"
                  alt={t("quinta.sofisticacao.alt")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#A38250] font-semibold">
                {t("quinta.sofisticacao.tag")}
              </span>
              <h4 className="text-3xl md:text-4xl font-serif font-light text-[#1C2826] leading-snug">
                {t("quinta.sofisticacao.titulo")}
              </h4>
              <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">
                {t("quinta.sofisticacao.texto")}
              </p>
              <div className="pt-2">
                <Link
                  to="/alojamento"
                  className="inline-flex items-center space-x-3 text-[10px] tracking-[0.3em] uppercase text-[#1C2826] font-semibold group"
                >
                  <span className="border-b border-[#1C2826] pb-1 group-hover:border-[#A38250] group-hover:text-[#A38250] transition-colors">
                    {t("quinta.sofisticacao.link")}
                  </span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Galeria Grid Dupla Estética */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#A38250]">
              {t("quinta.galeria.tag")}
            </span>
            <h4 className="text-2xl md:text-3xl font-serif font-light">
              {t("quinta.galeria.titulo")}
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-[2px] shadow-lg group">
              <img
                src="exp2.jpeg"
                alt={t("quinta.galeria.alt", { n: 1 })}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative h-[350px] md:h-[450px] overflow-hidden rounded-[2px] shadow-lg group">
              <img
                src="detalhe5.jpeg"
                alt={t("quinta.galeria.alt", { n: 2 })}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
