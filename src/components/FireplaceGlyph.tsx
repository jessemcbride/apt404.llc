type FireplaceGlyphProps = {
  className?: string;
  intensity?: number;
};

export function FireplaceGlyph({ className = "", intensity = 0.75 }: FireplaceGlyphProps) {
  const glow = Math.min(0.9, Math.max(0.18, intensity));

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      role="img"
      viewBox="0 0 96 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="apt-fireplace-spill"
          cx="0"
          cy="0"
          gradientTransform="matrix(31 0 0 18 49 45)"
          gradientUnits="userSpaceOnUse"
          r="1"
        >
          <stop stopColor="currentColor" stopOpacity={glow * 0.74} />
          <stop offset="0.58" stopColor="currentColor" stopOpacity={glow * 0.16} />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <filter id="apt-fireplace-glow" colorInterpolationFilters="sRGB" x="17" y="26" width="62" height="44">
          <feGaussianBlur stdDeviation="2.8" />
        </filter>
      </defs>

      <path d="M13 12h70v7H13z" fill="currentColor" opacity="0.94" />
      <path d="M8 10h80v3H8z" fill="currentColor" opacity="0.42" />
      <path d="M21 22h54v38H21z" stroke="currentColor" strokeOpacity="0.78" strokeWidth="3" />
      <path d="M34 22v12M48 22v12M62 22v12M21 34h54M30 34v26M66 34v26" stroke="currentColor" strokeOpacity="0.34" strokeWidth="1.4" />
      <path d="M32 36h32v24H32z" fill="#030303" />
      <path d="M32 36h32v24H32z" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.2" />
      <path
        d="M33 38h30v22H33z"
        fill="url(#apt-fireplace-spill)"
        filter="url(#apt-fireplace-glow)"
        opacity={glow}
      />
      <path
        d="M42 58c-3-5 2-9 4-13 0 5 6 7 2 13M51 58c-2-4 2-7 3-10 1 4 5 6 2 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={glow * 0.86}
        strokeWidth="1.6"
      />
      <path d="M19 60h58l9 5H10l9-5Z" fill="currentColor" opacity="0.34" />
      <path d="M23 65h50" stroke="currentColor" strokeOpacity="0.36" strokeWidth="1.2" />
    </svg>
  );
}
