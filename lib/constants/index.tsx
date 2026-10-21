import {
  Building2,
  ChartLine,
  ChartNoAxesColumnIncreasing,
  Combine,
  Headset,
  Landmark,
  Mail,
  MessageCircle,
  Monitor,
  Moon,
  Network,
  Puzzle,
  RefreshCw,
  ShieldCheck,
  Sun,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

export const options: {
  value: string;
  label: string;
  icon: LucideIcon;
}[] = [
  { value: "system", label: "Sistema", icon: Monitor },
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Escuro", icon: Moon },
];

export type ServiceCardItem = {
  icon?: ReactNode;
  label: string;
};

export type ServiceCardData = {
  id: string;
  baseColor: string;
  background: string;
  number: string;
  numberColor: string;
  title: ReactNode;
  subtitle: string;
  description: string;
  items: ServiceCardItem[];
};

export const serviceCards: ServiceCardData[] = [
  {
    id: "desenvolvimento-de-sistemas",
    baseColor: "var(--card-cyan)",
    background: "/backgrounds/card-bg-cyan.svg",
    number: "01",
    numberColor: "#0092A8",
    title: (
      <>
        Desenvolvimento <br />
        de Sistemas
      </>
    ),
    subtitle: "Do problema à solução",
    description:
      "Construímos sistemas, aplicativos e ferramentas sob medida para atender às necessidades específicas da sua operação e do seu negócio.",
    items: [
      {
        icon: <Puzzle className="size-full" strokeWidth={1.75} />,
        label: "Soluções sob medida",
      },
      {
        icon: <ShieldCheck className="size-full" strokeWidth={1.75} />,
        label: "Segurança e confiabilidade",
      },
      {
        icon: <ChartLine className="size-full" strokeWidth={1.75} />,
        label: "Escalabilidade e performance",
      },
    ],
  },
  {
    id: "evolucao-e-sustentacao",
    baseColor: "var(--card-orange)",
    background: "/backgrounds/card-bg-orange.svg",
    number: "02",
    numberColor: "#DE5A07",
    title: (
      <>
        Evolução e <br />
        sustentação
      </>
    ),
    subtitle: "Tecnologia que acompanha o negócio",
    description:
      "Mantemos e evoluímos sistemas existentes, modernizando tecnologias, integrando soluções e garantindo a continuidade da operação.",
    items: [
      {
        icon: <RefreshCw className="size-full" strokeWidth={1.75} />,
        label: "Manutenção contínua",
      },
      {
        icon: <Combine className="size-full" strokeWidth={1.75} />,
        label: "Modernização contínua",
      },
      {
        icon: <Network className="size-full" strokeWidth={1.75} />,
        label: "Integração de sistemas",
      },
    ],
  },
  {
    id: "gestao-de-operacoes",
    baseColor: "var(--card-green)",
    background: "/backgrounds/card-bg-green.svg",
    number: "03",
    numberColor: "#1fa87f",
    title: (
      <>
        Gestão de <br />
        operações
      </>
    ),
    subtitle: "Além da tecnologia",
    description:
      "Atuamos diretamente na gestão de operações apoiadas por tecnologia, conectando processos, sistemas, usuários e serviços.",
    items: [
      {
        icon: <UsersRound className="size-full" strokeWidth={1.75} />,
        label: "Processos eficientes",
      },
      {
        icon: (
          <ChartNoAxesColumnIncreasing
            className="size-full"
            strokeWidth={1.75}
          />
        ),
        label: "Indicadores e performance",
      },
      {
        icon: <Headset className="size-full" strokeWidth={1.75} />,
        label: "Suporte e atendimento",
      },
    ],
  },
];

export type WhyCardData = {
  id: string;
  title: ReactNode;
  subtitle: string;
  image: string;
  lineColor: string;
};

export const whyCards: WhyCardData[] = [
  {
    id: "atendimento-direto",
    title: (
      <>
        Atendimento direto, <br className="max-md:hidden" />
        sem intermediário
      </>
    ),
    subtitle:
      "Fala direto com quem desenvolve, sem burocracia de suporte terceirizado.",
    image: "/card-images/smartphone.png",
    lineColor: "#00ADC8",
  },
  {
    id: "flexibilidade-setor-publico-e-privado",
    title: (
      <>
        Flexibilidade para <br className="max-md:hidden" />
        setor público e <br className="max-md:hidden" />
        privado
      </>
    ),
    subtitle:
      "Mesma qualidade de entrega, seja contrato governamental ou operação privada.",
    image: "/card-images/nota-fiscal.png",
    lineColor: "#056E4F",
  },
  {
    id: "evolucao-continua",
    title: (
      <>
        Evolução contínua <br className="max-md:hidden" />
        do sistema
      </>
    ),
    subtitle:
      "O sistema não para no dia da entrega, evolui junto com a necessidade da operação.",
    image: "/card-images/tela.png",
    lineColor: "#F7660B",
  },
];

export type MapLabelData = {
  id: string;
  name: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
};

export type MapCardData = {
  text: ReactNode;
  image: string;
  imageExpanded: string;
  labels: MapLabelData[];
};

export const whyMapCard: MapCardData = {
  text: (
    <>
      Presente em <br />2 estados e <br />3 cidades
    </>
  ),
  image: "/card-images/map.png",
  imageExpanded: "/card-images/map-expansive.png",
  labels: [
    { id: "sobral", name: "Sobral", x: 60, y: 14, dx: -12, dy: 22 },
    { id: "fortaleza", name: "Fortaleza", x: 71, y: 12, dx: 28, dy: -22 },
    { id: "barreiras", name: "Barreiras", x: 30, y: 63, dx: 32, dy: -22 },
  ],
};

export type StatCardData = {
  value: string;
  unit: string;
  description: ReactNode;
};

export const whyStatCard: StatCardData = {
  value: "+2,9",
  unit: "milhões",
  description: (
    <>
      Clientes utilizam os <br />
      nossos serviços
    </>
  ),
};

export type NavLink = {
  href: string;
  label: string;
};

/** Itens de navegação do menu bar */
export const menuItems: NavLink[] = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
];

export const contact: NavLink = { href: "/contato", label: "Contato" };

const whatsappNumber = "+55 85 98127-3088";
const contactEmail = "contato@tritonia.com.br";

// INFORMAÇÕES DE CONTATO
export type ContactChannel = {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
  external: boolean;
};

export const contactChannels: ContactChannel[] = [
  {
    id: "whatsapp",
    label: whatsappNumber,
    href: `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`,
    icon: <MessageCircle className="size-full" strokeWidth={1.75} />,
    external: true,
  },
  {
    id: "email",
    label: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: <Mail className="size-full" strokeWidth={1.75} />,
    external: false,
  },
];

// SEÇÃO DO PORQUÊ A TRITONIA
export type AboutStat = {
  id: string;
  title: string;
  subtitle: string;
  color: string;
};

export const aboutStats: AboutStat[] = [
  {
    id: "anos",
    title: "+5 anos",
    subtitle: "de engenharia aplicada a operações",
    color: "var(--foreground-accent)",
  },
  {
    id: "sistemas",
    title: "+4",
    subtitle: "sistemas em produção",
    color: "#00adc8",
  },
  {
    id: "eventos",
    title: "+100 mil",
    subtitle: "eventos/registros processados",
    color: "#a17bf4",
  },
  {
    id: "instituicoes",
    title: "+5",
    subtitle: "instituições atendidas",
    color: "#0bc28c",
  },
  {
    id: "reducao-de-erros",
    title: "+15%",
    subtitle: "de redução de erros em processos",
    color: "var(--foreground-light)",
  },
];

export type ProductSlideItem = {
  icon: string;
  label: string;
};

// PRODUTOS
export type ProductSlideData = {
  id: string;
  badge: {
    label: string;
    color: string;
    icon: ReactNode;
  };
  title: string;
  description: string;
  cta: { label: string; href: string };
  items: ProductSlideItem[];
  image: { src: string; width: number; height: number };
};

/** Cores dos badges de setor. O privado ainda não tem slide. */
export const sectorColors = {
  public: "#00ADC8",
  private: "#034431",
};

export const productSlides: ProductSlideData[] = [
  {
    id: "sgvm",
    badge: {
      label: "SETOR PÚBLICO",
      color: sectorColors.public,
      // Provisório: o SVG do badge ainda não foi enviado.
      icon: <Landmark className="size-full" strokeWidth={1.75} />,
    },
    title: "SGVM - Sistema de Gestão de Videomonitoramento",
    description:
      "Solução utilizada por órgãos fiscalizadores de trânsito para registrar multas originadas de eventos capturados por câmeras de videomonitoramento. O fiscal analisa a ocorrência e formaliza o registro no sistema, que envia a informação ao sistema de multas do governo federal para dar sequência ao processo de fiscalização.",
    cta: {
      label: "Solicitar demonstração do SGVM",
      href: "/contato",
    },
    // Provisório: a ordem dos ícones segue o palpite, a confirmar.
    items: [
      {
        icon: "/images-apps/sgvm/icons/integracao.svg",
        label: "Integração com o sistema federal",
      },
      {
        icon: "/images-apps/sgvm/icons/centralizacao.svg",
        label: "Centralização do registro",
      },
      {
        icon: "/images-apps/sgvm/icons/dashboard.svg",
        label: "Dashboard de gestão por agente",
      },
    ],
    image: {
      src: "/images-apps/sgvm/mockup.png",
      width: 3218,
      height: 1709,
    },
  },
  {
    id: "zad",
    badge: {
      label: "SETOR PÚBLICO",
      color: sectorColors.public,
      icon: <Landmark className="size-full" strokeWidth={1.75} />,
    },
    title: "ZAD - Zona Azul Digital",
    description:
      "Operamos o sistema de forma integrada em três frentes: motorista, crédito e fiscalização. Da compra de crédito ao monitoramento em campo, tudo conectado em uma única plataforma que garante conformidade, eficiência e transparência para a cidade.",
    cta: {
      label: "Solicitar demonstração do ZAD",
      href: "/contato",
    },
    items: [
      {
        icon: "/images-apps/zad/icons/cartao.svg",
        label: "Compra de crédito",
      },
      {
        icon: "/images-apps/zad/icons/dinheiro.svg",
        label: "Gestão de arrecadação",
      },
      {
        icon: "/images-apps/zad/icons/fiscalizacao.svg",
        label: "Fiscalização em campo",
      },
    ],
    image: {
      src: "/images-apps/zad/mockup.png",
      width: 2300,
      height: 1500,
    },
  },
  {
    id: "sigem",
    badge: {
      label: "SETOR PRIVADO",
      color: sectorColors.private,
      icon: <Building2 className="size-full" strokeWidth={1.75} />,
    },
    title: "SIGEM – Sistema Integrado de Gestão de Estoque e Materiais",
    description:
      "Sistema de controle de estoque com dashboard de acompanhamento em tempo real. Reúne saldo por item, entradas por nota fiscal, saídas vinculadas à ordem de serviço e contagens de inventário num só lugar, com alertas para itens zerados com OS aberta, abaixo do mínimo e capital parado.",
    cta: {
      label: "Solicitar demonstração do SIGEM",
      href: "/contato",
    },
    items: [
      {
        icon: "/images-apps/sigem/icons/visao.svg",
        label: "Visão em tempo real",
      },
      {
        icon: "/images-apps/sigem/icons/controle.svg",
        label: "Controle completo",
      },
      {
        icon: "/images-apps/sigem/icons/alerta.svg",
        label: "Alertas inteligentes",
      },
    ],
    image: {
      src: "/images-apps/sigem/mockup.png",
      width: 2000,
      height: 1500,
    },
  },
  {
    id: "sgc",
    badge: {
      label: "SETOR PRIVADO",
      color: sectorColors.private,
      icon: <Building2 className="size-full" strokeWidth={1.75} />,
    },
    title: "SGC - Sistema de Gestão de Contratos",
    description:
      "Chega de perder prazo, medir a mais ou descobrir tarde que o saldo acabou. O SGC acompanha quantitativos, valores, medições e saldos em tempo real e mostra num painel único a saúde de toda a sua cateira.",
    cta: {
      label: "Solicitar demonstração do SGC",
      href: "/contato",
    },
    items: [
      {
        icon: "/images-apps/sgc/icons/medicoes.svg",
        label: "Medições organizadas",
      },
      {
        icon: "/images-apps/sgc/icons/saldos.svg",
        label: "Saldos sempre certos",
      },
      {
        icon: "/images-apps/sgc/icons/documentos.svg",
        label: "Documentos profissionais",
      },
    ],
    image: {
      src: "/images-apps/sgc/mockup.png",
      width: 2000,
      height: 1500,
    },
  },
  {
    id: "sgf",
    badge: {
      label: "SETOR PRIVADO",
      color: sectorColors.private,
      icon: <Building2 className="size-full" strokeWidth={1.75} />,
    },
    title: "SGF - Sistema de Gestão Financeira",
    description:
      "Do lançamento à confirmação de pagamento, o SGF dá rastro e governança a cada centavo - com fluxo de aprovação, centros de custo e visão clara de para onde o dinheiro está indo.",
    cta: {
      label: "Solicitar demonstração do SGF",
      href: "/contato",
    },
    items: [
      {
        icon: "/images-apps/sgf/icons/painel.svg",
        label: "Painel de despesas",
      },
      {
        icon: "/images-apps/sgf/icons/fluxo.svg",
        label: "Fluxo de aprovação por perfil",
      },
      {
        icon: "/images-apps/sgf/icons/auditoria.svg",
        label: "Auditoria completa",
      },
    ],
    image: {
      src: "/images-apps/sgf/mockup.png",
      width: 2000,
      height: 1500,
    },
  },
];

export type ProductsHeroCardData = {
  id: string;
  /** Imagem pronta do card (cor, cantos e sombra já inclusos), em `public/`. */
  src: string;
  width: number;
  height: number;
  /** Ordem de entrada e de saída na sequência: 0 é o primeiro (o da direita). */
  order: number;
};

// Cards de animação de Produtos
export const productsHeroCards: ProductsHeroCardData[] = [
  {
    id: "zad",
    src: "/animation-products/zad.png",
    width: 1552,
    height: 1230,
    order: 2,
  },
  {
    id: "sgvm",
    src: "/animation-products/sgvm.png",
    width: 1552,
    height: 1124,
    order: 1,
  },
  {
    id: "sigem",
    src: "/animation-products/sigem.png",
    width: 1552,
    height: 1124,
    order: 0,
  },
];
