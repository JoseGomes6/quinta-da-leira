import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

function App() {
  const imgDia = "/foto-hero1.jpeg";
  const imgNoite = "/hero-noite.png";

  // --- DADOS DOS BUNGALOWS ---
  const bungalows = [
    {
      id: 1,
      nome: "Refúgio da Vinha",
      sub: "Piscina Privada & Vista Panorâmica",
      area: "85 m²",
      hospedes: "2 Adultos",
      cama: "King Size",
      descricao:
        "Suspenso sobre as vinhas socalcadas, este refúgio oferece privacidade absoluta. Dispõe de um terraço privativo com piscina infinita aquecida e vistas ininterruptas sobre o Vale do Douro.",
      imagens: [
        "/b1.jpeg",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
      ],
      comodidades: [
        "Piscina Privada Aquecida",
        "Terraço Panorâmico",
        "Pequeno-Almoço Incluído",
        "Lareira a Lenha",
        "Wi-Fi de Alta Velocidade",
        "Adega Privativa de Vinhos",
      ],
    },
    {
      id: 2,
      nome: "Suíte do Sobral",
      sub: "Jacuzzi Aquecido & Terraço Privativo",
      area: "70 m²",
      hospedes: "2 Adultos",
      cama: "King Size",
      descricao:
        "Rodeado por sobreiros seculares, esta suíte combina a arquitetura em madeira nobre com o conforto contemporâneo. O destaque é o jacuzzi exterior em madeira de cedro.",
      imagens: [
        "/b2.jpeg",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
      ],
      comodidades: [
        "Jacuzzi Exterior em Cedro",
        "Deck em Madeira",
        "Cafeteira Espresso",
        "Ar Condicionado",
        "Minibar Selecionado",
        "Cama King Size Extra Comfort",
      ],
    },
    {
      id: 3,
      nome: "Villa do Penedo",
      sub: "Sombra Secular & Privacidade Total",
      area: "95 m²",
      hospedes: "2 a 4 Hospedes",
      cama: "1 King Size + Sofa Cama Premium",
      descricao:
        "Construída em redor das formações rochosas naturais da quinta, esta villa oferece uma fusão única entre a rusticidade do granito e a elegância do design moderno.",
      imagens: [
        "/b3.jpeg",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
      ],
      comodidades: [
        "Cozinha Equipada",
        "Sala de Estar Espaçosa",
        "Jardim Privativo",
        "Chuveiro Rainshower Exterior",
        "Estação de Carregamento EV",
      ],
    },
    {
      id: 4,
      nome: "Casa do Rio",
      sub: "Deck Sobre a Água & Lareira Externa",
      area: "65 m²",
      hospedes: "2 Adultos",
      cama: "Queen Size",
      descricao:
        "Localizada na zona mais baixa da propriedade, junto ao riacho natural. Som relaxante da água corrente, fogueira privada ao ar livre e ambiente intimista.",
      imagens: [
        "/b4.jpeg",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
      ],
      comodidades: [
        "Deck suspenso sobre a água",
        "Lareira Exterior (Fire Pit)",
        "Telescópio para Observação Noturna",
        "Sistema de Som Bluetooth Marshall",
      ],
    },
    {
      id: 5,
      nome: "Paz do Pôr do Sol",
      sub: "Arquitetura em Granito & Vista Vale",
      area: "110 m²",
      hospedes: "4 Hospedes",
      cama: "2 Suítes King Size",
      descricao:
        "A maior residência da quinta, perfeitamente orientada a oeste para capturar o espetáculo do pôr do sol sobre o rio Douro. Ideal para estadias prolongadas.",
      imagens: [
        "/b5.jpeg",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
      ],
      comodidades: [
        "Duas Suítes Independentes",
        "Piscina Privada Panorâmica",
        "Serviço de Chef Privado (Sob Pedido)",
        "Garagem Privada",
      ],
    },
  ];

  // --- ESTADOS ---
  const [sliderPos, setSliderPos] = useState(50);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedBungalow, setSelectedBungalow] = useState(null);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const containerRef = useRef(null);

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
        setSelectedBungalow(null);
        setIsMenuOpen(false);
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

  const navLinks = [
    { to: "/a-quinta", label: t("quinta") || "A Quinta" },
    { to: "/alojamento", label: t("alojamento") || "Alojamento" },
    { to: "/experiencias", label: t("experiencias") || "Experiências" },
    { to: "/galeria", label: t("galeria") || "Galeria" },
    { to: "/contactos", label: t("contactos") || "Contactos" },
  ];

  return (
    <div className="bg-[#FBF9F5] text-[#1C2826] antialiased font-light scroll-smooth selection:bg-[#E2D4C3] selection:text-[#1C2826]">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes modalShow {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-down {
          animation: slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-modal-show {
          animation: modalShow 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ---------------- NAVBAR ---------------- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 animate-slide-down ${
          scrolled
            ? "bg-[#182220]/90 backdrop-blur-md py-4 shadow-xl border-b border-white/10"
            : "bg-transparent py-8"
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

          {/* Menu Desktop */}
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

          {/* Botão Hamburger Telemóvel */}
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

      {/* ---------------- MENU MÓVEL INTEGRADO ---------------- */}
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
              alt="Noite"
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
                alt="Dia"
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
                Alijó, Vale do Douro
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-light text-white leading-tight">
                O Luxo do Silêncio no Coração do Douro
              </h1>
              <p className="text-[10px] tracking-[0.25em] text-stone-300 font-light uppercase pt-2">
                {t("instrucao") ||
                  "Deslize para ver a transição entre o dia e a noite"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 2. SOBRE A QUINTA (COM OS NOVOS TEXTOS SOPHISTICADOS) ---------------- */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center space-y-8">
        <p className="text-[10px] tracking-[0.6em] uppercase text-[#A38250] font-semibold animate-fade-up">
          — 01 / A Quinta
        </p>
        <h2 className="text-2xl md:text-4xl font-serif font-light text-[#1C2826] uppercase animate-fade-up delay-100">
          Silêncio, Vinhas e Memória no Coração do Douro
        </h2>
        <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto animate-fade-up delay-200" />
        <p className="text-base md:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto animate-fade-up delay-300">
          Suspensa entre o curso sinuoso do rio e o céu duriense, a Quinta da
          Leira é um santuário de exclusividade. Aqui, o ritmo do tempo abranda
          para dar lugar ao luxo do silêncio, onde a arquitetura contemporânea
          dialoga em perfeita harmonia com socalcos seculares e uma
          hospitalidade intimista.
        </p>
      </section>

      {/* ---------------- 3. BUNGALOWS / ALOJAMENTO ---------------- */}
      <section className="py-32 bg-[#F4F0EB] border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#A38250] font-bold border-l-2 border-[#A38250] pl-4">
                — 02 / Alojamento
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1C2826]">
                Residências Exclusivas
              </h2>
            </div>
            <p className="text-xs text-stone-500 font-light max-w-md leading-relaxed border-l md:border-l-0 md:border-r border-stone-300 pl-4 md:pl-0 md:pr-4">
              Cada espaço foi desenhado para proporcionar uma imersão total na
              natureza, garantindo conforto absoluto e privacidade sem
              precedentes.
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
                          Explorar Refúgio
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
              aria-label="Fechar"
            >
              ✕
            </button>

            <div className="p-6 md:p-12 space-y-12">
              <div className="space-y-3 border-b border-stone-300 pb-6 pr-12">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#A38250]"></span>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#A38250] font-bold">
                    Residência Privada Exclusiva
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
                  Vista Principal da Residência
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
                    Área Habitável
                  </span>
                  <span className="text-xs md:text-sm font-serif text-stone-900 font-medium">
                    {selectedBungalow.area}
                  </span>
                </div>
                <div className="border-x border-stone-300/60">
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-400 mb-1">
                    Capacidade
                  </span>
                  <span className="text-xs md:text-sm font-serif text-stone-900 font-medium">
                    {selectedBungalow.hospedes}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-stone-400 mb-1">
                    Configuração Cama
                  </span>
                  <span className="text-xs md:text-sm font-serif text-stone-900 font-medium">
                    {selectedBungalow.cama}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#A38250] font-semibold">
                    Sobre a Residência
                  </h3>
                  <p className="text-sm text-stone-600 font-light leading-relaxed">
                    {selectedBungalow.descricao}
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#A38250] font-semibold">
                    Comodidades Incluídas
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
                      Galeria de Detalhes & Atmosfera
                    </h3>
                    <span className="text-[10px] tracking-widest text-stone-400 uppercase font-mono">
                      Outros Ângulos
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
                          alt={`${selectedBungalow.nome} - Detalhe ${idx + 2}`}
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
                  Disponibilidade sob consulta prévia e confirmação
                </p>
                <Link
                  to="/contactos"
                  onClick={() => setSelectedBungalow(null)}
                  className="w-full md:w-auto bg-[#182220] hover:bg-[#253330] text-amber-200 font-semibold px-8 py-4 tracking-[0.25em] text-[10px] uppercase text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-amber-200/20"
                >
                  Solicitar Reserva para este Bungalow
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
            — 03 / Experiências
          </p>
          <h2 className="text-2xl md:text-4xl font-serif font-light text-[#1C2826] uppercase">
            Vivências Exclusivas no Douro
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              img: "/exp1.jpeg",
              text: "Provas de Vinho & Vinyard Tours Privados",
            },
            {
              img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=600&q=80",
              text: "Gastronomia Duriense com Chef Privado",
            },
            {
              img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
              text: "Percursos Pedestres e Passeios Fluviais",
            },
          ].map((exp, idx) => (
            <div
              key={idx}
              className="group space-y-4 cursor-pointer overflow-hidden p-2 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-80 overflow-hidden border border-stone-200/80 shadow-sm relative">
                <img
                  src={exp.img}
                  alt={exp.text}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-stone-700 font-medium pt-2 transition-colors duration-300 group-hover:text-[#A38250]">
                {exp.text}
              </p>
            </div>
          ))}
        </div>
      </section>

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

export default App;
