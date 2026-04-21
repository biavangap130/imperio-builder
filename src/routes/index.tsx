import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton, WHATSAPP_URL } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/Logo";
import heroBg from "@/assets/hero-bg.jpg";
import {
  Monitor, Megaphone, GraduationCap, ClipboardList, Building2,
  ArrowRight, Target, Eye, Sparkles, MapPinned, Users, Briefcase,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imperio Gest – Soluções Tecnológicas, Educacionais e Corporativas em Angola" },
      { name: "description", content: "Imperio Gest oferece serviços de Tecnologia de Informação, Gestão de Projetos, Formação Profissional e Infraestrutura Administrativa em Angola. Solicite um orçamento hoje." },
      { property: "og:title", content: "Imperio Gest – Soluções Tecnológicas em Angola" },
      { property: "og:description", content: "Consultoria estratégica, tecnologia, formação profissional e gestão de projetos em Angola." },
    ],
  }),
  component: HomePage,
});

const servicosResumo = [
  { icon: Monitor, title: "TIC", desc: "Tecnologia, redes, CCTV, software e equipamentos." },
  { icon: Megaphone, title: "Marketing Digital", desc: "Sites, branding, Google Ads e redes sociais." },
  { icon: GraduationCap, title: "Formação Profissional", desc: "Capacitação, workshops e certificações." },
  { icon: ClipboardList, title: "Gestão de Projetos", desc: "Planeamento, consultoria e estudos de viabilidade." },
  { icon: Building2, title: "Infraestrutura Administrativa", desc: "Mobiliário, consumíveis e gestão documental." },
];

const diferenciais = [
  { icon: Briefcase, n: "15+", l: "Entidades atendidas" },
  { icon: Users, n: "8", l: "Colaboradores diretos" },
  { icon: MapPinned, n: "3", l: "Províncias de atuação" },
  { icon: Sparkles, n: "6+", l: "Anos de experiência" },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden text-primary-foreground">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBg})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[var(--gradient-overlay)]" aria-hidden="true" />

          <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
                Imperio Gest – Lda • Angola
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
                Soluções <span className="text-brand-gold">Tecnológicas</span>, Educacionais e Corporativas
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed">
                Consultoria estratégica, tecnologia, formação profissional e gestão de projetos para empresas
                e instituições em Angola.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contactos">
                    Solicitar orçamento <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outlineLight" size="xl">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-gold/20 blur-3xl rounded-full" aria-hidden="true" />
                <LogoMark className="relative h-72 w-72 drop-shadow-[0_10px_40px_oklch(0.78_0.13_85_/_0.4)]" />
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="relative border-t border-primary-foreground/10 bg-brand-navy-deep/40 backdrop-blur">
            <div className="container mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {diferenciais.map((d) => (
                <div key={d.l} className="flex items-center gap-3">
                  <d.icon className="h-7 w-7 text-brand-gold shrink-0" />
                  <div>
                    <div className="text-2xl font-bold text-primary-foreground">{d.n}</div>
                    <div className="text-xs text-primary-foreground/70">{d.l}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre resumo */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-brand-gold mb-3">Sobre nós</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-5">
                Um grupo angolano focado em transformação digital e gestão estratégica
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A Imperio Gest oferece soluções nas áreas de TIC, Saúde, Biblioteconomia, Gestão de Projetos,
                Negócios e Alfabetização Digital. A nossa equipa tem mais de 6 anos de experiência em projetos
                dos setores de Saúde, TIC e Educação, com sede em Luanda e operações em Huambo e Benguela.
              </p>
              <Button asChild variant="default">
                <Link to="/sobre">Conhecer a empresa <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-card)]">
                <div className="h-11 w-11 rounded-xl bg-brand-gold/15 flex items-center justify-center mb-4">
                  <Target className="h-5 w-5 text-brand-gold" />
                </div>
                <h3 className="font-bold text-primary mb-2">Missão</h3>
                <p className="text-sm text-muted-foreground">Implementar TIC, saúde e modernização dos serviços hospitalares e da administração pública.</p>
              </div>
              <div className="rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-card)] sm:mt-8">
                <div className="h-11 w-11 rounded-xl bg-brand-gold/15 flex items-center justify-center mb-4">
                  <Eye className="h-5 w-5 text-brand-gold" />
                </div>
                <h3 className="font-bold text-primary mb-2">Visão</h3>
                <p className="text-sm text-muted-foreground">Transformar Angola com hospitais e administrações tecnologicamente modernos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços resumo */}
        <section className="py-20 bg-secondary/40">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-sm tracking-[0.3em] uppercase text-brand-gold mb-3">O que fazemos</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Cinco áreas de atuação integradas</h2>
              <p className="text-muted-foreground">Soluções completas para impulsionar a sua organização.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicosResumo.map((s) => (
                <div key={s.title} className="group rounded-2xl bg-background border border-border p-6 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-[var(--gradient-gold)] bg-gradient-to-br from-brand-gold to-brand-gold-light flex items-center justify-center mb-4 shadow-[var(--shadow-gold)] group-hover:scale-110 transition-transform">
                    <s.icon className="h-6 w-6 text-brand-navy-deep" />
                  </div>
                  <h3 className="font-bold text-primary text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="default" size="lg">
                <Link to="/servicos">Ver todos os serviços <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[var(--gradient-hero)] text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5">Pronto para o próximo passo?</h2>
            <p className="text-primary-foreground/80 text-lg mb-10">
              Solicite um orçamento personalizado ou fale connosco diretamente no WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contactos">Solicitar orçamento</Link>
              </Button>
              <Button asChild variant="outlineLight" size="xl">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}