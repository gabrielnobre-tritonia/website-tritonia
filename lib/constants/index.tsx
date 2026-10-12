import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
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
