import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Alojamento() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
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

  const navLinks = [
    { to: "/a-quinta", label: t("quinta") || "A Quinta" },
    { to: "/alojamento", label: t("alojamento") || "Alojamento" },
    { to: "/experiencias", label: t("experiencias") || "Experiências" },
    { to: "/galeria", label: t("galeria") || "Galeria" },
    { to: "/contactos", label: t("contactos") || "Contactos" },
  ];

  const amenitiesData = [
    {
      category: "Conforto & Geral",
      items: [
        "Wi-Fi",
        "Ar condicionado em todas as divisões",
        "Televisão em todos os quartos",
        "Uso exclusivo de toda a propriedade",
      ],
    },
    {
      category: "Cozinha & Refeições",
      items: [
        "Cozinha totalmente equipada",
        "Fogão elétrico",
        "Chaleira elétrica",
        "Micro-ondas",
        "Torradeira",
        "Máquina de lavar loiça",
        "Loiça completa",
        "Panelas e frigideiras",
        "Utensílios de cozinha",
      ],
    },
    {
      category: "Comodidades da Casa de Banho",
      items: [
        "Secador de cabelo",
        "Espelho anti-embaciamento",
        "Amenities de banho de cortesia",
        "Toalhas de alta qualidade",
        "Toalheiros aquecidos",
        "Duche efeito chuva",
        "Papel higiénico e suporte",
      ],
    },
    {
      category: "Lazer & Exterior",
      items: [
        "Piscina exterior panorâmica",
        "Espreguiçadeiras",
        "Amplo terraço",
        "Varandas privativas com resguardo em ferro",
        "Enquadramento com vinhas em socalcos",
        "Arquitetura contemporânea e xisto tradicional",
        "Vista panorâmica sobre a encosta do Douro",
        "Zonas de circulação em patamares",
      ],
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1A1F1E] antialiased font-light selection:bg-[#D4AF37]/20 selection:text-[#1A1F1E] overflow-x-hidden">
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

      <section className="pt-32 md:pt-40 min-h-[92vh] grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-center px-8 md:px-16 py-16 space-y-10 bg-[#FAF8F5]">
          <div className="space-y-4">
            <span className="text-[10px] tracking-[0.5em] uppercase text-stone-400 font-mono block">
              Alojamento & Suites / Alijó
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-[#1A1F1E] tracking-wide leading-[1.2]">
              O Alojamento
            </h1>
            <div className="w-16 h-[1px] bg-[#A38250]/60" />
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-sm md:text-base text-stone-800 font-light leading-relaxed pl-5 border-l border-stone-300">
              Desenhado para proporcionar o máximo descanso, o nosso espaço
              combina o charme rústico do granito duriense com comodidades topo
              de gama.
            </p>
            <p className="text-xs md:text-sm text-stone-600 font-light leading-relaxed pr-4 pt-1">
              Com capacidade para acolher confortavelmente até 12 adultos em
              regime de exclusividade, cada assoalhada foi decorada a pensar no
              bem-estar total dos nossos hóspedes.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 relative min-h-[480px] lg:min-h-full">
          <img
            src="alojamento2.jpeg"
            alt="Alojamento Quinta da Leira"
            className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.03] absolute inset-0"
          />
        </div>
      </section>

      <main className="py-24 px-8 md:px-16 max-w-7xl mx-auto space-y-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="hidden lg:block lg:col-span-5" />
          <div className="lg:col-span-7 space-y-5 max-w-xl pl-2 lg:pl-6 border-l border-stone-300/80">
            <span className="text-[10px] tracking-[0.4em] text-[#A38250] font-mono block">
              01 / AS SUITES E QUARTOS
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-[#1A1F1E] font-light">
              Privacidade Absoluta
            </h3>
            <p className="text-sm text-stone-600 font-light leading-relaxed">
              Quartos espaçosos equipados com televisão, ar condicionado
              individual e camas de alta qualidade para assegurar noites de
              absoluto sossego sobre o vale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-stone-200">
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-6">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] text-[#A38250] font-mono block">
                Exclusividade Total
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#1A1F1E] font-light leading-tight">
                Espaços amplos para <br />
                <span className="italic font-normal text-stone-600">
                  famílias e grupos
                </span>
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-[#A38250]/40" />

            <div className="space-y-6 text-sm text-stone-600 font-light leading-relaxed">
              <p>
                A propriedade dispõe de acolhedoras zonas comuns concebidas para
                promover o convívio, complementadas por recantos que garantem a
                tranquilidade de cada hóspede. Seja em estadia exclusiva ou em
                reservas independentes, o conforto é sempre uma prioridade.
              </p>
              <p>
                Os espaços foram meticulosamente desenhados para acolher com o
                máximo conforto, oferecendo uma atmosfera intimista e
                sofisticada onde cada hóspede se sente em casa, seja numa
                escapada a dois ou em perfeita exclusividade.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden aspect-[4/3] md:aspect-[4/5] shadow-2xl rounded-sm">
              <img
                src="alojamento3.jpeg"
                alt="Quartos Quinta da Leira"
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
              Capacidade Máxima
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-wide text-white">
            Até{" "}
            <span className="italic font-normal text-[#A38250]">
              12 Adultos
            </span>
          </h2>
          <div className="w-12 h-[1px] bg-[#A38250]/60 mx-auto" />
          <p className="text-sm md:text-base text-stone-400 font-light max-w-xl mx-auto leading-relaxed pt-1">
            Reserve a propriedade por inteiro e desfrute de momentos
            inesquecíveis em conjunto, com acesso irrestrito à piscina privada e
            a todas as comodidades.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#A38250] font-mono block">
            Inventário & Comodidades
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1A1F1E]">
            Tudo o que encontra à sua disposição
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
                  0{idx + 1} / EQUIPAMENTOS
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
                  alt={`Comodidade ${index}`}
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
                  Detalhes ({activeImage + 1} / 4)
                </span>
                <p className="text-xs uppercase tracking-widest font-light">
                  {amenitiesData[activeImage]?.category || "Quinta da Leira"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0e1413] text-[#FBF9F5] pt-28 pb-16 px-6 md:px-12 border-t border-[#A38250]/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#A38250]/50 to-transparent" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-white/10">
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

          <div className="md:col-span-3 space-y-6">
            <h3 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#A38250]">
              Navegação
            </h3>
            <ul className="space-y-3.5 text-xs tracking-[0.2em] uppercase text-stone-400 font-light">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  Início
                </Link>
              </li>
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
