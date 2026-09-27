import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { experienciaImages } from "./data/experiencias";

export default function Experiencias() {
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

  const experienciasLista = t("experiencias.itens", {
    returnObjects: true,
  }).map((exp, i) => ({
    ...exp,
    id: i + 1,
    src: experienciaImages[i],
  }));
  // Guarda só o índice para que o modal mude de língua com o resto da página
  const selectedExperience =
    selectedIndex === null ? null : experienciasLista[selectedIndex];
  const setSelectedExperience = (exp) =>
    setSelectedIndex(exp ? exp.id - 1 : null);

  return (
    <div className="bg-[#FBF9F5] text-[#1C2826] antialiased font-light selection:bg-[#E2D4C3] selection:text-[#1C2826]">
      <Header />

      {/* ---------------- HERO SECTION ---------------- */}
      <main className="pt-36 pb-32">
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36 animate-fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <div className="relative h-[450px] md:h-[600px] w-full overflow-hidden rounded-[2px] shadow-2xl group">
                <img
                  src="b1.jpeg"
                  alt={t("experiencias.hero.alt")}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center space-x-4">
                <span className="w-8 h-[1px] bg-[#A38250]" />
                <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-[#A38250]">
                  {t("experiencias.hero.tag")}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-[#1C2826] leading-tight">
                {t("experiencias.hero.titulo")}
              </h1>
              <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
                {t("experiencias.hero.texto")}
              </p>
              <div className="pt-4 border-t border-stone-300 flex items-center justify-between text-xs tracking-[0.25em] uppercase text-stone-500">
                <span>{t("experiencias.hero.itinerarios")}</span>
                <span className="text-[#A38250] font-semibold">
                  {t("experiencias.hero.concierge")}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- EXPERIENCES LIST / GRID ---------------- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#A38250] font-semibold">
              {t("experiencias.lista.tag")}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1C2826]">
              {t("experiencias.lista.titulo")}
            </h2>
            <div className="w-12 h-[1px] bg-[#A38250] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienciasLista.map((exp, index) => (
              <div
                key={exp.id}
                onClick={() => setSelectedExperience(exp)}
                className="relative h-[480px] overflow-hidden rounded-[2px] shadow-xl group cursor-pointer bg-stone-900"
              >
                <img
                  src={exp.src}
                  alt={exp.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <span className="text-[9px] tracking-[0.4em] uppercase text-amber-200 mb-1">
                    0{index + 1} — {exp.subtitulo}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif font-light text-white mb-2">
                    {exp.titulo}
                  </h3>
                  <p className="text-stone-300 font-light text-xs line-clamp-2 mb-4">
                    {exp.descricao}
                  </p>
                  <span className="inline-block text-[9px] uppercase tracking-[0.3em] text-amber-200 group-hover:underline">
                    {t("experiencias.lista.ver")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ---------------- EXPERIENCE MODAL ---------------- */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-fade-up"
          onClick={() => setSelectedExperience(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#182220] text-white p-8 md:p-12 rounded-[2px] shadow-2xl border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar Posicionado Dentro do Modal */}
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 text-amber-200 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors focus:outline-none z-50"
              aria-label={t("common.fechar")}
            >
              ✕
            </button>

            <div className="h-[220px] md:h-[400px] w-full rounded-[2px] overflow-hidden">
              <img
                src={selectedExperience.src}
                alt={selectedExperience.titulo}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-[9px] tracking-[0.4em] uppercase text-amber-200 block mb-1">
                  {selectedExperience.subtitulo}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-light">
                  {selectedExperience.titulo}
                </h3>
              </div>
              <p className="text-stone-300 font-light text-sm leading-relaxed">
                {selectedExperience.descricao}
              </p>
              <div className="p-4 bg-white/5 border border-white/10 rounded-[2px]">
                <span className="text-[9px] tracking-[0.3em] uppercase text-amber-200 block mb-1 font-semibold">
                  {t("experiencias.lista.detalhes")}
                </span>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {selectedExperience.detalhes}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
