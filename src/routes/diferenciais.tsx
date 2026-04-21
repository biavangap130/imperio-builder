import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Award, MapPinned, Users, Layers, Sparkles, Briefcase } from "lucide-react";

export const Route = createFileRoute("/diferenciais")({
  head: () => ({
    meta: [
      { title: "Diferenciais — Imperio Gest | Por que nos escolher" },
      { name: "description", content: "Descubra os diferenciais da Imperio Gest: experiência, presença em 3 províncias, integração de soluções e foco em inovação." },
      { property: "og:title", content: "Diferenciais — Imperio Gest" },
      { property: "og:description", content: "Por que escolher a Imperio Gest como parceiro estratégico em Angola." },
    ],
  }),
  component: DiferenciaisPage,
});

const items = [
  { icon: Briefcase, title: "Mais de 15 entidades atendidas", desc: "Experiência comprovada em projetos para empresas e instituições em Angola." },
  { icon: MapPinned, title: "Presença em 3 províncias", desc: "Sede em Luanda, com operações em Huambo e Benguela." },
  { icon: Users, title: "Equipa sénior", desc: "Profissionais com mais de 6 anos de experiência em TIC, Saúde e Educação." },
  { icon: Layers, title: "Soluções integradas", desc: "Tecnologia, gestão e formação reunidas em um único parceiro." },
  { icon: Sparkles, title: "Inovação contínua", desc: "Foco em eficiência integrada e modernização dos serviços." },
  { icon: Award, title: "Sustentabilidade", desc: "Crescimento sólido, transparência e visão de longo prazo." },
];

function DiferenciaisPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--gradient-hero)] text-primary-foreground py-20 sm:py-28">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-4">Por que escolher-nos</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Os nossos diferenciais</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              O que torna a Imperio Gest a parceira ideal para a sua organização.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it, i) => (
              <div
                key={it.title}
                className="group rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-[var(--gradient-gold)] bg-gradient-to-br from-brand-gold to-brand-gold-light flex items-center justify-center shadow-[var(--shadow-gold)] group-hover:scale-110 transition-transform">
                    <it.icon className="h-6 w-6 text-brand-navy-deep" />
                  </div>
                  <span className="text-3xl font-bold text-brand-gold/30 tabular-nums">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{it.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-secondary/40">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold text-primary mb-4">Vamos conversar?</h2>
            <p className="text-muted-foreground mb-8">Estamos prontos para apoiar o crescimento da sua organização.</p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contactos">Entre em contacto</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}