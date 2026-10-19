import { sendContactMessage } from "@/lib/actions/form.actions";
import { ContactForm } from "@/components/contact-form";
import { HeroBackground } from "@/components/hero-background";
import { contactChannels } from "@/lib/constants";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-detail";

const Contato = () => {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden">
      <HeroBackground />

      <div className="py-menubar relative mx-auto w-full max-w-[1208px] px-(--page-gutter)">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Abaixo de lg o wrapper some (contents) e os três blocos viram
              itens do grid, na ordem: texto, formulário, canais. */}
          <div className="contents lg:flex lg:flex-col lg:gap-6">
            <div className="flex max-w-100 flex-col gap-6">
              <h1 className="text-h1 text-foreground">
                Toda boa solução começa por uma{" "}
                <span className="text-foreground-accent">boa conversa.</span>
              </h1>
              <p className="text-subheadline text-foreground-muted">
                Conte pra gente o que sua operação precisa. A partir daí,
                entendemos o contexto e vemos como podemos ajudar.
              </p>
            </div>

            <div className="rounded-card text-foreground-light order-3 flex max-w-100 flex-col items-start gap-6 bg-[#283B4D] px-10 py-8 text-left lg:order-0">
              <h2 className="text-body font-semibold">Outros canais</h2>
              {contactChannels.map((channel) => (
                <a
                  key={channel.id}
                  href={channel.href}
                  {...(channel.external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className={`text-body hover:text-foreground-accent flex items-center gap-3 ${focusRing}`}
                >
                  <span aria-hidden="true" className="size-6 shrink-0">
                    {channel.icon}
                  </span>
                  {channel.label}
                </a>
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-0">
            <ContactForm onSubmit={sendContactMessage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
