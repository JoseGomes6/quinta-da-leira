import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Alojamento() {
  const [activeImage, setActiveImage] = useState(0);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  const { t } = useTranslation();

  const amenityImages = [
    "quarto1.jpeg",
    "detalhe13.jpeg",
    "banho1.jpeg",
    "detalhe18.jpeg",
  ];

  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveImage(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "-20% 0px -50% 0px",
      threshold: 0.1,
    });

    sectionRefs.current.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const amenitiesData = t("alojamento.comodidades", {
    returnObjects: true,
  }).map(({ categoria, itens }) => ({ category: categoria, items: itens }));

  return (
    <div className="bg-[#FAF8F5] text-[#1A1F1E] antialiased font-light selection:bg-[#D4AF37]/20 selection:text-[#1A1F1E] overflow-x-hidden">
      <Header />

      <section className="pt-32 md:pt-40 min-h-[92vh] grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-center px-8 md:px-16 py-16 space-y-10 bg-[#FAF8F5]">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.5em] uppercase text-stone-400 font-mono block">
              {t("alojamento.hero.tag")}
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-[#1A1F1E] tracking-wide leading-[1.2]">
              {t("alojamento.hero.titulo")}
            </h1>
            <div className="w-16 h-[1px] bg-[#A38250]/60" />
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-sm md:text-base text-stone-800 font-light leading-relaxed pl-5 border-l border-stone-300">
              {t("alojamento.hero.texto1")}
            </p>
            <p className="text-xs md:text-sm text-stone-600 font-light leading-relaxed pr-4 pt-1">
              {t("alojamento.hero.texto2")}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 relative min-h-[480px] lg:min-h-full">
          <img
            src="alojamento2.jpeg"
            alt={t("alojamento.hero.alt")}
            className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.03] absolute inset-0"
          />
        </div>
      </section>

      <main className="py-24 px-8 md:px-16 max-w-7xl mx-auto space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="hidden lg:block lg:col-span-5" />
          <div className="lg:col-span-7 space-y-5 max-w-xl pl-2 lg:pl-6 border-l border-stone-300/80">
            <span className="text-[10px] tracking-[0.4em] text-[#A38250] font-mono block">
              {t("alojamento.suites.tag")}
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1F1E] font-light">
              {t("alojamento.suites.titulo")}
            </h3>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              {t("alojamento.suites.texto")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-stone-200">
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-6">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] text-[#A38250] font-mono block">
                {t("alojamento.exclusividade.tag")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A1F1E] font-light leading-tight">
                {t("alojamento.exclusividade.titulo1")} <br />
                <span className="italic font-normal text-stone-600">
                  {t("alojamento.exclusividade.titulo2")}
                </span>
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-[#A38250]/40" />

            <div className="space-y-6 text-sm text-stone-600 font-light leading-relaxed">
              <p>
                {t("alojamento.exclusividade.texto1")}
              </p>
              <p>
                {t("alojamento.exclusividade.texto2")}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-[4/5] shadow-2xl rounded-sm">
              <img
                src="alojamento3.jpeg"
                alt={t("alojamento.exclusividade.alt")}
                className="w-full h-full object-cover filter brightness-[0.98] hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>
        </div>
      </main>

      <section className="bg-[#141C1A] text-stone-200 py-28 px-6 md:px-12 my-24 border-y border-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#A38250_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A38250]" />
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#A38250] font-mono font-medium">
              {t("alojamento.capacidade.tag")}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-white">
            {t("alojamento.capacidade.ate")}{" "}
            <span className="italic font-normal text-[#A38250]">
              {t("alojamento.capacidade.adultos")}
            </span>
          </h2>
          <div className="w-12 h-[1px] bg-[#A38250]/60 mx-auto" />
          <p className="text-sm md:text-base text-stone-400 font-light max-w-xl mx-auto leading-relaxed pt-1">
            {t("alojamento.capacidade.texto")}
          </p>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#A38250] font-mono block">
            {t("alojamento.inventario.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1A1F1E]">
            {t("alojamento.inventario.titulo")}
          </h2>
          <div className="w-12 h-[1px] bg-[#A38250]/50 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 h-[750px] overflow-y-auto pr-6 space-y-20 custom-scrollbar scroll-smooth">
            {amenitiesData.map((section, idx) => (
              <div
                key={idx}
                data-index={idx}
                ref={(el) => (sectionRefs.current[idx] = el)}
                className="space-y-6 pt-6 border-t border-stone-200 transition-all duration-500"
              >
                <span className="text-[10px] tracking-[0.4em] text-[#A38250] font-mono block">
                  0{idx + 1} / {t("alojamento.inventario.equipamentos")}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#1A1F1E] font-light">
                  {section.category}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm text-stone-600 font-light">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-[#A38250] rounded-full inline-block" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 lg:sticky lg:top-32 h-[750px]">
            <div
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full h-full overflow-hidden shadow-2xl rounded-sm cursor-none"
            >
              {amenityImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={t("alojamento.inventario.alt", { n: index + 1 })}
                  style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.08)`,
                    transition:
                      "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), opacity 1s ease-in-out",
                  }}
                  className={`w-full h-full object-cover filter brightness-[0.98] absolute inset-0 ${
                    activeImage === index
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-20" />
              <div className="absolute bottom-6 left-6 text-white/90 z-30 pointer-events-none">
                <span className="text-[9px] tracking-[0.4em] uppercase text-amber-200 block mb-1">
                  {t("alojamento.inventario.detalhes", {
                    n: activeImage + 1,
                    total: amenityImages.length,
                  })}
                </span>
                <p className="text-xs uppercase tracking-widest font-light">
                  {amenitiesData[activeImage]?.category || "Quinta da Leira"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
