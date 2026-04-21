import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton, WHATSAPP_URL } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SplineScene } from "@/components/SplineScene";
import { useState } from "react";
import { toast } from "sonner";
import {
  Monitor, Megaphone, GraduationCap, ClipboardList, Building2, Check,
  ArrowRight, Target, Eye, Sparkles, MapPinned, Users, Briefcase,
  Lightbulb, Leaf, Shield, Award, Layers,
  Phone, Mail, Globe, MessageCircle, MapPin,
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

const stats = [
  { icon: Briefcase, n: "15+", l: "Entidades atendidas" },
  { icon: Users, n: "8", l: "Colaboradores diretos" },
  { icon: MapPinned, n: "3", l: "Províncias de atuação" },
  { icon: Sparkles, n: "6+", l: "Anos de experiência" },
];

const valores = [
  { icon: Lightbulb, title: "Inovação", desc: "Soluções modernas para o mercado angolano." },
  { icon: Sparkles, title: "Eficiência integrada", desc: "Coordenação inteligente entre áreas." },
  { icon: Leaf, title: "Sustentabilidade", desc: "Crescimento sólido e de longo prazo." },
  { icon: Shield, title: "Transparência", desc: "Rigor na gestão de participações." },
];

const servicos = [
  {
    icon: Monitor,
    title: "Tecnologia de Informação e Comunicação (TIC)",
    highlight: "Consultoria e implementação de soluções tecnológicas para aumentar a produtividade.",
    items: [
      "Produção de tecnologias locais e gestão de sistemas",
      "Instalação e manutenção de CCTV e cerca elétrica",
      "Vídeo-porteiro, fechadura elétrica e som ambiente",
      "Desenvolvimento e manutenção de bases de dados",
      "Infraestrutura de redes e hardware",
      "Softwares de gestão de informações",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Digital e Comunicação",
    highlight: "Posicionamento digital completo na internet e nas redes sociais.",
    items: [
      "Sites institucionais e comerciais",
      "Campanhas Google Ads e Facebook",
      "Branding e identidade visual",
      "Design gráfico profissional",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formação e Capacitação Profissional",
    highlight: "Desenvolvimento de pessoas e equipas para resultados melhores.",
    items: [
      "Ferramentas digitais e de escritório",
      "Workshops de gestão e liderança",
      "Literacia digital para comunidades",
      "Certificações (ex.: MOS Microsoft)",
    ],
  },
  {
    icon: ClipboardList,
    title: "Gestão de Projetos e Programas",
    highlight: "Metodologia profissional (MPI) para projetos de alta complexidade.",
    items: [
      "Planeamento, execução e monitoramento",
      "Consultoria institucional",
      "Planos estratégicos e estudos de viabilidade",
      "Parcerias público-privadas",
    ],
  },
  {
    icon: Building2,
    title: "Infraestrutura Administrativa e Logística",
    highlight: "Apoio à infraestrutura e rotina administrativa das organizações.",
    items: [
      "Consumíveis administrativos",
      "Mobiliário de escritório",
      "Gestão documental e digitalização",
      "Reprografia e gráficos",
    ],
  },
];

const diferenciais = [
  { icon: Briefcase, title: "Mais de 15 entidades atendidas", desc: "Experiência comprovada em projetos para empresas e instituições em Angola." },
  { icon: MapPinned, title: "Presença em 3 províncias", desc: "Sede em Luanda, com operações em Huambo e Benguela." },
  { icon: Users, title: "Equipa sénior", desc: "Profissionais com mais de 6 anos em TIC, Saúde e Educação." },
  { icon: Layers, title: "Soluções integradas", desc: "Tecnologia, gestão e formação num único parceiro." },
  { icon: Sparkles, title: "Inovação contínua", desc: "Foco em eficiência integrada e modernização." },
  { icon: Award, title: "Sustentabilidade", desc: "Crescimento sólido, transparência e visão de longo prazo." },
];

const sedes = [
  { cidade: "Luanda (Sede)", endereco: "Maianga, Largo das Escolas, junto à União dos Escritores Angolanos, Casa s/n.º" },
  { cidade: "Huambo", endereco: "Rua Heróis de Ocupação, n.º 15, Bairro Académico — Huambo, Angola" },
  { cidade: "Benguela", endereco: "Rua Aires de Almeida Santos, n.º 4448, Bairro do Capanda — Benguela" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SobreSection />
        <ServicosSection />
        <DiferenciaisSection />
        <ContactosSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ───────────────────────────  HERO  ─────────────────────────── */
function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[var(--gradient-hero)] text-foreground min-h-[88vh] flex items-center"
    >
      {/* Ambient glow */}
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-gold/15 blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-teal/20 blur-[120px]" aria-hidden="true" />

      <div className="relative container mx-auto px-4 py-20 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold animate-pulse" />
            Imperio Gest – Lda • Angola
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6 text-foreground">
            Soluções <span className="text-brand-gold">tecnológicas</span>,
            <br />educacionais e corporativas
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 mb-8 max-w-xl leading-relaxed">
            Consultoria estratégica, tecnologia, formação profissional e gestão de
            projetos para empresas e instituições em Angola.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={() => scrollToSection("contactos")} variant="hero" size="lg">
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </Button>
            <Button asChild variant="outlineLight" size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* 3D scene */}
        <div className="relative h-[380px] lg:h-[500px] hidden md:block">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Stats strip */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-brand-gold/20 bg-brand-navy-deep/70 backdrop-blur">
        <div className="container mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map((d) => (
            <div key={d.l} className="flex items-center gap-3">
              <d.icon className="h-6 w-6 text-brand-gold shrink-0" />
              <div>
                <div className="text-xl font-bold text-foreground">{d.n}</div>
                <div className="text-[11px] text-foreground/60">{d.l}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  SOBRE  ─────────────────────────── */
function SobreSection() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader eyebrow="Sobre nós" title="Quem é a Imperio Gest" />

        <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <p className="text-foreground/80 leading-relaxed mb-4">
              A <strong className="text-brand-gold">Imperio Gest – Prestação de Serviços, Lda</strong> oferece
              soluções nas áreas de Tecnologia de Informação e Comunicação (TIC), Saúde,
              Biblioteconomia, Gestão de Projetos, Negócios e Alfabetização Digital.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Atuamos com profissionais que somam mais de <strong className="text-foreground">6 anos
              de experiência</strong> em projetos de Saúde, TIC e Educação. Hoje contamos com
              <strong className="text-foreground"> 8 colaboradores diretos</strong> e cerca de
              <strong className="text-foreground"> 30 indiretos</strong>, atendendo mais de
              <strong className="text-foreground"> 15 entidades</strong> em Luanda, Huambo e Benguela.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureCard
              icon={<Target className="h-5 w-5 text-brand-navy-deep" />}
              title="Missão"
              desc="Implementar TIC, saúde e modernização dos serviços hospitalares e da administração pública."
            />
            <FeatureCard
              icon={<Eye className="h-5 w-5 text-brand-navy-deep" />}
              title="Visão"
              desc="Transformar Angola com hospitais e administrações tecnologicamente modernos."
              className="sm:mt-8"
            />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-foreground text-center mb-8">Os nossos valores</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valores.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl bg-card border border-border p-6 hover:border-brand-gold/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-11 w-11 rounded-xl bg-brand-gold/15 flex items-center justify-center mb-4">
                <v.icon className="h-5 w-5 text-brand-gold" />
              </div>
              <h4 className="font-bold text-foreground mb-1">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  SERVIÇOS  ─────────────────────────── */
function ServicosSection() {
  return (
    <section id="servicos" className="py-24 bg-[var(--gradient-section)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader eyebrow="O que fazemos" title="Cinco áreas de atuação integradas" />

        <div className="space-y-6">
          {servicos.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-brand-gold/50 hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-gold-light flex items-center justify-center shadow-[var(--shadow-gold)]">
                    <s.icon className="h-7 w-7 text-brand-navy-deep" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold tracking-widest text-brand-gold uppercase mb-2">
                    0{i + 1} — Área de atuação
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground italic mb-4 border-l-2 border-brand-gold pl-4">
                    {s.highlight}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                        <Check className="h-4 w-4 text-brand-gold mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  DIFERENCIAIS  ─────────────────────────── */
function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader eyebrow="Por que escolher-nos" title="Os nossos diferenciais" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciais.map((it, i) => (
            <div
              key={it.title}
              className="group rounded-2xl border border-border bg-card p-7 hover:border-brand-gold/50 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-gold to-brand-gold-light flex items-center justify-center shadow-[var(--shadow-gold)] group-hover:scale-110 transition-transform">
                  <it.icon className="h-6 w-6 text-brand-navy-deep" />
                </div>
                <span className="text-3xl font-bold text-brand-gold/30 tabular-nums">0{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────  CONTACTOS  ─────────────────────────── */
function ContactosSection() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = data.get("nome");
    const email = data.get("email");
    setTimeout(() => {
      toast.success(`Obrigado, ${nome}! A sua mensagem foi recebida. Responderemos via ${email} em breve.`);
      form.reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <section id="contactos" className="py-24 bg-[var(--gradient-section)]">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader eyebrow="Fale connosco" title="Vamos trabalhar juntos" />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-bold text-foreground mb-2">Solicitar orçamento</h3>
            <p className="text-sm text-muted-foreground mb-6">Preencha o formulário e responderemos brevemente.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome" className="text-foreground">Nome *</Label>
                  <Input id="nome" name="nome" required className="mt-1.5 bg-background" />
                </div>
                <div>
                  <Label htmlFor="empresa" className="text-foreground">Empresa</Label>
                  <Input id="empresa" name="empresa" className="mt-1.5 bg-background" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input id="email" type="email" name="email" required className="mt-1.5 bg-background" />
                </div>
                <div>
                  <Label htmlFor="telefone" className="text-foreground">Telefone</Label>
                  <Input id="telefone" type="tel" name="telefone" className="mt-1.5 bg-background" />
                </div>
              </div>
              <div>
                <Label htmlFor="assunto" className="text-foreground">Assunto *</Label>
                <Input id="assunto" name="assunto" required className="mt-1.5 bg-background" />
              </div>
              <div>
                <Label htmlFor="mensagem" className="text-foreground">Mensagem *</Label>
                <Textarea id="mensagem" name="mensagem" rows={5} required className="mt-1.5 bg-background" />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
                {submitting ? "A enviar..." : "Enviar mensagem"}
              </Button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-[var(--shadow-card)]">
              <h3 className="text-xl font-bold text-foreground mb-5">Dados de contacto</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-gold mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Telefone</div>
                    <a href="tel:+244976033941" className="text-muted-foreground hover:text-brand-gold">+244 976 033 941 / 942</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-brand-gold mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a href="mailto:geral@imperiogest.com" className="text-muted-foreground hover:text-brand-gold">geral@imperiogest.com</a>
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
              <h3 className="text-xl font-bold text-foreground mb-5">As nossas sedes</h3>
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
      </div>
    </section>
  );
}

/* ───────────────────────────  HELPERS  ─────────────────────────── */
function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <p className="text-sm tracking-[0.3em] uppercase text-brand-gold mb-3">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>
      <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-light" />
    </div>
  );
}

function FeatureCard({
  icon, title, desc, className = "",
}: { icon: React.ReactNode; title: string; desc: string; className?: string }) {
  return (
    <div className={`rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-card)] ${className}`}>
      <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-brand-gold to-brand-gold-light flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-bold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}
