import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Ao mudar de página, volta ao topo (o router mantém a posição de scroll por defeito)
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
