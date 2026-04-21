import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Target, Eye, Sparkles, Shield, Leaf, Lightbulb } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Imperio Gest | Quem Somos" },
      { name: "description", content: "Imperio Gest é um grupo angolano de soluções em TIC, Saúde, Educação e Gestão de Projetos, com presença em Luanda, Huambo e Benguela." },
      { property: "og:title", content: "Sobre a Imperio Gest" },
      { property: "og:description", content: "Conheça a Imperio Gest: missão, visão, valores e atuação em Angola." },
    ],
  }),
  component: SobrePage,
});

const valores = [
  { icon: Lightbulb, title: "Inovação", desc: "Foco em soluções modernas para o mercado angolano." },
  { icon: Sparkles, title: "Eficiência integrada", desc: "Coordenação inteligente de diferentes áreas de atuação." },
  { icon: Leaf, title: "Sustentabilidade", desc: "Crescimento sólido e de longo prazo." },
  { icon: Shield, title: "Transparência", desc: "Rigor na gestão de participações e investimentos." },
];

function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--gradient-hero)] text-primary-foreground py-20 sm:py-28">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-4">Sobre Nós</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Quem é a Imperio Gest</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Um grupo angolano de empresas dedicado a transformar organizações através de tecnologia,
              gestão estratégica e desenvolvimento de pessoas.
            </p>
          </div>
        </section>

        {/* Perfil */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-6">Perfil profissional</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Imperio Gest – Prestação de Serviços, Lda</strong> é uma empresa que oferece soluções nas áreas de
              Tecnologia de Informação e Comunicação (TIC), Saúde, Biblioteconomia, Gestão de Projetos,
              Negócios e Alfabetização Digital.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Atuamos em diferentes dimensões das tecnologias de informação e serviços profissionais, com
              profissionais com mais de <strong className="text-foreground">6 anos de experiência</strong> em projetos dos setores de Saúde, TIC e Educação/Ensino.
              Hoje contamos com <strong className="text-foreground">8 colaboradores diretos</strong> e cerca de <strong className="text-foreground">30 indiretos</strong>, atendendo mais de
              <strong className="text-foreground"> 15 entidades e empresas</strong> em <strong className="text-foreground">3 províncias</strong> (Luanda, Huambo e Benguela).
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {[
                { n: "15+", l: "Entidades atendidas" },
                { n: "8", l: "Colaboradores diretos" },
                { n: "3", l: "Províncias de atuação" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
                  <div className="text-4xl font-bold text-brand-gold">{s.n}</div>
                  <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Missão / Visão */}
        <section className="py-20 bg-secondary/40">
          <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-background border border-border p-8 shadow-[var(--shadow-card)]">
              <div className="h-12 w-12 rounded-xl bg-brand-gold/15 flex items-center justify-center mb-5">
                <Target className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implementar tecnologias de informação e comunicação, saúde e modernização dos serviços hospitalares
                e da administração pública em geral.
              </p>
            </div>
            <div className="rounded-2xl bg-background border border-border p-8 shadow-[var(--shadow-card)]">
              <div className="h-12 w-12 rounded-xl bg-brand-gold/15 flex items-center justify-center mb-5">
                <Eye className="h-6 w-6 text-brand-gold" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transformar Angola e suas organizações com recursos tecnológicos e digitais, implementando hospitais
                e administrações tecnologicamente modernos para atender à demanda populacional.
              </p>
            </div>
          </div>
        </section>

        {/* Missão organizacional */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Entidade organizacional</h2>
            <div className="space-y-6">
              <div className="rounded-xl border-l-4 border-brand-gold bg-card p-6">
                <h4 className="font-semibold text-primary mb-2">Missão organizacional</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Promover a eficiência e a integração de serviços através de uma gestão estratégica inovadora,
                  garantindo o desenvolvimento sustentável e a maximização de resultados para parceiros e investimentos.
                </p>
              </div>
              <div className="rounded-xl border-l-4 border-brand-gold bg-card p-6">
                <h4 className="font-semibold text-primary mb-2">Visão organizacional</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a consultora de referência em Angola na integração de soluções de tecnologia, saúde e gestão,
                  reconhecida pela excelência na criação de valor e consultoria estratégica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-20 bg-secondary/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Os nossos valores</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((v) => (
                <div key={v.title} className="rounded-2xl bg-background border border-border p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1">
                  <div className="h-12 w-12 rounded-xl bg-brand-gold/15 flex items-center justify-center mb-4">
                    <v.icon className="h-6 w-6 text-brand-gold" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">{v.title}</h4>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}