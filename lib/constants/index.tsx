import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";

export const options: {
  value: string;
  label: string;
  icon: LucideIcon;
}[] = [
  { value: "system", label: "Sistema", icon: Monitor },
  { value: "light", label: "Claro", icon: Sun },
  { value: "dark", label: "Escuro", icon: Moon },
];
