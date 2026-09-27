import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Contactos() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FAF8F5] text-[#1C2826] antialiased font-light selection:bg-[#D4AF37] selection:text-white">
      <Header />

      {/* ---------------- MAIN CONTENT: HIGH LUXURY EDITORIAL LAYOUT ---------------- */}
      <main className="pt-48 pb-36 max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-20 animate-fade-up">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-semibold">
              {t("contactos.tag")}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight text-[#1C2826] leading-[1.15]">
            {t("contactos.titulo1")} <br />
            <span className="italic font-normal text-[#C5A059]">
              {t("contactos.titulo2")}
            </span>
          </h1>
        </div>

        {/* Top Section: Information Displayed in a Horizontal Grid Layout (Now 4 columns to include Redes Sociais) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-up">
          {/* Column 1: Concierge Line */}
          <div className="bg-white p-8 border border-stone-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 block mb-3 font-medium">
              {t("contactos.linhaPrivada")}
            </span>
            <a
              href="tel:+351259000000"
              className="text-xl lg:text-2xl font-serif font-light tracking-wide text-[#1C2826] hover:text-[#C5A059] transition-colors duration-500 inline-block"
            >
              +351 259 000 000
            </a>
          </div>

          {/* Column 2: Electronic Mail */}
          <div className="bg-white p-8 border border-stone-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 block mb-3 font-medium">
              {t("contactos.email")}
            </span>
            <a
              href="mailto:stay@quintadaleira.com"
              className="text-base lg:text-lg font-serif font-light tracking-wide text-[#1C2826] hover:text-[#C5A059] transition-colors duration-500 break-all inline-block"
            >
              stay@quintadaleira.com
            </a>
          </div>

          {/* Column 3: Official Address */}
          <div className="bg-white p-8 border border-stone-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] font-semibold block mb-3">
              {t("contactos.morada")}
            </span>
            <p className="text-xs font-serif text-[#1C2826] leading-relaxed mb-2">
              Rua Missões do Espírito Santo, Quinta da Leira
              <br />
              5050-068 Godim, Peso da Régua
            </p>
          </div>

          {/* Column 4: Redes Sociais & Instagram Icon */}
          <div className="bg-white p-8 border border-stone-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]" />
            <div>
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] font-semibold block mb-3">
                {t("contactos.redes")}
              </span>
              <p className="text-xs text-stone-500 font-light mb-4">
                {t("contactos.siga")}
              </p>
            </div>
            <div>
              <a
                href="https://www.instagram.com/quinta_da_leira_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FAF8F5] border border-stone-200 text-[#1C2826] hover:bg-[#C5A059] hover:text-white transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Full-Width Horizontal Landscape Banner / Map Context */}
        <div className="relative w-full h-[450px] md:h-[520px] rounded-[2px] overflow-hidden shadow-2xl group border border-stone-200 animate-fade-up">
          <div
            className="absolute inset-0 bg-[url('quinta6.jpeg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ filter: "brightness(90%) contrast(105%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2826]/90 via-[#1C2826]/30 to-transparent" />

          <div className="absolute bottom-12 left-10 md:left-16 right-10 md:right-16 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
            <div className="space-y-3 max-w-xl">
              <span className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] block font-semibold">
                {t("contactos.mapa.tag")}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-light">
                {t("contactos.mapa.titulo")}
              </h3>
              <p className="text-xs md:text-sm font-light text-stone-200 leading-relaxed">
                {t("contactos.mapa.texto")}
              </p>
            </div>
            <div>
              <a
                href="https://maps.google.com/?q=Rua+Missoes+do+Espirito+Santo+Godim+Peso+da+Regua"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-[#1C2826] px-8 py-4 text-[9px] uppercase tracking-[0.25em] font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-500 shadow-xl whitespace-nowrap"
              >
                <span>{t("contactos.mapa.botao")}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
