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
      menu: "Menu",
      localizacao: "Douro, Portugal",
      localizacaoTxt: "Peso da Régua, Douro Valley",
      douroValley: "Douro Valley",
      quintaDaLeira: "Quinta da Leira",
      titulo: "O Refúgio do Tempo e do Silêncio",
      instrucao:
        "Deslize a barra para alternar entre a serenidade solar e o charme noturno",
      alojamentoTag: "— 02 / Alojamento",
      alojamentoTitulo: "Residências Exclusivas",
      alojamentoDesc:
        "Cada espaço foi desenhado para proporcionar uma imersão total na natureza, garantindo conforto absoluto e privacidade sem precedentes.",
      explorarRefugio: "Explorar Refúgio",

      b1Nome: "Residência Touriga Nacional",
      b1Sub: "Piscina Privada & Vista Panorâmica sobre as Vinhas",
      b1Desc:
        "Suspenso sobre os socalcos debruçados para o Douro, este refúgio principal oferece privacidade absoluta. Dispõe de um generoso deck em madeira com piscina infinita privativa, enquadrada pela rusticidade das paredes de xisto e granito visíveis na paisagem.",

      b2Nome: "Suíte Arinto & Viosinho",
      b2Sub: "Jacuzzi Exterior & Deck Privativo",
      b2Desc:
        "Rodeado pela vegetação nativa e frentes de vidro que trazem a natureza para dentro de casa, este espaço combina a madeira nobre com o conforto contemporâneo. O destaque absoluto vai para o jacuzzi exterior em cedro integrado no deck.",

      b3Nome: "Villa Tinta Roriz",
      b3Sub: "Arquitetura em Granito & Sombra Secular",
      b3Desc:
        "Construída em perfeita harmonia com as formações rochosas e penedos naturais da encosta duriense, esta villa funde a solidez do granito tradicional com linhas de decoração modernas e acolhedoras.",

      b4Nome: "Refúgio Touriga Franca",
      b4Sub: "Ambiente Íntimo & Fogueira Exterior",
      b4Desc:
        "Um refúgio acolhedor com tons terrosos e iluminação intimista, pensado ao detalhe para momentos a dois. Conta com zonas de estar exteriores protegidas e vistas sublimes sobre os socalcos da região.",

      b5Nome: "Casa Grande da Leira",
      b5Sub: "Residência Premium & Pôr do Sol no Douro",
      b5Desc:
        "A joia da coroa da propriedade, perfeitamente orientada a poente para capturar o espetáculo dourado do pôr do sol sobre o rio. Tetos altos em madeira, amplos vãos envidraçados e total exclusividade.",

      residenciaprivada: "Residência Privada Exclusiva",
      vistaPrincipal: "Vista Principal da Residência",
      areaHabitavel: "Área Habitável",
      capacidade: "Capacidade",
      configCama: "Configuração Cama",
      sobreResidencia: "Sobre a Residência",
      comodidadesIncluidas: "Comodidades Incluídas",
      galeriaDetalhes: "Galeria de Detalhes & Atmosfera",
      outrosAngulos: "Outros Ângulos",
      disponibilidadeConsulta:
        "Disponibilidade sob consulta prévia e confirmação",
      solicitarReservaBungalow: "Solicitar Reserva para este Bungalow",

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

      // Textos adicionais detalhados para a página de alojamento e modais
      areaValor1: "120 m²",
      areaValor2: "85 m²",
      areaValor3: "110 m²",
      areaValor4: "75 m²",
      areaValor5: "180 m²",

      capacidadeValor1: "2 a 3 Hóspedes",
      capacidadeValor2: "2 Hóspedes",
      capacidadeValor3: "2 a 4 Hóspedes",
      capacidadeValor4: "2 Hóspedes",
      capacidadeValor5: "4 a 6 Hóspedes",

      camaValor1: "1x King Size (ou 2x Individual)",
      camaValor2: "1x Queen Size",
      camaValor3: "1x King Size + Sofá-cama",
      camaValor4: "1x Queen Size",
      camaValor5: "2x King Size + 1x Suite",

      comodidade1: "Piscina Infinita Privativa",
      comodidade2: "Jacuzzi Exterior em Cedro",
      comodidade3: "Lareira / Fogueira Exterior",
      comodidade4: "Ar Condicionado e Piso Radiante",
      comodidade5: "Wi-Fi de Alta Velocidade",
      comodidade6: "Minibar com Vinhos da Região",
      comodidade7: "Produtos de Higiene Natural (Bio)",
      comodidade8: "Serviço de Pequeno-Almoço Incluído",
    },
  },
  EN: {
    translation: {
      quinta: "The Estate",
      alojamento: "Accommodation",
      experiencias: "Experiences",
      galeria: "Gallery",
      contactos: "Contacts",
      reservar: "Book Now",
      fechar: "Close",
      menu: "Menu",
      localizacao: "Douro, Portugal",
      localizacaoTxt: "Peso da Régua, Douro Valley",
      douroValley: "Douro Valley",
      quintaDaLeira: "Quinta da Leira",
      titulo: "The Sanctuary of Time and Silence",
      instrucao:
        "Slide the bar to alternate between solar serenity and nocturnal charm",
      alojamentoTag: "— 02 / Accommodation",
      alojamentoTitulo: "Exclusive Residences",
      alojamentoDesc:
        "Each space was designed to provide total immersion in nature, ensuring absolute comfort and unprecedented privacy.",
      explorarRefugio: "Explore Refuge",

      b1Nome: "Touriga Nacional Residence",
      b1Sub: "Private Pool & Panoramic Vineyard Views",
      b1Desc:
        "Suspended over the terraces overlooking the Douro, this main refuge offers absolute privacy. It features a generous wooden deck with a private infinity pool, framed by the rusticity of schist and granite walls visible in the landscape.",

      b2Nome: "Arinto & Viosinho Suite",
      b2Sub: "Outdoor Jacuzzi & Private Deck",
      b2Desc:
        "Surrounded by native vegetation and glass fronts that bring nature indoors, this space combines noble wood with contemporary comfort. The absolute highlight is the cedar outdoor jacuzzi integrated into the deck.",

      b3Nome: "Tinta Roriz Villa",
      b3Sub: "Granite Architecture & Secular Shade",
      b3Desc:
        "Built in perfect harmony with the rock formations and natural boulders of the Douro hillside, this villa fuses the solidity of traditional granite with modern and cozy decoration lines.",

      b4Nome: "Touriga Franca Refuge",
      b4Sub: "Intimate Atmosphere & Outdoor Fire Pit",
      b4Desc:
        "A cozy retreat with earthy tones and intimate lighting, designed down to the detail for moments for two. It features protected outdoor seating areas and sublime views over the region's terraces.",

      b5Nome: "Casa Grande da Leira",
      b5Sub: "Premium Residence & Douro Sunset",
      b5Desc:
        "The crown jewel of the property, perfectly oriented to the west to capture the golden spectacle of the sunset over the river. High wooden ceilings, large glass spans, and total exclusivity.",

      residenciaprivada: "Exclusive Private Residence",
      vistaPrincipal: "Main Residence View",
      areaHabitavel: "Living Area",
      capacidade: "Capacity",
      configCama: "Bed Configuration",
      sobreResidencia: "About the Residence",
      comodidadesIncluidas: "Included Amenities",
      galeriaDetalhes: "Details & Atmosphere Gallery",
      outrosAngulos: "Other Angles",
      disponibilidadeConsulta:
        "Availability upon prior request and confirmation",
      solicitarReservaBungalow: "Request Booking for this Bungalow",

      txtQuintaTitulo:
        "Silence, Vineyards and Memory in the Heart of the Douro",
      txtQuintaDesc:
        "Suspended between the winding course of the river and the Douro sky, Quinta da Leira is a sanctuary of exclusivity. Here, the rhythm of time slows down to give way to the luxury of silence, where contemporary architecture dialogues in perfect harmony with secular terraces and intimate hospitality.",
      txtBungalowsTitulo: "Signature Spaces",
      txtBungalowsDesc:
        "Premium bungalows suspended over the landscape, where glass walls dissolve the boundary between the interior and the valley.",
      txtExpTitulo: "The Art of Experiencing the Douro",
      txtExp1: "Panoramic Infinity Pool",
      txtExp2: "Local Produce Breakfast",
      txtExp3: "Private Trails & Wine Tastings",
      txtFooterForm: "Request Availability",
      txtFooterNome: "Full name",
      txtFooterCheck: "Desired date",
      txtFooterBtn: "SEND BOOKING REQUEST",

      areaValor1: "120 sqm",
      areaValor2: "85 sqm",
      areaValor3: "110 sqm",
      areaValor4: "75 sqm",
      areaValor5: "180 sqm",

      capacidadeValor1: "2 to 3 Guests",
      capacidadeValor2: "2 Guests",
      capacidadeValor3: "2 to 4 Guests",
      capacidadeValor4: "2 Guests",
      capacidadeValor5: "4 to 6 Guests",

      camaValor1: "1x King Size (or 2x Twin)",
      camaValor2: "1x Queen Size",
      camaValor3: "1x King Size + Sofa Bed",
      camaValor4: "1x Queen Size",
      camaValor5: "2x King Size + 1x Suite",

      comodidade1: "Private Infinity Pool",
      comodidade2: "Cedar Outdoor Jacuzzi",
      comodidade3: "Fireplace / Outdoor Fire Pit",
      comodidade4: "Air Conditioning and Underfloor Heating",
      comodidade5: "High-Speed Wi-Fi",
      comodidade6: "Minibar with Regional Wines",
      comodidade7: "Natural Organic Toiletries",
      comodidade8: "Breakfast Service Included",
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
      menu: "Menu",
      localizacao: "Vallée du Douro, Portugal",
      localizacaoTxt: "Peso da Régua, Vallée du Douro",
      douroValley: "Vallée du Douro",
      quintaDaLeira: "Quinta da Leira",
      titulo: "Le Refuge du Temps et du Silence",
      instrucao:
        "Glissez la barre pour alterner entre sérénité solaire et charme nocturne",
      alojamentoTag: "— 02 / Hébergement",
      alojamentoTitulo: "Résidences Exclusives",
      alojamentoDesc:
        "Chaque espace a été conçu pour offrir une immersion totale dans la nature, garantissant un confort absolu et une intimité sans précédent.",
      explorarRefugio: "Explorer le Refuge",

      b1Nome: "Résidence Touriga Nacional",
      b1Sub: "Piscine Privée & Vue Panoramique sur les Vignes",
      b1Desc:
        "Suspendu au-dessus des terrasses surplombant le Douro, ce refuge principal offre une intimité absolue. Il dispose d'une généreuse terrasse en bois avec piscine à débordement privée, encadrée par la rusticité des murs de schiste et de granit.",

      b2Nome: "Suite Arinto & Viosinho",
      b2Sub: "Jacuzzi Extérieur & Terrasse Privée",
      b2Desc:
        "Entouré de végétation indigène et de façades vitrées, cet espace allie bois noble et confort contemporain. Le point culminant est le jacuzzi extérieur en cèdre intégré à la terrasse.",

      b3Nome: "Villa Tinta Roriz",
      b3Sub: "Architecture en Granit & Ombrage Séculaire",
      b3Desc:
        "Construite en parfaite harmonie avec les formations rocheuses, cette villa associe la solidité du granit traditionnel à une décoration chaleureuse et moderne.",

      b4Nome: "Refuge Touriga Franca",
      b4Sub: "Ambiance Intime & Foyer Extérieur",
      b4Desc:
        "Un refuge chaleureux aux tons terreux et éclairage intime, pensé pour les moments à deux, avec des espaces extérieurs protégés et des vues sublimes.",

      b5Nome: "Casa Grande da Leira",
      b5Sub: "Résidence Premium & Coucher de Soleil sur le Douro",
      b5Desc:
        "Le joyau de la propriété, orienté vers l'ouest pour capturer le coucher de soleil doré sur le fleuve. Hauts plafonds en bois, grandes baies vitrées et exclusivité totale.",

      residenciaprivada: "Résidence Privée Exclusive",
      vistaPrincipal: "Vue Principale de la Résidence",
      areaHabitavel: "Surface Habitable",
      capacidade: "Capacité",
      configCama: "Configuration du Lit",
      sobreResidencia: "À Propos de la Résidence",
      comodidadesIncluidas: "Équipements Inclus",
      galeriaDetalhes: "Galerie de Détails & Atmosphère",
      outrosAngulos: "Autres Angles",
      disponibilidadeConsulta:
        "Disponibilité sur demande préalable et confirmation",
      solicitarReservaBungalow: "Demander une Réservation pour ce Bungalow",

      txtQuintaTitulo: "Silence, Vignes et Mémoire au Cœur du Douro",
      txtQuintaDesc:
        "Suspendue entre le cours sinueux du fleuve et le ciel du Douro, la Quinta da Leira est un sanctuaire d'exclusivité. Ici, le rythme du temps ralentit pour laisser place au luxe du silence, où l'architecture contemporaine dialogue en parfaite harmonie avec des terrasses séculaires et une hospitalité intimiste.",
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

      areaValor1: "120 m²",
      areaValor2: "85 m²",
      areaValor3: "110 m²",
      areaValor4: "75 m²",
      areaValor5: "180 m²",

      capacidadeValor1: "2 à 3 Invités",
      capacidadeValor2: "2 Invités",
      capacidadeValor3: "2 à 4 Invités",
      capacidadeValor4: "2 Invités",
      capacidadeValor5: "4 à 6 Invités",

      camaValor1: "1x King Size (ou 2x Jumeaux)",
      camaValor2: "1x Queen Size",
      camaValor3: "1x King Size + Canapé-lit",
      camaValor4: "1x Queen Size",
      camaValor5: "2x King Size + 1x Suite",

      comodidade1: "Piscine à Débordement Privée",
      comodidade2: "Jacuzzi Extérieur en Cèdre",
      comodidade3: "Cheminée / Foyer Extérieur",
      comodidade4: "Climatisation et Chauffage au Sol",
      comodidade5: "Wi-Fi Haut Débit",
      comodidade6: "Minibar avec Vins Régionaux",
      comodidade7: "Produits de Soin Bio",
      comodidade8: "Service de Petit-Déjeuner Inclus",
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
      menu: "Menú",
      localizacao: "Valle del Duero, Portugal",
      localizacaoTxt: "Peso da Régua, Valle del Duero",
      douroValley: "Valle del Duero",
      quintaDaLeira: "Quinta da Leira",
      titulo: "El Refugio del Tiempo y del Silencio",
      instrucao:
        "Deslice la barra para alternar entre la serenidad solar y el encanto nocturno",
      alojamentoTag: "— 02 / Alojamiento",
      alojamentoTitulo: "Residencias Exclusivas",
      alojamentoDesc:
        "Cada espacio ha sido diseñado para proporcionar una inmersión total en la naturaleza, garantizando un confort absoluto y una privacidad sin precedentes.",
      explorarRefugio: "Explorar Refugio",

      b1Nome: "Residencia Touriga Nacional",
      b1Sub: "Piscina Privada & Vista Panorámica sobre los Viñedos",
      b1Desc:
        "Suspendido sobre las terrazas del Duero, este refugio principal ofrece privacidad absoluta. Cuenta con una generosa cubierta de madera con piscina infinita privada, enmarcada por la rusticidad de las paredes de esquisto y granito.",

      b2Nome: "Suite Arinto & Viosinho",
      b2Sub: "Jacuzzi Exterior & Terraza Privada",
      b2Desc:
        "Rodeado de vegetación nativa y frentes de vidrio que integran la naturaleza, este espacio combina madera noble con confort contemporáneo. Destaca el jacuzzi exterior de cedro integrado en la terraza.",

      b3Nome: "Villa Tinta Roriz",
      b3Sub: "Arquitectura en Granito & Sombra Secular",
      b3Desc:
        "Construida en perfecta armonía con las formaciones rocosas de la ladera, esta villa fusiona la solidez del granito tradicional con líneas de decoración modernas y acogedoras.",

      b4Nome: "Refugio Touriga Franca",
      b4Sub: "Ambiente Íntimo & Fogata Exterior",
      b4Desc:
        "Un refugio acogedor con tonos terrosos e iluminación intimista, pensado para momentos en pareja. Cuenta con zonas de estar exteriores protegidas y vistas sublimes sobre los bancales.",

      b5Nome: "Casa Grande da Leira",
      b5Sub: "Residencia Premium & Atardecer en el Duero",
      b5Desc:
        "La joya de la propiedad, orientada al oeste para capturar el espectáculo dorado del atardecer sobre el río. Techos altos de madera, amplios ventanales y exclusividad total.",

      residenciaprivada: "Residencia Privada Exclusiva",
      vistaPrincipal: "Vista Principal de la Residencia",
      areaHabitavel: "Área Habitable",
      capacidade: "Capacidad",
      configCama: "Configuración de Cama",
      sobreResidencia: "Sobre la Residencia",
      comodidadesIncluidas: "Comodidades Incluidas",
      galeriaDetalhes: "Galería de Detalles & Atmósfera",
      outrosAngulos: "Otros Ángulos",
      disponibilidadeConsulta:
        "Disponibilidad bajo consulta previa y confirmación",
      solicitarReservaBungalow: "Solicitar Reserva para este Bungalow",

      txtQuintaTitulo: "Silencio, Viñedos y Memoria en el Corazón del Duero",
      txtQuintaDesc:
        "Suspendida entre el curso sinuoso del río y el cielo del Duero, Quinta da Leira es un santuario de exclusividad. Aquí, el ritmo del tiempo se desacelera para dar paso al lujo del silencio, donde la arquitectura contemporánea dialoga en perfecta armonía con bancales seculares y una hospitalidad intimista.",
      txtBungalowsTitulo: "Espacios de Autor",
      txtBungalowsDesc:
        "Bungalows premium suspendidos sobre el paisaje, donde las paredes de cristal disuelven la frontera entre el interior y el valle.",
      txtExpTitulo: "El Arte de Vivir el Duero",
      txtExp1: "Piscina Infinita Panorámica",
      txtExp2: "Desayuno con Productos Locales",
      txtExp3: "Senderos Privados & Catas de Vino",
      txtFooterForm: "Solicitar Disponibilidad",
      txtFooterNome: "Nombre completo",
      txtFooterCheck: "Fecha deseada",
      txtFooterBtn: "ENVIAR SOLICITUD DE RESERVA",

      areaValor1: "120 m²",
      areaValor2: "85 m²",
      areaValor3: "110 m²",
      areaValor4: "75 m²",
      areaValor5: "180 m²",

      capacidadeValor1: "2 a 3 Huéspedes",
      capacidadeValor2: "2 Huéspedes",
      capacidadeValor3: "2 a 4 Huéspedes",
      capacidadeValor4: "2 Huéspedes",
      capacidadeValor5: "4 a 6 Huéspedes",

      camaValor1: "1x King Size (o 2x Individuales)",
      camaValor2: "1x Queen Size",
      camaValor3: "1x King Size + Sofá cama",
      camaValor4: "1x Queen Size",
      camaValor5: "2x King Size + 1x Suite",

      comodidade1: "Piscina Infinita Privada",
      comodidade2: "Jacuzzi Exterior de Cedro",
      comodidade3: "Chimenea / Fogata Exterior",
      comodidade4: "Aire Acondicionado y Calefacción por Suelo Radiante",
      comodidade5: "Wi-Fi de Alta Velocidad",
      comodidade6: "Minibar con Vinos de la Región",
      comodidade7: "Artículos de Tocador Orgánicos",
      comodidade8: "Servicio de Desayuno Incluido",
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
      menu: "Menu",
      localizacao: "Valle del Douro, Portugal",
      localizacaoTxt: "Peso da Régua, Valle del Douro",
      douroValley: "Valle del Douro",
      quintaDaLeira: "Quinta da Leira",
      titulo: "Il Rifugio del Tempo e del Silenzio",
      instrucao:
        "Scorri la barra per alternare tra serenità solare e fascino notturno",
      alojamentoTag: "— 02 / Alloggi",
      alojamentoTitulo: "Residenze Esclusive",
      alojamentoDesc:
        "Ogni spazio è stato progettato per offrire un'immersione totale nella natura, garantendo comfort assoluto e una privacy senza precedenti.",
      explorarRefugio: "Esplora il Rifugio",

      b1Nome: "Residenza Touriga Nacional",
      b1Sub: "Piscina Privata & Vista Panoramica sui Vigneti",
      b1Desc:
        "Sospeso sui terrazzamenti affacciati sul Douro, questo rifugio principale offre assoluta privacy. Dispone di un generoso ponte in legno con piscina a sfioro privata, incorniciata dalla rusticità dei muri in scisto e granito.",

      b2Nome: "Suite Arinto & Viosinho",
      b2Sub: "Jacuzzi Esterna & Ponte Privato",
      b2Desc:
        "Circondato dalla vegetazione nativa e ampie vetrate che portano la natura all'interno, questo spazio unisce legno nobile e comfort contemporaneo. Il punto di forza è la jacuzzi esterna in cedro integrata nel ponte.",

      b3Nome: "Villa Tinta Roriz",
      b3Sub: "Architettura in Granito & Ombra Secolare",
      b3Desc:
        "Costruita in perfetta armonia con le formazioni rocciose della collina, questa villa fonde la solidità del granito tradizionale con linee di arredamento moderne e accoglienti.",

      b4Nome: "Rifugio Touriga Franca",
      b4Sub: "Atmosfera Intima & Fuoco Esterno",
      b4Desc:
        "Un rifugio accogliente con toni della terra e illuminazione intima, pensato nei dettagli per momenti di coppia. Dispone di aree relax esterne protette e viste sublimi.",

      b5Nome: "Casa Grande da Leira",
      b5Sub: "Residenza Premium & Tramonto sul Douro",
      b5Desc:
        "Il gioiello della proprietà, perfettamente orientato a ovest per catturare lo spettacolo dorato del tramonto sul fiume. Soffitti alti in legno, ampie vetrate e totale esclusività.",

      residenciaprivada: "Residenza Privada Esclusiva",
      vistaPrincipal: "Vista Principale della Residenza",
      areaHabitavel: "Area Abitabile",
      capacidade: "Capacità",
      configCama: "Configurazione Letto",
      sobreResidencia: "Informazioni sulla Residenza",
      comodidadesIncluidas: "Servizi Inclusi",
      galeriaDetalhes: "Galleria Dettagli & Atmosfera",
      outrosAngulos: "Altri Angoli",
      disponibilidadeConsulta:
        "Disponibilità su richiesta preventiva e conferma",
      solicitarReservaBungalow: "Richiedi Prenotazione per questo Bungalow",

      txtQuintaTitulo: "Silenzio, Vigneti e Memoria nel Cuore del Douro",
      txtQuintaDesc:
        "Sospesa tra il corso tortuoso del fiume e il cielo del Douro, Quinta da Leira è un santuario di esclusività. Qui, il ritmo del tempo rallenta per fare spazio al lusso del silenzio, dove l'architettura contemporanea dialoga in perfetta armonia con terrazzamenti secolari e un'ospitalità intima.",
      txtBungalowsTitulo: "Spazi d'Autore",
      txtBungalowsDesc:
        "Bungalow premium sospesi sul paesaggio, dove pareti di vetro dissolvono il confine tra l'interno e la valle.",
      txtExpTitulo: "L'Arte di Vivere il Douro",
      txtExp1: "Piscina a Sfioro Panoramica",
      txtExp2: "Colazione con Prodotti Locali",
      txtExp3: "Sentieri Privati & Degustazioni di Vino",
      txtFooterForm: "Richiedi Disponibilità",
      txtFooterNome: "Nome completo",
      txtFooterCheck: "Data desiderata",
      txtFooterBtn: "INVIA RICHIESTA DI PRENOTAZIONE",

      areaValor1: "120 mq",
      areaValor2: "85 mq",
      areaValor3: "110 mq",
      areaValor4: "75 mq",
      areaValor5: "180 mq",

      capacidadeValor1: "da 2 a 3 Ospiti",
      capacidadeValor2: "2 Ospiti",
      capacidadeValor3: "da 2 a 4 Ospiti",
      capacidadeValor4: "2 Ospiti",
      capacidadeValor5: "da 4 a 6 Ospiti",

      camaValor1: "1x King Size (o 2x Letti singoli)",
      camaValor2: "1x Queen Size",
      camaValor3: "1x King Size + Divano letto",
      camaValor4: "1x Queen Size",
      camaValor5: "2x King Size + 1x Suite",

      comodidade1: "Piscina a Sfioro Privata",
      comodidade2: "Jacuzzi Esterna in Cedro",
      comodidade3: "Camino / Fuoco Esterno",
      comodidade4: "Aria Condizionata e Riscaldamento a Pavimento",
      comodidade5: "Wi-Fi ad Alta Velocità",
      comodidade6: "Minibar con Vini Locali",
      comodidade7: "Articoli da Toeletta Biologici",
      comodidade8: "Servizio Colazione Incluso",
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
