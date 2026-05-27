import { FireplaceGlyph } from "./FireplaceGlyph";

type Apt404LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Apt404Logo({ className = "", compact = false }: Apt404LogoProps) {
  return (
    <a
      aria-label="APT404 home"
      className={`group inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-signal text-neutral-100 ${className}`}
      href="/"
    >
      <span>APT</span>
      <FireplaceGlyph
        className="h-5 w-7 opacity-95 transition-[filter,opacity] duration-500 group-hover:opacity-100"
        intensity={compact ? 0.82 : 0.72}
      />
      <span>404</span>
    </a>
  );
}
