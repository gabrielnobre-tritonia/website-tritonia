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
          <div className="flex max-w-[400px] flex-col gap-6">
            <h1 className="text-h1 text-foreground">
              Toda boa solução começa por uma{" "}
              <span className="text-foreground-accent">boa conversa.</span>
            </h1>
            <p className="text-subheadline text-foreground-muted">
              Conte pra gente o que sua operação precisa. A partir daí,
              entendemos o contexto e vemos como podemos ajudar.
            </p>

            <div className="rounded-card text-foreground-light flex flex-col items-start gap-6 bg-[#283B4D] px-10 py-8 text-left">
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

          <ContactForm onSubmit={sendContactMessage} />
        </div>
      </div>
    </section>
  );
};

export default Contato;
