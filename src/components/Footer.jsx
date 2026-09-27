import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const navLinks = [
    { to: "/", label: t("nav.inicio") },
    { to: "/a-quinta", label: t("nav.quinta") },
    { to: "/alojamento", label: t("nav.alojamento") },
    { to: "/experiencias", label: t("nav.experiencias") },
    { to: "/galeria", label: t("nav.galeria") },
    { to: "/contactos", label: t("nav.contactos") },
  ];

  return (
    <footer className="bg-[#0e1413] text-[#FBF9F5] pt-28 pb-16 px-6 md:px-12 border-t border-[#A38250]/30 relative overflow-hidden">
      {/* Linha superior de brilho dourado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#A38250]/50 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-white/10">
        {/* Coluna 1: Marca & Filosofia */}
        <div className="md:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-light tracking-[0.5em] uppercase text-[#A38250]">
              {t("footer.regiao")}
            </span>
            <h2 className="text-3xl font-serif font-light tracking-[0.15em] uppercase text-white">
              Quinta da Leira
            </h2>
          </div>
          <p className="text-stone-400 font-light leading-relaxed text-xs md:text-sm max-w-sm">
            {t("footer.descricao")}
          </p>

          <div className="pt-2 flex flex-col space-y-4 text-xs font-mono tracking-widest text-[#A38250]">
            <span>GPS: 41.1892° N, 7.4821° W</span>

            <div className="space-y-2 pt-1">
              <h4 className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-stone-300">
                {t("footer.redesSociais")}
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
            {t("footer.navegacao")}
          </h3>
          <ul className="space-y-3.5 text-xs tracking-[0.2em] uppercase text-stone-400 font-light">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-white transition-colors duration-300 inline-block hover:translate-x-1 transform"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 3: Contactos & Receção */}
        <div className="md:col-span-4 space-y-6">
          <h3 className="text-[10px] font-semibold tracking-[0.4em] uppercase text-[#A38250]">
            {t("footer.rececao")}
          </h3>
          <div className="space-y-4 text-xs text-stone-400 font-light leading-relaxed">
            <div>
              <strong className="font-medium text-white block uppercase tracking-[0.25em] text-[9px] mb-1">
                {t("footer.morada")}
              </strong>
              <span>
                Rua Missões do Espirito Santo - Quinta da Leira
                <br />
                5050-068 Godim, Peso da Régua
              </span>
            </div>
            <div>
              <strong className="font-medium text-white block uppercase tracking-[0.25em] text-[9px] mb-1">
                {t("footer.email")}
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
                {t("footer.telefone")}
              </strong>
              <span className="tracking-wider">+351 912 345 678</span>
            </div>
          </div>
        </div>
      </div>

      {/* Barra Inferior de Direitos e Termos */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-500 uppercase tracking-[0.25em] gap-4">
        <p>
          © {new Date().getFullYear()} Quinta da Leira. {t("footer.direitos")}
        </p>
        <div className="flex space-x-8">
          <Link
            to="/privacidade"
            className="hover:text-stone-300 transition-colors"
          >
            {t("footer.privacidade")}
          </Link>
          <Link to="/termos" className="hover:text-stone-300 transition-colors">
            {t("footer.termos")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
