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
      "Construímos sistemas, aplicativos e ferramentas sob medida para atender às necessidades específicas da sua operação e do seu negócio",
    items: [
      { label: "Soluções sob medida" },
      { label: "Segurança e confiabilidade" },
      { label: "Escalabilidade e performance" },
    ],
  },
];
