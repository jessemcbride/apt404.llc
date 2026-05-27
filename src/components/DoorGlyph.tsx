type DoorGlyphProps = {
  className?: string;
  intensity?: number;
  logo?: boolean;
};

export function DoorGlyph({
  className = "",
  intensity = 0.8,
  logo = false,
}: DoorGlyphProps) {
  const glowOpacity = Math.min(0.92, Math.max(0.18, intensity));
  const spillOpacity = Math.min(0.72, Math.max(0.08, intensity * 0.66));
  const geometryTransform = "translate(180 0) scale(-1 1)";

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      role="img"
      viewBox="0 0 180 260"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={logo ? "apt-logo-frame" : "apt-frame"} x1="37" x2="98" y1="32" y2="226">
          <stop offset="0" stopColor="#f0f0ed" stopOpacity="0.92" />
          <stop offset="0.62" stopColor="#d7d7d2" stopOpacity="0.82" />
          <stop offset="1" stopColor="#adada8" stopOpacity="0.66" />
        </linearGradient>
        <linearGradient id={logo ? "apt-logo-door" : "apt-door"} x1="103" x2="153" y1="34" y2="221">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.98" />
          <stop offset="0.55" stopColor="#f3f3f0" stopOpacity="0.96" />
          <stop offset="1" stopColor="#d7d7d2" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id={logo ? "apt-logo-edge" : "apt-edge"} x1="153" x2="164" y1="19" y2="237">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.98" />
          <stop offset="0.52" stopColor="#d8d8d3" stopOpacity="0.78" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.86" />
        </linearGradient>
        <linearGradient id={logo ? "apt-logo-floor" : "apt-floor"} x1="32" x2="160" y1="230" y2="245">
          <stop stopColor="#f2f2ed" stopOpacity="0.14" />
          <stop offset="0.45" stopColor="#f2f2ed" stopOpacity="0.46" />
          <stop offset="1" stopColor="#f2f2ed" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id={logo ? "apt-logo-spill" : "apt-spill"} cx="0" cy="0" r="1" gradientTransform="matrix(74 0 0 112 143 126)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity={spillOpacity} />
          <stop offset="0.42" stopColor="#ffffff" stopOpacity={spillOpacity * 0.24} />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id={logo ? "apt-logo-glow" : "apt-glow"} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" x="102" y="0" width="78" height="252">
          <feGaussianBlur stdDeviation={logo ? "1.4" : "4.8"} />
        </filter>
      </defs>

      <g transform={geometryTransform}>
        <path
          d="M154 24c18 27 27 63 27 107 0 45-12 81-37 107V31c4-2 7-4 10-7Z"
          fill={`url(#${logo ? "apt-logo-spill" : "apt-spill"})`}
          opacity={logo ? 0.46 : 0.95}
        />

        <path d="M42 40h63v181H42V40Z" fill="#030303" opacity="0.96" />
        <path d="M35 32h78v8H35V32Z" fill={`url(#${logo ? "apt-logo-frame" : "apt-frame"})`} />
        <path d="M35 32h9v190H35V32Z" fill={`url(#${logo ? "apt-logo-frame" : "apt-frame"})`} />
        <path d="M104 32h9v190h-9V32Z" fill={`url(#${logo ? "apt-logo-frame" : "apt-frame"})`} />
        <path d="M44 40h60" stroke="#ffffff" strokeOpacity={logo ? 0.2 : 0.16} strokeWidth="1" />
        <path d="M44 222h69" stroke="#ffffff" strokeOpacity={logo ? 0.22 : 0.16} strokeWidth="1" />

        <path d="M111 42 154 20v218l-43-23V42Z" fill="#030303" opacity="0.2" />
        <path d="M113 42 154 20v218l-41-23V42Z" fill={`url(#${logo ? "apt-logo-door" : "apt-door"})`} />
        <path d="M123 58 146 47v147l-23-13V58Z" stroke="#030303" strokeOpacity="0.13" strokeWidth="1.5" />
        <path d="M113 42v173" stroke="#030303" strokeOpacity="0.7" strokeWidth={logo ? 2 : 3} />
        <path
          d="M110 71h8M110 124h8M110 177h8"
          stroke="#f7f7f2"
          strokeLinecap="square"
          strokeOpacity={logo ? 0.28 : 0.2}
          strokeWidth={logo ? 1.5 : 2}
        />
        <path d="M154 20 164 25v205l-10 8V20Z" fill={`url(#${logo ? "apt-logo-edge" : "apt-edge"})`} />
        <path d="M154 20v218" stroke="#030303" strokeOpacity="0.16" strokeWidth="1.2" />

        <path
          d="M160 25v205"
          filter={`url(#${logo ? "apt-logo-glow" : "apt-glow"})`}
          stroke="#ffffff"
          strokeOpacity={glowOpacity * 0.66}
          strokeWidth={logo ? 5 : 10}
        />
        <path
          d="M154 21v216"
          stroke="#ffffff"
          strokeOpacity={glowOpacity * 0.85}
          strokeWidth={logo ? 3 : 2.5}
        />
        <ellipse cx="147" cy="130" fill="#030303" opacity="0.5" rx="2.2" ry="3.2" />

        <path d="M44 222h69l43 22H17l25-22h2Z" fill={`url(#${logo ? "apt-logo-floor" : "apt-floor"})`} />
        <path d="M154 238h31l-31-16v16Z" fill="#ffffff" opacity={logo ? 0.22 : 0.16} />
        <path d="M17 244h168" stroke="#ffffff" strokeOpacity={logo ? 0.24 : 0.18} strokeWidth="1" />
      </g>
    </svg>
  );
}
