import "server-only";

import { Resend } from "resend";

import { buildContactEmail } from "@/lib/email/contact-email";
import type { ContactFormValues } from "@/lib/validations/contact";

export async function sendContactEmail(values: ContactFormValues) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  const { html } = buildContactEmail(values);

  const { error } = await new Resend(apiKey).emails.send({
    from: from || "Site Tritonia <site@tritonia.com.br>",
    to: [to],
    replyTo: values.email,
    subject: `Novo contato pelo site: ${values.name}`,
    text: [
      `Nome: ${values.name}`,
      `Company: ${values.company}`,
      `E-mail: ${values.email}`,
      `Telefone/WPP: ${values.phone}`,
      "",
      "Mensagem:",
      values.message,
    ].join("\n"),
    html,
  });

  if (error) {
    console.error(
      "[contato] O Resend recusou o envio:",
      error.name,
      error.message,
    );
    return { success: false, message: "Falha ao enviar a mensagem" };
    // throw new Error("Falha ao enviar a mensagem.");
  }

  return { success: true, message: "Mensagem enviada com sucesso" };
}
