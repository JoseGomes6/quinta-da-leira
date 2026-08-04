import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Experiencias() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

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
        setSelectedExperience(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { to: "/a-quinta", label: t("quinta") || "A Quinta" },
    { to: "/alojamento", label: t("alojamento") || "Alojamento" },
    { to: "/experiencias", label: t("experiencias") || "Experiências" },
    { to: "/galeria", label: t("galeria") || "Galeria" },
    { to: "/contactos", label: t("contactos") || "Contactos" },
  ];

  const experienciasLista = [
    {
      id: 1,
      titulo: "Provas de Vinho Privadas",
      subtitulo: "Terroir Centenário",
      descricao:
        "Mergulhe os seus sentidos em provas guiadas dos nossos raros vinhos do Porto e DOC Douro de produção própria, conduzidas pelo nosso enólogo principal entre antigas paredes de xisto.",
      detalhes:
        "Inclui uma seleção cuidada de 5 reservas de colheita acompanhadas por queijos regionais artesanais e enchidos. Duração: aprox. 2 horas.",
      src: "b1.jpeg",
    },
    {
      id: 2,
      titulo: "Passeios pelas Vinhas em Socalcos",
      subtitulo: "Caminhar pelas Encostas",
      descricao:
        "Explore as dramáticas encostas classificadas como Património Mundial da UNESCO a pé ou de 4x4. Descubra as tradições vitivinícolas únicas do Vale do Douro passadas de geração em geração.",
      detalhes:
        "Excursão privada guiada pelas vinhas históricas, terminando com um brinde ao pôr do sol no miradouro panorâmico mais alto da propriedade.",
      src: "foto-hero1.jpeg",
    },
    {
      id: 3,
      titulo: "Cruzeiros no Rio Douro",
      subtitulo: "Navegar pelas Águas de Silêncio",
      descricao:
        "Experimente a majestade do Rio Douro a bordo de um barco rabelo tradicional ou iate de luxo privado. Testemunhe as paisagens verticais que se erguem diretamente a partir da água.",
      detalhes:
        "Serviço de charter exclusivo completo com serviço de esmolder a bordo e cesto de piquenique gourmet.",
      src: "b5.jpeg",
    },
  ];

  return (
    <div className="bg-[#FBF9F5] text-[#1C2826] antialiased font-light selection:bg-[#E2D4C3] selection:text-[#1C2826]">
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
            ? "bg-[#182220]/90 backdrop-blur-md py-4 shadow-xl border-b border-white/10"
            : "bg-[#182220]/90 backdrop-blur-md py-6 border-b border-white/10"
        }`}
      >
        <nav className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 md:px-12">
          <Link
            to="/"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="text-[10px] font-light tracking-[0.4em] uppercase text-white/80 group-hover:text-amber-200 transition-colors duration-500">
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
                {t("reservar") || "Reservar"}
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col justify-center items-end space-y-1.5 w-8 h-8 lg:hidden focus:outline-none group"
            aria-label="Abrir Menu"
          >
            <span className="block w-6 h-[1px] bg-white group-hover:w-8 transition-all duration-300" />
            <span className="block w-4 h-[1px] bg-white group-hover:w-8 transition-all duration-300" />
            <span className="block w-6 h-[1px] bg-white group-hover:w-8 transition-all duration-300" />
          </button>
        </nav>
      </header>

      {/* ---------------- MOBILE MENU ---------------- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#141C1A]/95 backdrop-blur-lg flex flex-col justify-between p-8 lg:hidden animate-fade-up">
          <div className="flex justify-between items-center w-full">
            <span className="text-[10px] font-light tracking-[0.4em] uppercase text-amber-200/80">
              Quinta da Leira
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 bg-white/10 text-amber-200 rounded-full flex items-center justify-center border border-white/20 focus:outline-none"
              aria-label="Fechar Menu"
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
                className="text-2xl font-serif font-light text-white hover:text-amber-200 tracking-wider transition-colors"
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
                      ? "text-amber-200 font-semibold border-b border-amber-200"
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
              className="block w-full bg-amber-200 text-[#1C2826] text-center font-semibold py-3 text-xs tracking-[0.25em] uppercase"
            >
              {t("reservar") || "Reservar"}
            </Link>
          </div>
        </div>
      )}

      {/* ---------------- HERO SECTION ---------------- */}
      <main className="pt-36 pb-32">
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36 animate-fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <div className="relative h-[450px] md:h-[600px] w-full overflow-hidden rounded-[2px] shadow-2xl group">
                <img
                  src="b1.jpeg"
                  alt="Experiências Quinta da Leira"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center space-x-4">
                <span className="w-8 h-[1px] bg-[#A38250]" />
                <span className="text-[10px] font-semibold tracking-[0.5em] uppercase text-[#A38250]">
                  Jornadas Personalizadas
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-light text-[#1C2826] leading-tight">
                Encontros Íntimos com a Alma do Douro
              </h1>
              <p className="text-stone-600 font-light leading-relaxed text-base md:text-lg">
                Cada momento na Quinta da Leira é desenhado para o ligar
                profundamente à terra, à herança cultural e ao luxo tranquilo do
                Vale do Douro. Descubra o nosso conjunto exclusivo de
                experiências de assinatura.
              </p>
              <div className="pt-4 border-t border-stone-300 flex items-center justify-between text-xs tracking-[0.25em] uppercase text-stone-500">
                <span>Itinerários Sob Medida</span>
                <span className="text-[#A38250] font-semibold">
                  Concierge Privado
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- EXPERIENCES LIST / GRID ---------------- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
            <span className="text-[10px] tracking-[0.6em] uppercase text-[#A38250] font-semibold">
              — Experiências de Assinatura
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1C2826]">
              Concebidas para o Viajante Exigente
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
                    Ver Experiência →
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
            className="relative max-w-4xl w-full bg-[#182220] text-white p-8 md:p-12 rounded-[2px] shadow-2xl border border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar Posicionado Dentro do Modal */}
            <button
              onClick={() => setSelectedExperience(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 text-amber-200 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors focus:outline-none z-50"
              aria-label="Fechar"
            >
              ✕
            </button>

            <div className="h-[300px] md:h-[400px] w-full rounded-[2px] overflow-hidden">
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
                  Detalhes
                </span>
                <p className="text-xs text-stone-300 font-light leading-relaxed">
                  {selectedExperience.detalhes}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

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
