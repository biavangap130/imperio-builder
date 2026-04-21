import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton, WHATSAPP_URL } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — Imperio Gest | Solicite um orçamento" },
      { name: "description", content: "Entre em contacto com a Imperio Gest. Telefone +244 976 033 941, geral@imperiogest.com. Sedes em Luanda, Huambo e Benguela." },
      { property: "og:title", content: "Contactos — Imperio Gest" },
      { property: "og:description", content: "Fale connosco e solicite o seu orçamento." },
    ],
  }),
  component: ContactosPage,
});

const sedes = [
  { cidade: "Luanda (Sede)", endereco: "Maianga, Largo das Escolas, junto à União dos Escritores Angolanos, Casa s/n.º" },
  { cidade: "Huambo", endereco: "Rua Heróis de Ocupação, n.º 15, Bairro Académico — Huambo, Angola" },
  { cidade: "Benguela", endereco: "Rua Aires de Almeida Santos, n.º 4448, Bairro do Capanda — Benguela" },
];

function ContactosPage() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = data.get("nome");
    const email = data.get("email");
    setTimeout(() => {
      toast.success(`Obrigado, ${nome}! A sua mensagem foi recebida. Entraremos em contacto via ${email} em breve.`);
      form.reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--gradient-hero)] text-primary-foreground py-20 sm:py-28">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-4">Fale connosco</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Vamos trabalhar juntos</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Conte-nos sobre o seu projeto e a nossa equipa entrará em contacto.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
              <h2 className="text-2xl font-bold text-primary mb-2">Solicitar orçamento</h2>
              <p className="text-sm text-muted-foreground mb-6">Preencha o formulário e responderemos brevemente.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome">Nome *</Label>
                    <Input id="nome" name="nome" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input id="empresa" name="empresa" className="mt-1.5" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" name="email" required className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" type="tel" name="telefone" className="mt-1.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="assunto">Assunto *</Label>
                  <Input id="assunto" name="assunto" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea id="mensagem" name="mensagem" rows={5} required className="mt-1.5" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "A enviar..." : "Enviar mensagem"}
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-bold text-primary mb-5">Dados de contacto</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand-gold mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Telefone</div>
                      <a href="tel:+244976033941" className="text-muted-foreground hover:text-primary">+244 976 033 941 / 942</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-brand-gold mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <a href="mailto:geral@imperiogest.com" className="text-muted-foreground hover:text-primary">geral@imperiogest.com</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-brand-gold mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">Website</div>
                      <span className="text-muted-foreground">www.imperiogest.com</span>
                    </div>
                  </li>
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-whatsapp text-white text-sm font-semibold hover:brightness-110 transition w-full justify-center"
                >
                  <MessageCircle className="h-4 w-4" />
                  Conversar no WhatsApp
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
                <h3 className="text-xl font-bold text-primary mb-5">As nossas sedes</h3>
                <ul className="space-y-5">
                  {sedes.map((s) => (
                    <li key={s.cidade} className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-brand-gold mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-foreground">{s.cidade}</div>
                        <p className="text-sm text-muted-foreground mt-1">{s.endereco}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}