import { Link } from "@tanstack/react-router";
import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { WHATSAPP_URL } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer className="bg-brand-navy-deep text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
            Soluções tecnológicas, educativas e corporativas para empresas e instituições em Angola.
          </p>
          <p className="mt-3 text-xs text-primary-foreground/50">NIF: 5002260964</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-primary-foreground/80 hover:text-brand-gold">Home</Link></li>
            <li><Link to="/sobre" className="text-primary-foreground/80 hover:text-brand-gold">Sobre</Link></li>
            <li><Link to="/servicos" className="text-primary-foreground/80 hover:text-brand-gold">Serviços</Link></li>
            <li><Link to="/diferenciais" className="text-primary-foreground/80 hover:text-brand-gold">Diferenciais</Link></li>
            <li><Link to="/contactos" className="text-primary-foreground/80 hover:text-brand-gold">Contactos</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">Contactos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-brand-gold shrink-0" />
              <a href="tel:+244976033941" className="text-primary-foreground/80 hover:text-brand-gold">+244 976 033 941 / 942</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-brand-gold shrink-0" />
              <a href="mailto:geral@imperiogest.com" className="text-primary-foreground/80 hover:text-brand-gold">geral@imperiogest.com</a>
            </li>
            <li className="flex items-start gap-2">
              <Globe className="h-4 w-4 mt-0.5 text-brand-gold shrink-0" />
              <span className="text-primary-foreground/80">www.imperiogest.com</span>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-md bg-brand-whatsapp text-white text-sm font-medium hover:brightness-110 transition">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">Sedes</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand-gold shrink-0" /><span><strong className="text-primary-foreground">Luanda:</strong> Maianga, Largo das Escolas, junto à União dos Escritores Angolanos</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand-gold shrink-0" /><span><strong className="text-primary-foreground">Huambo:</strong> Rua Heróis de Ocupação, n.º 15, Bairro Académico</span></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand-gold shrink-0" /><span><strong className="text-primary-foreground">Benguela:</strong> Rua Aires de Almeida Santos, n.º 4448, Bairro do Capanda</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Imperio Gest – Prestação de Serviços, Lda. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}