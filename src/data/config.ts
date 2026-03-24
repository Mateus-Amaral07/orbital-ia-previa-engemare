import { Shield, Award, PenTool, Zap, Wrench, ThermometerSnowflake } from 'lucide-react';

export const config = {
  company: {
    name: "Engemare",
    nameFull: "Engemare",
  },
  contact: {
    whatsapp: "5531987060337",
    whatsappMessage: "Olá, gostaria de saber mais informações",
  },
  social: {
    instagram: "https://www.instagram.com/engemarebh/",
    facebook: "", 
  },
  colors: {
    primary: "#0c548f",
    primaryHover: "#0a4576",
    primaryLight: "#1374c4",
    primaryDark: "#32374d",
  },
  location: "Belo Horizonte e região metropolitana",
  hero: {
    headline: "O clima perfeito.<br />Sem dor de cabeça.",
    subheadline: "Instalação, manutenção e projetos de ar condicionado em Belo Horizonte e região metropolitana. Engenharia de ponta com acabamento impecável e respeito ao seu espaço.",
    ctaText: "Fale Fácil Pelo WhatsApp",
    stats: {
      rating: 5.0,
      reviewsCount: "500+",
    },
    images: {
      background: "/imagens/foto_instalacao5_depois.png",
      avatars: [
        "https://i.pravatar.cc/100?img=11",
        "https://i.pravatar.cc/100?img=12",
        "https://i.pravatar.cc/100?img=13",
        "https://i.pravatar.cc/100?img=14",
        "https://i.pravatar.cc/100?img=15",
      ]
    }
  },
  about: {
    title: "A engenharia do conforto elevada ao mais alto nível.",
    description: "Na Engemare, acreditamos que a climatização vai muito além de ajustar temperaturas — trata-se de arquitetar a qualidade de vida. Nascemos da necessidade de um mercado carente de excelência, onde o acabamento impecável, o respeito à estética dos ambientes e a responsabilidade técnica são premissas inegociáveis.",
    stats: {
      projects: "2k+",
      satisfaction: "98%"
    },
    images: {
      main: "/imagens/foto_instalacao.png",
      secondary: "/imagens/foto_instalacao2.png"
    }
  },
  trustSignals: {
    certificate: "VIP LG, Midea, Daikin",
    yearsInMarket: "+ de 9 Anos",
    partners: ["DAIKIN", "MIDEA", "LG"]
  },
  services: [
    {
      id: "projetos-residenciais",
      title: "Projetos Residenciais Premium",
      description: "Sistemas VRV/VRF e Multi Split embutidos. Climatização com tecnologia Inverter para máxima economia elétrica. Respeita a estética do seu ambiente.",
      image: "/imagens/foto_instalacao2.png",
      icon: "ThermometerSnowflake",
      iconColor: "text-blue-500",
      isLarge: true,
      features: []
    },
    {
      id: "manutencao",
      title: "Manutenção Preventiva",
      description: "Limpeza química profunda com laudo PMOC. Remove ácaros e resguarda a saúde respiratória da sua equipe ou família.",
      image: "/imagens/foto_limpeza_depois.png",
      icon: "Wrench",
      iconColor: "text-orange-500",
      isLarge: false,
      features: []
    },
    {
      id: "instalacao-expressa",
      title: "Instalação",
      description: "Equipes uniformizadas, com protetores e aspirador de pó. Sua casa tão limpa quanto antes da nossa chegada.",
      image: "/imagens/foto_instalacao5_antes.png",
      icon: "Zap",
      iconColor: "text-yellow-400",
      isLarge: false,
      dark: true,
      features: [
        "Tubulação 100% cobre",
        "Vácuo no sistema",
        "Teste com Nitrogênio"
      ]
    },
    {
      id: "infraestrutura",
      title: "Infraestrutura na Obra",
      description: "Acompanhamento junto à engenharia e arquitetura para passagem de tubulação. Climatização planejada com zero quebra-quebra no futuro.",
      image: "/imagens/foto_instalacao4.png",
      icon: "PenTool",
      iconColor: "text-purple-500",
      isLarge: true,
      features: []
    }
  ],
  gallery: [
    "/imagens/foto_instalacao.png",
    "/imagens/foto_instalacao2.png",
    "/imagens/foto_instalacao3.png",
    "/imagens/foto_instalacao4.png",
    "/imagens/foto_instalacao5_depois.png",
    "/imagens/foto_limpeza_depois.png",
    "/imagens/foto_instalacao5_antes.png",
    "/imagens/foto_limpeza_antes.png"
  ],
  testimonials: {
    aggregate: {
      rating: 5.0,
      count: "500+",
      recommendation: "98%"
    },
    reviews: [
      {
        text: "Equipe extremamente profissional. Chegaram no horário, forraram todo o chão de madeira e instalaram as 4 máquinas em um único dia. O acabamento ficou impecável.",
        author: "Ricardo Almeida",
        role: "Projeto Residencial · Alphaville",
        avatar: "https://i.pravatar.cc/150?img=32",
        rating: 5,
      },
      {
        text: "Contratamos para a manutenção preventiva da nossa clínica. O laudo do PMOC foi entregue rapidamente e os aparelhos pararam de pingar. Recomendo fortemente.",
        author: "Dra. Mariana Costa",
        role: "Clínica Odontológica",
        avatar: "https://i.pravatar.cc/150?img=44",
        rating: 5,
      },
      {
        text: "Ajudaram no projeto de climatização do nosso escritório junto com a arquiteta. Esconderam as máquinas no forro de gesso. Ficou invisível e gela muito bem.",
        author: "Carlos Eduardo",
        role: "Escritório de Advocacia",
        avatar: "https://i.pravatar.cc/150?img=11",
        rating: 5,
      },
      {
        text: "Impressionante a pontualidade e o cuidado. Forraram tudo antes de começar, usaram aspirador ao final. A casa ficou mais limpa do que antes da instalação.",
        author: "Fernanda Rocha",
        role: "Residencial",
        avatar: "https://i.pravatar.cc/150?img=26",
        rating: 5,
      },
      {
        text: "Projeto VRF para o nosso condomínio comercial foi executado dentro do prazo e sem surpresas. Engenharia de altíssimo nível e equipe super organizada.",
        author: "Gustavo Mendes",
        role: "Síndico · Condomínio Comercial",
        avatar: "https://i.pravatar.cc/150?img=67",
        rating: 5,
      },
    ]
  },
  faq: [
    {
      q: "Vocês atendem projetos residenciais e corporativos?",
      a: "Sim, temos equipes especializadas tanto para instalações em residências de alto padrão quanto para grandes projetos corporativos e comerciais, incluindo sistemas VRF e dutados."
    },
    {
      q: "Emitem laudo PMOC para empresas?",
      a: "Sim. Realizamos a manutenção preventiva e corretiva com emissão de laudo PMOC (Plano de Manutenção, Operação e Controle), obrigatório por lei para ambientes públicos e coletivos."
    },
    {
      q: "Qual a garantia do serviço de instalação?",
      a: "Oferecemos 1 ano de garantia na nossa mão de obra de instalação, além da garantia do fabricante do equipamento (que pode chegar a 10 anos no compressor, dependendo da marca)."
    },
    {
      q: "Vocês fornecem os aparelhos ou apenas a mão de obra?",
      a: "Trabalhamos das duas formas. Podemos fornecer os equipamentos das melhores marcas do mercado com preços competitivos, ou realizar apenas a instalação caso você já tenha comprado o aparelho."
    }
  ],
  bottomCta: {
    headline: "Pronto para o clima ideal?",
    subheadline: "Agende uma visita técnica e receba um orçamento detalhado para o seu projeto.",
    buttonText: "Falar no WhatsApp"
  }
};
