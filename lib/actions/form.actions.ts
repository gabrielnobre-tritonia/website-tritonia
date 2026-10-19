"use server";

import { sendContactEmail } from "@/lib/email/send-contact-email";
import { contactSchema } from "@/lib/validations/contact";

export type ContactResult = { success: boolean; message: string };

export async function sendContactMessage(
  values: unknown,
): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, message: "Dados inválidos." };
  }

  // Honeypot preenchido: finge sucesso para não dar pista ao bot.
  if (parsed.data.website) {
    return { success: true, message: "Mensagem enviada com sucesso" };
  }

  try {
    return await sendContactEmail(parsed.data);
  } catch {
    return { success: false, message: "Falha ao enviar a mensagem." };
  }
}
