import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Contactos() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { to: "/a-quinta", label: t("quinta") || "The Estate" },
    { to: "/alojamento", label: t("alojamento") || "Accommodation" },
    { to: "/experiencias", label: t("experiencias") || "Experiences" },
    { to: "/galeria", label: t("galeria") || "Gallery" },
    { to: "/contactos", label: t("contactos") || "Contact" },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1C2826] antialiased font-light selection:bg-[#D4AF37] selection:text-white">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ---------------- NAVBAR ---------------- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 animate-slide-down ${
          scrolled
            ? "bg-[#1C2826]/95 backdrop-blur-md py-4 shadow-xl border-b border-white/10"
            : "bg-[#1C2826]/90 backdrop-blur-md py-6 border-b border-white/10"
        }`}
      >
        <nav className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 md:px-12">
          <Link
            to="/"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="text-[10px] font-light tracking-[0.4em] uppercase text-white/80 group-hover:text-[#D4AF37] transition-colors duration-500">
              Douro Valley
            </span>
            <span className="text-lg md:text-xl font-serif tracking-[0.2em] uppercase text-white drop-shadow-sm group-hover:tracking-[0.25em] transition-all duration-500">
              Quinta da Leira
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-[10px] font-medium tracking-[0.25em] uppercase text-white/90">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.to}
                className={({ isActive }) =>
                  `relative py-1 group/item transition-colors duration-300 hover:text-[#D4AF37] ${
                    isActive ? "text-[#D4AF37] font-semibold" : ""
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] transform transition-transform duration-500 ease-out origin-center ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover/item:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <div className="flex items-center space-x-2 border-l border-white/20 pl-6 text-[9px] tracking-widest text-white/70">
              {["PT", "EN", "FR", "ES", "IT"].map((l) => (
                <button
                  key={l}
                  onClick={() => i18n.changeLanguage(l)}
                  className={`hover:text-white transition-all duration-300 focus:outline-none ${
                    currentLang?.toUpperCase() === l
                      ? "text-white font-semibold border-b border-white/80 scale-105"
                      : ""
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <Link
              to="/contactos"
              className="relative group overflow-hidden border border-white/40 px-6 py-2.5 text-white transition-all duration-500 hover:border-white hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 group-hover:text-[#1C2826] transition-colors duration-500 tracking-[0.25em] text-[9px] font-semibold uppercase">
                {t("reservar") || "Book Now"}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col justify-center items-end space-y-1.5 w-8 h-8 lg:hidden focus:outline-none group"
            aria-label="Open Menu"
          >
            <span className="block w-6 h-[1px] bg-white group-hover:w-8 transition-all duration-300" />
            <span className="block w-4 h-[1px] bg-white group-hover:w-8 transition-all duration-300" />
            <span className="block w-6 h-[1px] bg-white group-hover:w-8 transition-all duration-300" />
          </button>
        </nav>
      </header>

      {/* ---------------- MOBILE MENU ---------------- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1C2826]/95 backdrop-blur-lg flex flex-col justify-between p-8 lg:hidden animate-fade-up">
          <div className="flex justify-between items-center w-full">
            <span className="text-[10px] font-light tracking-[0.4em] uppercase text-[#D4AF37]">
              Quinta da Leira
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 bg-white/10 text-[#D4AF37] rounded-full flex items-center justify-center border border-white/20 focus:outline-none"
              aria-label="Close Menu"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col space-y-6 text-left my-auto">
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif font-light text-white hover:text-[#D4AF37] tracking-wider transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="space-y-6 pt-6 border-t border-white/10">
            <div className="flex items-center space-x-4 text-xs tracking-widest text-white/70">
              {["PT", "EN", "FR", "ES", "IT"].map((l) => (
                <button
                  key={l}
                  onClick={() => i18n.changeLanguage(l)}
                  className={`hover:text-white transition-colors ${
                    currentLang?.toUpperCase() === l
                      ? "text-[#D4AF37] font-semibold border-b border-[#D4AF37]"
                      : ""
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <Link
              to="/contactos"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-[#D4AF37] text-[#1C2826] text-center font-semibold py-3 text-xs tracking-[0.25em] uppercase"
            >
              {t("reservar") || "Book Now"}
            </Link>
          </div>
        </div>
      )}

      {/* ---------------- MAIN CONTENT: HIGH LUXURY EDITORIAL LAYOUT ---------------- */}
      <main className="pt-48 pb-36 max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Header */}
        <div className="max-w-4xl mb-20 animate-fade-up">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-semibold">
              Concierge & Estate
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight text-[#1C2826] leading-[1.15]">
            Onde o Douro Encontra <br />
            <span className="italic font-normal text-[#C5A059]">
              a Exclusividade.
            </span>
          </h1>
        </div>

        {/* Top Section: Information Displayed in a Horizontal Grid Layout (Now 4 columns to include Redes Sociais) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 animate-fade-up">
          {/* Column 1: Concierge Line */}
          <div className="bg-white p-8 border border-stone-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500 block mb-3 font-medium">
              Linha Privada
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
              Correio Eletrónico
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
              Morada Oficial
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
                Redes Sociais
              </span>
              <p className="text-xs text-stone-500 font-light mb-4">
                Siga a nossa vivência no Douro.
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
            className="absolute inset-0 bg-[url('/quinta6.jpeg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ filter: "brightness(90%) contrast(105%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2826]/90 via-[#1C2826]/30 to-transparent" />

          <div className="absolute bottom-12 left-10 md:left-16 right-10 md:right-16 z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white">
            <div className="space-y-3 max-w-xl">
              <span className="text-[9px] tracking-[0.4em] uppercase text-[#D4AF37] block font-semibold">
                Navegação & Direções GPS
              </span>
              <h3 className="text-3xl md:text-4xl font-serif font-light">
                Descubra o Coração do Douro
              </h3>
              <p className="text-xs md:text-sm font-light text-stone-200 leading-relaxed">
                Localizada na prestigiada Rua Missões do Espírito Santo, em
                Godim (Peso da Régua). Disponibilizamos acesso automóvel.
              </p>
            </div>
            <div>
              <a
                href="https://maps.google.com/?q=Rua+Missoes+do+Espirito+Santo+Godim+Peso+da+Regua"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-[#1C2826] px-8 py-4 text-[9px] uppercase tracking-[0.25em] font-semibold hover:bg-[#D4AF37] hover:text-white transition-all duration-500 shadow-xl whitespace-nowrap"
              >
                <span>Abrir no Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* ---------------- 5. FOOTER ---------------- */}
      <footer className="bg-[#0e1413] text-[#FBF9F5] pt-28 pb-16 px-6 md:px-12 border-t border-[#A38250]/30 relative overflow-hidden">
        {/* Linha superior de brilho dourado */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#A38250]/50 to-transparent" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-white/10">
          {/* Coluna 1: Marca & Filosofia */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-light tracking-[0.5em] uppercase text-[#A38250]">
                Douro Valley — Portugal
              </span>
              <h2 className="text-3xl font-serif font-light tracking-[0.15em] uppercase text-white">
                Quinta da Leira
              </h2>
            </div>
            <p className="text-stone-400 font-light leading-relaxed text-xs md:text-sm max-w-sm">
              Um refúgio exclusivo de arquitetura contemporânea e silêncio
              absoluto, suspenso sobre as encostas socalcadas do Vale do Douro.
            </p>

            <div className="pt-2 flex flex-col space-y-4 text-xs font-mono tracking-widest text-[#A38250]">
              <span>GPS: 41.1892° N, 7.4821° W</span>

              {/* Secção Redes Sociais com Título e Ícone em baixo */}
              <div className="space-y-2 pt-1">
                <h4 className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-stone-300">
                  Redes Sociais
                </h4>
                <div>
                  <a
                    href="https://www.instagram.com/quinta_da_leira_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2.5 text-xs font-sans tracking-wider text-stone-400 hover:text-[#A38250] transition-colors group"
                  >
                    <svg
                      className="w-4 h-4 text-[#A38250] group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="border-b border-stone-600 pb-0.5 group-hover:border-[#A38250]">
                      Instagram
                    </span>
                    <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[10px]">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#A38250]">
              Navegação
            </h3>
            <ul className="space-y-3.5 text-xs tracking-[0.2em] uppercase text-stone-400 font-light">
              <li>
                <Link
                  to="/a-quinta"
                  className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  A Quinta
                </Link>
              </li>
              <li>
                <Link
                  to="/alojamento"
                  className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Alojamento
                </Link>
              </li>
              <li>
                <Link
                  to="/experiencias"
                  className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Experiências
                </Link>
              </li>
              <li>
                <Link
                  to="/galeria"
                  className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  to="/contactos"
                  className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Contactos & Recepção */}
          <div className="md:col-span-4 space-y-6">
            <h3 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#A38250]">
              Recepção & Concierge
            </h3>
            <div className="space-y-4 text-xs text-stone-400 font-light leading-relaxed">
              <div>
                <strong className="font-medium text-white block uppercase tracking-[0.25em] text-[9px] mb-1">
                  Morada
                </strong>
                <span>
                  Rua Missões do Espirito Santo - Quinta da Leira
                  <br />
                  5050-068 Godim, Peso da Régua
                </span>
              </div>
              <div>
                <strong className="font-medium text-white block uppercase tracking-[0.25em] text-[9px] mb-1">
                  Email Direto
                </strong>
                <a
                  href="mailto:stay@quintadaleira.com"
                  className="text-amber-200 hover:underline tracking-wider"
                >
                  stay@quintadaleira.com
                </a>
              </div>
              <div>
                <strong className="font-medium text-white block uppercase tracking-[0.25em] text-[9px] mb-1">
                  Telefone / Concierge
                </strong>
                <span className="tracking-wider">+351 912 345 678</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Inferior de Direitos e Termos */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-500 uppercase tracking-[0.25em] gap-4">
          <p>
            © {new Date().getFullYear()} Quinta da Leira. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-8">
            <Link
              to="/privacidade"
              className="hover:text-stone-300 transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos"
              className="hover:text-stone-300 transition-colors"
            >
              Termos e Condições
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
