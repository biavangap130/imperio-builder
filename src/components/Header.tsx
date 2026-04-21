import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { smoothScrollTo } from "@/hooks/use-lenis";

const navItems = [
  { id: "home", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "diferenciais", label: "Diferenciais" },
  { id: "contactos", label: "Contactos" },
] as const;

const scrollToSection = (id: string) => smoothScrollTo(id, 80);

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 120;
      let current = "home";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= y) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-[var(--shadow-card)]"
          : "border-b border-transparent bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4">
        <Logo variant="light" />

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-sm rounded-md transition-all ${
                active === item.id
                  ? "text-brand-gold font-semibold bg-brand-gold/10"
                  : "text-foreground/80 font-medium hover:text-brand-gold hover:bg-secondary/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+244976033941"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-brand-gold transition-colors"
          >
            <Phone className="h-4 w-4" />
            +244 976 033 941
          </a>
          <Button onClick={() => scrollToSection("contactos")} variant="hero" size="sm">
            Solicitar orçamento
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary/60"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container mx-auto flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => scrollToSection(item.id), 50);
                }}
                className={`px-4 py-3 text-left rounded-md text-base ${
                  active === item.id
                    ? "font-semibold text-brand-gold bg-brand-gold/10"
                    : "font-medium text-foreground hover:bg-secondary/60"
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="hero"
              className="mt-2"
              onClick={() => {
                setOpen(false);
                setTimeout(() => scrollToSection("contactos"), 50);
              }}
            >
              Solicitar orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}