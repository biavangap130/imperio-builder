import { Link } from "@tanstack/react-router";

interface LogoProps {
  variant?: "dark" | "light";
  showText?: boolean;
  className?: string;
}

export function Logo({ variant = "dark", showText = true, className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-brand-gold" : "text-primary";
  const subColor = variant === "light" ? "text-brand-gold-light/80" : "text-muted-foreground";

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`} aria-label="Imperio Gest — Início">
      <LogoMark className="h-10 w-10 transition-transform duration-300 group-hover:rotate-12" />
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold tracking-[0.18em] text-base sm:text-lg ${textColor}`}>
            IMPERIO GEST
          </span>
          <span className={`text-[10px] tracking-[0.25em] mt-0.5 ${subColor}`}>
            LDA
          </span>
        </div>
      )}
    </Link>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.88 0.1 88)" />
          <stop offset="50%" stopColor="oklch(0.78 0.13 85)" />
          <stop offset="100%" stopColor="oklch(0.62 0.12 75)" />
        </linearGradient>
        <linearGradient id="goldGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.65 0.12 80)" />
          <stop offset="100%" stopColor="oklch(0.9 0.1 90)" />
        </linearGradient>
      </defs>
      {/* Outer hexagon */}
      <polygon
        points="50,6 88,28 88,72 50,94 12,72 12,28"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Inner hexagon (rotated subtly via inset) */}
      <polygon
        points="50,22 76,36 76,64 50,78 24,64 24,36"
        fill="none"
        stroke="url(#goldGrad2)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Stylized "I G" monogram in the center */}
      <g stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <line x1="42" y1="38" x2="42" y2="62" />
        <path d="M 58 38 L 58 62 L 50 62" />
        <line x1="50" y1="50" x2="58" y2="50" />
      </g>
    </svg>
  );
}