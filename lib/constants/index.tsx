import { Landmark, Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
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
      { label: "Soluções sob medida" },
      { label: "Segurança e confiabilidade" },
      { label: "Escalabilidade e performance" },
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
      { label: "Manutenção contínua" },
      { label: "Modernização contínua" },
      { label: "Integração de sistemas" },
    ],
  },
  {
    id: "gestao-de-operacoes",
    baseColor: "var(--card-green)",
    background: "/backgrounds/card-bg-green.svg",
    number: "03",
    numberColor: "#079269",
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
      { label: "Processos eficientes" },
      { label: "Indicadores e performance" },
      { label: "Suporte e atendimento" },
    ],
  },
];

export type WhyCardData = {
  id: string;
  title: ReactNode;
  subtitle: string;
  /** Caminho da imagem em `public/`. */
  image: string;
  /** Cor da barra do topo, como valor CSS direto (não é token da paleta). */
  lineColor: string;
};

export const whyCards: WhyCardData[] = [
  {
    id: "atendimento-direto",
    title: (
      <>
        Atendimento direto, <br />
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
        Flexibilidade para <br />
        setor público e <br />
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
        Evolução contínua <br />
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
  /** Posição do pino na caixa do mapa expandido, em % da largura. */
  x: number;
  /** Posição do pino na caixa do mapa expandido, em % da altura. */
  y: number;
  /** Deslocamento horizontal do centro do nome em relação ao pino, em px. */
  dx: number;
  /** Deslocamento vertical do centro do nome em relação ao pino, em px (negativo sobe). */
  dy: number;
};

export type MapCardData = {
  /** Texto do card, com as quebras de linha (`<br />`). */
  text: ReactNode;
  /** Mapa do card recolhido (`public/`). */
  image: string;
  /** Mapa do card expandido (`public/`). */
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
  /** Frase abaixo do número, com as quebras de linha (`<br />`). */
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

/** Itens de navegação do menu bar (o contato fica à parte, como botão). */
export const menuItems: NavLink[] = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
];

export const contact: NavLink = { href: "/contato", label: "Contato" };

export type AboutStat = {
  id: string;
  title: string;
  subtitle: string;
  /** Cor do título, como valor CSS direto (não é token da paleta). */
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
  /** Caminho do SVG em `public/`. */
  icon: string;
  label: string;
};

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
        icon: "/images-apps/sgvm/icons/dinheiro.svg",
        label: "Integração com o sistema federal",
      },
      {
        icon: "/images-apps/sgvm/icons/cartao.svg",
        label: "Centralização do registro",
      },
      {
        icon: "/images-apps/sgvm/icons/fiscalizacao.svg",
        label: "Dashboard de gestão por agente",
      },
    ],
    image: {
      src: "/images-apps/sgvm/mockup.png",
      width: 3218,
      height: 1709,
    },
  },
];
