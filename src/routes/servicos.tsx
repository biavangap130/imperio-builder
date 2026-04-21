import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Monitor, Megaphone, GraduationCap, ClipboardList, Building2, Check } from "lucide-react";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Imperio Gest | TIC, Marketing, Formação e Gestão" },
      { name: "description", content: "Serviços da Imperio Gest: TIC, Marketing Digital, Formação Profissional, Gestão de Projetos e Infraestrutura Administrativa em Angola." },
      { property: "og:title", content: "Serviços — Imperio Gest" },
      { property: "og:description", content: "Soluções completas em TIC, marketing, formação, gestão de projetos e infraestrutura para empresas angolanas." },
    ],
  }),
  component: ServicosPage,
});

const servicos = [
  {
    icon: Monitor,
    title: "Tecnologia de Informação e Comunicação (TIC)",
    highlight: "Consultoria e implementação de soluções tecnológicas para aumentar a produtividade administrativa.",
    items: [
      "Produção de tecnologias locais e gestão de sistemas",
      "Instalação e manutenção de CCTV e cerca elétrica",
      "Vídeo-porteiro, fechadura elétrica e som ambiente",
      "Desenvolvimento e manutenção de bases de dados",
      "Infraestrutura de redes e hardware",
      "Implementação de softwares de gestão de informações",
      "Manutenção e fornecimento de equipamentos tecnológicos",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Digital e Comunicação Institucional",
    highlight: "Apoio completo para empresas se posicionarem melhor na internet e nas redes sociais.",
    items: [
      "Criação de sites institucionais e comerciais",
      "Gestão de campanhas Google Ads e Facebook for Business",
      "Estratégias de posicionamento digital e branding",
      "Design gráfico e identidade visual",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formação e Capacitação Profissional",
    highlight: "Desenvolvimento de pessoas e equipas para melhorar resultados da organização.",
    items: [
      "Formação em ferramentas digitais e de escritório",
      "Capacitação em programas internacionais de alto rendimento",
      "Workshops temáticos (gestão, inovação, liderança)",
      "Formação em literacia digital para comunidades",
      "Certificação profissional (ex.: Microsoft Office Specialist)",
      "Treinamento administrativo para equipas de gestão",
    ],
  },
  {
    icon: ClipboardList,
    title: "Gestão de Projetos e Programas",
    highlight: "Metodologia profissional de gestão de projetos (MPI) para projetos de alta complexidade.",
    items: [
      "Planeamento, execução e monitoramento de projetos",
      "Consultoria em gestão institucional e desenvolvimento organizacional",
      "Elaboração de planos estratégicos e estudos de viabilidade",
      "Gestão de parcerias público-privadas",
      "Avaliação de impacto e relatórios técnicos",
    ],
  },
  {
    icon: Building2,
    title: "Infraestrutura Administrativa e Logística",
    highlight: "Apoio completo para infraestrutura e rotina administrativa das organizações.",
    items: [
      "Fornecimento de consumíveis administrativos (papel, toners, etc.)",
      "Fornecimento de mobiliário de escritório",
      "Gestão documental e digitalização de arquivos",
      "Serviços de reprografia e gráficos",
    ],
  },
];

function ServicosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-[var(--gradient-hero)] text-primary-foreground py-20 sm:py-28">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-4">O que fazemos</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Os nossos serviços</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Cinco áreas de atuação integradas para impulsionar empresas e instituições angolanas.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl space-y-8">
            {servicos.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-8 sm:p-10 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="h-16 w-16 rounded-2xl bg-[var(--gradient-gold)] bg-gradient-to-br from-brand-gold to-brand-gold-light flex items-center justify-center shadow-[var(--shadow-gold)]">
                      <s.icon className="h-8 w-8 text-brand-navy-deep" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold tracking-widest text-brand-gold uppercase mb-2">
                      0{i + 1} — Área de atuação
                    </p>
                    <h2 className="text-2xl font-bold text-primary mb-3">{s.title}</h2>
                    <p className="text-muted-foreground italic mb-5 border-l-2 border-brand-gold pl-4">
                      {s.highlight}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
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
        </section>

        <section className="py-16 bg-[var(--gradient-hero)] text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Precisa de uma proposta personalizada?</h2>
            <p className="text-primary-foreground/80 mb-8">Conte-nos sobre o seu projeto e receba um orçamento sob medida.</p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contactos">Solicitar orçamento</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}