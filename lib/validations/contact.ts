import { z } from "zod";

/** Tamanho máximo de cada campo, em caracteres. */
export const contactLimits = {
  name: 100,
  company: 120,
  email: 254,
  phone: 30,
  message: 2000,
} as const;

const tooLong = (label: string, max: number) =>
  `${label} pode ter no máximo ${max} caracteres.`;

/**
 * Telefone brasileiro: ignora tudo que não é dígito e o prefixo 55, e exige
 * 10 dígitos (fixo) ou 11 (celular), com DDD.
 */
function isValidPhone(value: string) {
  let digits = value.replace(/\D/g, "");
  if (/^55\d{10,11}$/.test(digits)) digits = digits.slice(2);
  return /^\d{10,11}$/.test(digits);
}

/**
 * Regras do formulário de contato. Todos os campos são obrigatórios, e o
 * "obrigatório" vem antes do "formato inválido" em cada um (o formulário mostra
 * só a primeira mensagem do campo). Reaproveitado pelo servidor na spec de envio.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Informe seu nome.")
    .min(2, "O nome precisa ter ao menos 2 caracteres.")
    .max(contactLimits.name, tooLong("O nome", contactLimits.name)),
  company: z
    .string()
    .trim()
    .min(1, "Informe a empresa ou órgão.")
    .min(2, "A empresa ou órgão precisa ter ao menos 2 caracteres.")
    .max(
      contactLimits.company,
      tooLong("A empresa ou órgão", contactLimits.company),
    ),
  email: z
    .string()
    .trim()
    .min(1, "Informe seu e-mail.")
    .max(contactLimits.email, tooLong("O e-mail", contactLimits.email))
    .pipe(z.email("Informe um e-mail válido.")),
  phone: z
    .string()
    .trim()
    .min(1, "Informe um telefone ou WhatsApp.")
    .max(contactLimits.phone, tooLong("O telefone", contactLimits.phone))
    .refine(isValidPhone, "Informe um telefone válido com DDD."),
  message: z
    .string()
    .trim()
    .min(1, "Conte como podemos ajudar.")
    .min(10, "Descreva um pouco mais, com ao menos 10 caracteres.")
    .max(contactLimits.message, tooLong("A mensagem", contactLimits.message)),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
