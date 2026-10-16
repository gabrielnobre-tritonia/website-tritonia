"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useId } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { GradientButton } from "@/components/link-button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

const defaultValues: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

type ContactFormProps = {
  onSubmit?: (values: ContactFormValues) => Promise<void>;
};

export function ContactForm({
  onSubmit: deliver = async () => {},
}: ContactFormProps) {
  const baseId = useId();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues,
  });

  const submit = handleSubmit(async (values) => {
    try {
      await deliver(values);
    } catch {
      toast.error("Não foi possível enviar sua mensagem.", {
        description: "Tente novamente em instantes.",
      });
      return;
    }
    reset();
    toast.success("Mensagem enviada!", {
      description: "Obrigado por falar com a Tritonia.",
    });
  });

  return (
    <div className="rounded-card border-menubar-border bg-menubar text-foreground-light shadow-menubar backdrop-blur-menubar border px-10 py-8">
      <form noValidate aria-label="Formulário de contato" onSubmit={submit}>
        <FieldGroup className="gap-x-4 grid grid-cols-1 gap-y-5 sm:grid-cols-2">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={`${baseId}-name`} className="font-display">
                  Nome
                </FieldLabel>
                <Input
                  {...field}
                  id={`${baseId}-name`}
                  type="text"
                  autoComplete="name"
                  aria-invalid={fieldState.invalid}
                  aria-required="true"
                  aria-describedby={
                    fieldState.invalid ? `${baseId}-name-error` : undefined
                  }
                />
                {fieldState.invalid && (
                  <FieldError
                    id={`${baseId}-name-error`}
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />

          <Controller
            name="company"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={`${baseId}-company`}
                  className="font-display"
                >
                  Empresa/Órgão
                </FieldLabel>
                <Input
                  {...field}
                  id={`${baseId}-company`}
                  type="text"
                  autoComplete="organization"
                  aria-invalid={fieldState.invalid}
                  aria-required="true"
                  aria-describedby={
                    fieldState.invalid ? `${baseId}-company-error` : undefined
                  }
                />
                {fieldState.invalid && (
                  <FieldError
                    id={`${baseId}-company-error`}
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={`${baseId}-email`}
                  className="font-display"
                >
                  E-mail
                </FieldLabel>
                <Input
                  {...field}
                  id={`${baseId}-email`}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  aria-invalid={fieldState.invalid}
                  aria-required="true"
                  aria-describedby={
                    fieldState.invalid ? `${baseId}-email-error` : undefined
                  }
                />
                {fieldState.invalid && (
                  <FieldError
                    id={`${baseId}-email-error`}
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={`${baseId}-phone`}
                  className="font-display"
                >
                  Telefone/WhatsApp
                </FieldLabel>
                <Input
                  {...field}
                  id={`${baseId}-phone`}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  aria-invalid={fieldState.invalid}
                  aria-required="true"
                  aria-describedby={
                    fieldState.invalid ? `${baseId}-phone-error` : undefined
                  }
                />
                {fieldState.invalid && (
                  <FieldError
                    id={`${baseId}-phone-error`}
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />

          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className="sm:col-span-2"
              >
                <FieldLabel
                  htmlFor={`${baseId}-message`}
                  className="font-display"
                >
                  Como podemos te ajudar?
                </FieldLabel>
                <Textarea
                  {...field}
                  id={`${baseId}-message`}
                  aria-invalid={fieldState.invalid}
                  aria-required="true"
                  aria-describedby={
                    fieldState.invalid ? `${baseId}-message-error` : undefined
                  }
                />
                {fieldState.invalid && (
                  <FieldError
                    id={`${baseId}-message-error`}
                    errors={[fieldState.error]}
                  />
                )}
              </Field>
            )}
          />

          <GradientButton
            type="submit"
            disabled={isSubmitting}
            icon={<Send className="size-full" strokeWidth={1.75} />}
            className="w-full justify-self-start sm:col-span-2"
          >
            {isSubmitting ? "Enviando…" : "Enviar mensagem"}
          </GradientButton>
        </FieldGroup>
      </form>
    </div>
  );
}
