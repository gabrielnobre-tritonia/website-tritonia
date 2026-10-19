import type { ContactFormValues } from "@/lib/validations/contact";

const HTML_ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => HTML_ENTITIES[char]);

const fields: { key: keyof ContactFormValues; label: string }[] = [
  { key: "name", label: "Nome" },
  { key: "company", label: "Empresa/Órgão" },
  { key: "email", label: "E-mail" },
  { key: "phone", label: "Telefone/WhatsApp" },
  { key: "message", label: "Mensagem" },
];

export function buildContactEmail(values: ContactFormValues) {
  const rows = fields
    .map(({ key, label }) => {
      const value = escapeHtml(values[key] ?? "");
      return `<p style="margin:0 0 16px"><strong>${label}</strong><br><span style="white-space:pre-wrap">${value}</span></p>`;
    })
    .join("");

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#182633">${rows}</div>`;

  return { html };
}
