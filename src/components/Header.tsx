import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/servicos", label: "Serviços" },
  { to: "/diferenciais", label: "Diferenciais" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 rounded-md transition-colors hover:text-primary hover:bg-secondary"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "px-4 py-2 text-sm font-semibold rounded-md text-primary bg-secondary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+244976033941"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            +244 976 033 941
          </a>
          <Button asChild variant="hero" size="sm">
            <Link to="/contactos">Solicitar orçamento</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col px-4 py-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md text-base font-medium text-foreground hover:bg-secondary"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "px-4 py-3 rounded-md text-base font-semibold text-primary bg-secondary" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link to="/contactos" onClick={() => setOpen(false)}>Solicitar orçamento</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}