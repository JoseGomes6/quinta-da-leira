import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { experienciaImages, destaquesHome } from "./data/experiencias";
import { Link } from "react-router-dom";

function App() {
  const imgDia = "foto-hero1.jpeg";
  const imgNoite = "hero-noite.png";

  // --- DADOS DOS BUNGALOWS (textos em src/locales/*.js → home.bungalows) ---
  const bungalowImages = [
    ["b1.jpeg", "alojamento1.jpeg", "alojamento2.jpeg", "detalhe1.jpeg"],
    ["b2.jpeg", "alojamento3.jpeg", "banho1.jpeg", "detalhe2.jpeg"],
    ["b3.jpeg", "detalhe3.jpeg", "detalhe4.jpeg", "detalhe5.jpeg"],
    ["b4.jpeg", "detalhe6.jpeg", "detalhe7.jpeg", "detalhe8.jpeg"],
    ["b5.jpeg", "detalhe9.jpeg", "detalhe10.jpeg", "detalhe11.jpeg"],
  ];

  // --- ESTADOS ---
  const [sliderPos, setSliderPos] = useState(50);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const { t } = useTranslation();
  const containerRef = useRef(null);

  const bungalows = t("home.bungalows", { returnObjects: true }).map(
    (b, i) => ({ ...b, id: i + 1, imagens: bungalowImages[i] }),
  );
  // Guarda só o índice para que o modal mude de língua com o resto da página
  const selectedBungalow =
    selectedIndex === null ? null : bungalows[selectedIndex];
  const setSelectedBungalow = (b) => setSelectedIndex(b ? b.id - 1 : null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  const getMosaicClasses = (index) => {
    switch (index % 5) {
      case 0:
        return "col-span-1 md:col-span-8 h-64 md:h-[420px]";
      case 1:
        return "col-span-1 md:col-span-4 h-64 md:h-[420px]";
      case 2:
        return "col-span-1 md:col-span-4 h-56 md:h-80";
      case 3:
        return "col-span-1 md:col-span-4 h-56 md:h-80";
      case 4:
        return "col-span-1 md:col-span-4 h-56 md:h-80";
      default:
        return "col-span-1 md:col-span-6 h-60";
    }
  };

  return (
    <div className="bg-[#FBF9F5] text-[#1C2826] antialiased font-light scroll-smooth selection:bg-[#E2D4C3] selection:text-[#1C2826]">
      <Header transparent />

      {/* ---------------- 1. HERO SLIDER (COM NOVO TÍTULO) ---------------- */}
      <section className="relative h-screen w-full overflow-hidden select-none bg-stone-900">
        <div
          ref={containerRef}
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => e.touches[0] && handleMove(e.touches[0].clientX)}
          className="absolute inset-0 h-full w-full cursor-ew-resize z-10"
        >
          <div className="absolute inset-0 h-full w-full">
            <img
              src={imgNoite}
              alt={t("home.hero.altNoite")}
              className="h-full w-screen object-cover scale-105 brightness-[0.95]"
            />
          </div>
          <div
            className="absolute inset-0 h-full overflow-hidden border-r border-white/40 shadow-2xl"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="h-full w-screen">
              <img
                src={imgDia}
                alt={t("home.hero.altDia")}
                className="h-full w-full object-cover scale-105 brightness-[0.95]"
              />
            </div>
          </div>
          <div
            className="absolute top-0 bottom-0 w-0 z-30 flex items-center justify-center transform -translate-x-1/2 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-0 bottom-0 w-[1px] bg-white/60 backdrop-blur-sm" />
            <div className="w-14 h-14 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-white/50 text-white transition-transform hover:scale-110">
              <span className="text-xs font-light tracking-widest text-white/90">
                ‹ ›
              </span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col justify-end pointer-events-none">
          <div className="w-full bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-32 pb-20 px-6 flex justify-center">
            <div className="max-w-2xl text-center space-y-3 animate-fade-up">
              <p className="text-[11px] font-semibold tracking-[0.5em] uppercase text-amber-100/90">
                {t("home.hero.local")}
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-light text-white leading-tight">
                {t("home.hero.titulo")}
              </h1>
              <p className="text-[10px] tracking-[0.25em] text-stone-300 font-light uppercase pt-2">
                {t("home.hero.instrucao")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 2. SOBRE A QUINTA (COM OS NOVOS TEXTOS SOPHISTICADOS) ---------------- */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-8">
        <p className="text-[10px] tracking-[0.6em] uppercase text-[#A38250] font-semibold animate-fade-up">
          {t("home.sobre.tag")}
        </p>
        <h2 className="text-2xl md:text-4xl font-serif font-light text-[#1C2826] uppercase animate-fade-up delay-100">
          {t("home.sobre.titulo")}
        </h2>
        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto animate-fade-up delay-200" />
        <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto animate-fade-up delay-300">
          {t("home.sobre.texto")}
        </p>
      </section>

      {/* ---------------- 3. BUNGALOWS / ALOJAMENTO ---------------- */}
      <section className="py-32 bg-[#F4F0EB] border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#A38250] font-bold border-l-2 border-[#A38250] pl-4">
                {t("home.alojamento.tag")}
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1C2826]">
                {t("home.alojamento.titulo")}
              </h2>
            </div>
            <p className="text-xs text-stone-500 font-light max-w-md leading-relaxed border-l md:border-l-0 md:border-r border-stone-300 pl-4 md:pl-0 md:pr-4">
              {t("home.alojamento.texto")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {bungalows.map((b, index) => {
              const spanClass =
                index === 0
                  ? "md:col-span-7 h-[480px]"
                  : index === 1
                    ? "md:col-span-5 h-[480px]"
                    : index === 2
                      ? "md:col-span-4 h-[420px]"
                      : index === 3
                        ? "md:col-span-4 h-[420px]"
                        : "md:col-span-4 h-[420px]";

              return (
                <div
                  key={b.id}
                  onClick={() => setSelectedBungalow(b)}
                  className={`${spanClass} group cursor-pointer overflow-hidden relative bg-stone-900 border border-stone-200/60 shadow-md transition-all duration-700 hover:shadow-2xl hover:border-[#D4AF37]/80`}
                >
                  <img
                    src={b.imagens[0]}
                    alt={b.nome}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-700 ease-out group-hover:from-black/95 group-hover:via-black/50" />

                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white transition-all duration-700 ease-out transform translate-y-4 group-hover:translate-y-0">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-white/20 pb-3">
                        <h3 className="text-2xl md:text-3xl font-serif font-light text-white group-hover:text-amber-200 transition-colors duration-500">
                          {b.nome}
                        </h3>
                        <span className="text-[10px] tracking-widest text-stone-300 font-mono bg-white/10 px-2 py-1 backdrop-blur-sm">
                          {b.area}
                        </span>
                      </div>

                      <p className="text-xs uppercase tracking-[0.2em] text-stone-300 font-light">
                        {b.sub}
                      </p>

                      <div className="pt-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out transform translate-y-3 group-hover:translate-y-0 flex items-center space-x-2 text-[#D4AF37]">
                        <span className="text-[10px] tracking-[0.3em] font-mono uppercase">
                          {t("home.alojamento.explorar")}
                        </span>
                        <span className="text-xs transform group-hover:translate-x-1 transition-transform">
                          ↗
                        </span>
                      </div>
                    </div>

                    <div className="w-full h-[1px] bg-[#D4AF37] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- MODAL DETALHES DO BUNGALOW ---------------- */}
      {selectedBungalow && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedBungalow(null)}
        >
          <div
            className="bg-[#FBF9F5] text-[#1C2826] w-full max-w-5xl max-h-[92vh] overflow-y-auto relative shadow-2xl border border-[#D4AF37]/30 animate-modal-show"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBungalow(null)}
              className="absolute top-6 right-6 z-30 w-11 h-11 bg-[#182220] hover:bg-black text-amber-200 rounded-full flex items-center justify-center transition-all duration-300 hover:rotate-90 shadow-xl border border-amber-200/30 focus:outline-none"
              aria-label={t("common.fechar")}
            >
              ✕
            </button>

            <div className="p-6 md:p-12 space-y-12">
              <div className="space-y-3 border-b border-stone-300 pb-6 pr-12">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#A38250]"></span>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#A38250] font-bold">
                    {t("home.modal.residenciaPrivada")}
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1C2826]">
                  {selectedBungalow.nome}
                </h2>
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-light">
                  {selectedBungalow.sub}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#A38250] font-semibold block">
                  {t("home.modal.vistaPrincipal")}
                </span>
                <div className="relative w-full h-[360px] md:h-[500px] overflow-hidden rounded-sm border border-stone-300 shadow-xl bg-stone-900 group">
                  <img
                    src={selectedBungalow.imagens[0]}
                    alt={selectedBungalow.nome}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end pointer-events-none">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-amber-200/95 font-medium">
                        Quinta da Leira
                      </p>
                      <h4 className="text-xl md:text-2xl font-serif font-light">
                        {selectedBungalow.nome}
                      </h4>
                    </div>
                    <span className="text-[10px] tracking-widest bg-black/40 backdrop-blur-md px-4 py-2 border border-white/20 font-mono">
                      {selectedBungalow.area}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center py-5 bg-[#F4F0EB] border border-stone-300/70 shadow-sm">
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-400 mb-1">
                    {t("home.modal.area")}
                  </span>
                  <span className="text-xs md:text-sm font-serif text-stone-900 font-medium">
                    {selectedBungalow.area}
                  </span>
                </div>
                <div className="border-x border-stone-300/60">
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-400 mb-1">
                    {t("home.modal.capacidade")}
                  </span>
                  <span className="text-xs md:text-sm font-serif text-stone-900 font-medium">
                    {selectedBungalow.hospedes}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-400 mb-1">
                    {t("home.modal.cama")}
                  </span>
                  <span className="text-xs md:text-sm font-serif text-stone-900 font-medium">
                    {selectedBungalow.cama}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#A38250] font-semibold">
                    {t("home.modal.sobre")}
                  </h3>
                  <p className="text-sm text-stone-600 font-light leading-relaxed">
                    {selectedBungalow.descricao}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#A38250] font-semibold">
                    {t("home.modal.comodidades")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 font-light">
                    {selectedBungalow.comodidades.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2.5 bg-[#F4F0EB] p-2 border border-stone-200"
                      >
                        <span className="w-1.5 h-1.5 bg-[#A38250] rounded-full shrink-0" />
                        <span className="text-stone-800">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {selectedBungalow.imagens.length > 1 && (
                <div className="space-y-4 pt-6 border-t border-stone-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[11px] uppercase tracking-[0.35em] text-[#A38250] font-semibold">
                      {t("home.modal.galeria")}
                    </h3>
                    <span className="text-[10px] tracking-widest text-stone-400 uppercase font-mono">
                      {t("home.modal.outrosAngulos")}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                    {selectedBungalow.imagens.slice(1).map((img, idx) => (
                      <div
                        key={idx}
                        className={`relative overflow-hidden border border-stone-300/80 bg-stone-900 group cursor-pointer transition-all duration-700 hover:border-[#D4AF37] hover:shadow-xl ${getMosaicClasses(idx)}`}
                      >
                        <img
                          src={img}
                          alt={`${selectedBungalow.nome} - ${t("home.modal.detalhe", { n: idx + 2 })}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.9] group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-stone-300 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[10px] tracking-[0.25em] text-stone-500 uppercase">
                  {t("home.modal.disponibilidade")}
                </p>
                <Link
                  to="/contactos"
                  onClick={() => setSelectedBungalow(null)}
                  className="w-full md:w-auto bg-[#182220] hover:bg-[#253330] text-amber-200 font-semibold px-8 py-4 tracking-[0.25em] text-[10px] uppercase text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-amber-200/20"
                >
                  {t("home.modal.solicitar")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- 4. EXPERIÊNCIAS ---------------- */}
      <section className="py-32 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="text-center space-y-3">
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#A38250] font-semibold">
            {t("home.experiencias.tag")}
          </p>
          <h2 className="text-2xl md:text-4xl font-serif font-light text-[#1C2826] uppercase">
            {t("home.experiencias.titulo")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {destaquesHome.map((i) => {
            const exp = t("experiencias.itens", { returnObjects: true })[i];
            return (
              <Link
                key={i}
                to="/experiencias"
                className="group block space-y-4 overflow-hidden p-2 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-80 overflow-hidden border border-stone-200/80 shadow-sm relative">
                  <img
                    src={experienciaImages[i]}
                    alt={exp.titulo}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="block text-[9px] uppercase tracking-[0.35em] text-[#A38250] pt-2">
                  {exp.subtitulo}
                </span>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-700 font-medium transition-colors duration-300 group-hover:text-[#A38250]">
                  {exp.titulo}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/experiencias"
            className="inline-flex items-center space-x-3 bg-[#182220] hover:bg-[#253330] text-amber-200 font-semibold px-10 py-4 tracking-[0.25em] text-[10px] uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-amber-200/20"
          >
            <span>{t("home.experiencias.botao")}</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
