import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  PT: {
    translation: {
      quinta: "A Quinta",
      alojamento: "Alojamento",
      experiencias: "Experiências",
      galeria: "Galeria",
      contactos: "Contactos",
      reservar: "Reservar",
      fechar: "Fechar",
      localizacao: "Douro, Portugal",
      localizacaoTxt: "Peso da Régua, Douro Valley",
      titulo: "O Refúgio do Tempo e do Silêncio",
      instrucao:
        "Deslize a barra para alternar entre a serenidade solar e o charme noturno",
      txtQuintaTitulo: "Silêncio, Vinhas e Memória no Coração do Douro",
      txtQuintaDesc:
        "Suspensa entre o curso sinuoso do rio e o céu duriense, a Quinta da Leira é um santuário de exclusividade. Aqui, o ritmo do tempo abranda para dar lugar ao luxo do silêncio, onde a arquitetura contemporânea dialoga em perfeita harmonia com socalcos seculares e uma hospitalidade intimista.",
      txtBungalowsTitulo: "Espaços de Autoria",
      txtBungalowsDesc:
        "Bungalows premium suspensos sobre a paisagem, onde as paredes de vidro dissolvem a fronteira entre o interior e o vale.",
      txtExpTitulo: "A Arte de Vivenciar o Douro",
      txtExp1: "Piscina Infinita Panorâmica",
      txtExp2: "Pequeno-Almoço de Produtos Locais",
      txtExp3: "Trilhos Privados & Provas de Vinho",
      txtFooterForm: "Solicitar Disponibilidade",
      txtFooterNome: "Nome completo",
      txtFooterCheck: "Data pretendida",
      txtFooterBtn: "ENVIAR PEDIDO DE RESERVA",
    },
  },
  EN: {
    translation: {
      quinta: "The Property",
      alojamento: "Accommodation",
      experiencias: "Experiences",
      galeria: "Gallery",
      contactos: "Contacts",
      reservar: "Book Now",
      fechar: "Close",
      localizacao: "Douro Valley, Portugal",
      localizacaoTxt: "Peso da Régua, Douro Valley",
      titulo: "The Sanctuary of Time and Silence",
      instrucao:
        "Slide the bar to alternate between solar serenity and nocturnal charm",
      txtQuintaTitulo: "Where Nature and Douro Tradition Meet",
      txtQuintaDesc:
        "Set within the slopes of the Douro Valley, Quinta da Leira offers bespoke private hospitality.",
      txtBungalowsTitulo: "Signature Spaces",
      txtBungalowsDesc:
        "Premium bungalows suspended over the landscape, where glass walls dissolve the boundary between the interior and the valley.",
      txtExpTitulo: "The Art of Experiencing the Douro",
      txtExp1: "Panoramic Infinity Pool",
      txtExp2: "Local Produce Breakfast Basket",
      txtExp3: "Private Trails & Wine Tastings",
      txtFooterForm: "Request Availability",
      txtFooterNome: "Full name",
      txtFooterCheck: "Desired date",
      txtFooterBtn: "SEND BOOKING REQUEST",
    },
  },
  FR: {
    translation: {
      quinta: "Le Domaine",
      alojamento: "Hébergement",
      experiencias: "Expériences",
      galeria: "Galerie",
      contactos: "Contacts",
      reservar: "Réserver",
      fechar: "Fermer",
      localizacao: "Vallée du Douro, Portugal",
      localizacaoTxt: "Alijó, Vallée du Douro",
      titulo: "Le Refuge du Temps et du Silence",
      instrucao:
        "Glissez la barre pour alterner entre sérénité solaire et charme nocturne",
      txtQuintaTitulo: "Où la Nature et la Tradition du Douro se Rencontrent",
      txtQuintaDesc:
        "Niché sur les collines du Douro, la Quinta da Leira propose un accueil privé sur mesure.",
      txtBungalowsTitulo: "Espaces d'Auteur",
      txtBungalowsDesc:
        "Des bungalows haut de gamme suspendus au-dessus du paysage, où les parois de verre dissolvent la frontière entre l'intérieur et la vallée.",
      txtExpTitulo: "L'Art de Vivre le Douro",
      txtExp1: "Piscine Panoramique à Débordement",
      txtExp2: "Petit-Déjeuner de Produits Locaux",
      txtExp3: "Sentiers Privés & Dégustations de Vins",
      txtFooterForm: "Demander la Disponibilité",
      txtFooterNome: "Nom complet",
      txtFooterCheck: "Date souhaitée",
      txtFooterBtn: "ENVOYER LA DEMANDE DE RÉSERVATION",
    },
  },
  ES: {
    translation: {
      quinta: "La Finca",
      alojamento: "Alojamiento",
      experiencias: "Experiencias",
      galeria: "Galería",
      contactos: "Contactos",
      reservar: "Reservar",
      fechar: "Cerrar",
      localizacao: "Valle del Duero, Portugal",
      localizacaoTxt: "Alijó, Valle del Duero",
      titulo: "El Refugio del Tiempo y del Silencio",
      instrucao:
        "Deslice la barra para alternar entre la serenidad solar y el encanto nocturno",
      txtQuintaTitulo:
        "Donde la Naturaleza y la Tradición del Duero se Encuentran",
      txtQuintaDesc:
        "Ubicada en las laderas del Duero, Quinta da Leira ofrece hospitalidad privada a medida.",
      txtBungalowsTitulo: "Espacios de Autor",
      txtBungalowsDesc:
        "Bungalows premium suspendidos sobre el paisaje, donde las paredes de cristal disuelven la frontera entre el interior y el valle.",
      txtExpTitulo: "El Arte de Vivir el Duero",
      txtExp1: "Piscina Infinita Panorámica",
      txtExp2: "Desayuno con Productos Locales",
      txtExp3: "Senderos Privados y Catas de Vino",
      txtFooterForm: "Solicitar Disponibilidad",
      txtFooterNome: "Nombre completo",
      txtFooterCheck: "Fecha deseada",
      txtFooterBtn: "ENVIAR SOLICITUD DE RESERVA",
    },
  },
  IT: {
    translation: {
      quinta: "La Tenuta",
      alojamento: "Alloggi",
      experiencias: "Esperienze",
      galeria: "Galleria",
      contactos: "Contatti",
      reservar: "Prenota",
      fechar: "Chiudi",
      localizacao: "Valle del Douro, Portugal",
      localizacaoTxt: "Alijó, Valle del Douro",
      titulo: "Il Rifugio del Tempo e del Silenzio",
      instrucao:
        "Scorri la barra per alternare tra serenità solare e fascino notturno",
      txtQuintaTitulo: "Dove la Natura e la Tradizione del Douro si Incontrano",
      txtQuintaDesc:
        "Situata tra i pendii del Douro, Quinta da Leira offre un'ospitalità privata su misura.",
      txtBungalowsTitulo: "Spazi d'Autore",
      txtBungalowsDesc:
        "Bungalow premium sospesi sul paesaggio, dove pareti di vetro dissolvono il confine tra l'interno e la valle.",
      txtExpTitulo: "L'Arte di Vivere il Douro",
      txtExp1: "Piscina a Sfioro Panoramica",
      txtExp2: "Colazione con Prodotti Locali",
      txtExp3: "Sentieri Privati e Degustazioni di Vino",
      txtFooterForm: "Richiedi Disponibilità",
      txtFooterNome: "Nome completo",
      txtFooterCheck: "Data desiderata",
      txtFooterBtn: "INVIA RICHIESTA DI PRENOTAZIONE",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "PT",
  fallbackLng: "EN",
  interpolation: { escapeValue: false },
});

export default i18n;
