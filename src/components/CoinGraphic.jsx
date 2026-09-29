// Decorative hero emblem for $SZN. Swap this out for real mascot/logo art
// whenever one is ready — it's just generated SVG for now.
const NOTCHES = Array.from({ length: 36 });

function CoinGraphic({ className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* glow */}
      <div className="absolute inset-0 rounded-full bg-szn/30 blur-[90px]" />
      <div className="absolute inset-10 rounded-full bg-szn/20 blur-3xl" />

      {/* the whole coin spins continuously around its vertical axis */}
      <svg
        viewBox="0 0 320 320"
        className="animate-spin-y relative w-full h-full drop-shadow-[0_0_60px_rgba(63,251,53,0.35)]"
      >
        <defs>
          <linearGradient id="coinRim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3ffb35" />
            <stop offset="100%" stopColor="#1c8f18" />
          </linearGradient>
          <radialGradient id="coinFace" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#151515" />
            <stop offset="100%" stopColor="#050505" />
          </radialGradient>
        </defs>

        {/* shadow layer for a stacked/3D feel */}
        <circle cx="160" cy="176" r="132" fill="#0c1f0b" opacity="0.7" />

        {/* rim */}
        <circle cx="160" cy="158" r="134" fill="url(#coinRim)" />

        {/* edge notches */}
        <g transform="translate(160,158)">
          {NOTCHES.map((_, i) => {
            const angle = (360 / NOTCHES.length) * i;
            return (
              <rect
                key={i}
                x="-3"
                y="-134"
                width="6"
                height="12"
                rx="2"
                fill="#050505"
                fillOpacity="0.35"
                transform={`rotate(${angle})`}
              />
            );
          })}
        </g>

        {/* face */}
        <circle cx="160" cy="158" r="112" fill="url(#coinFace)" stroke="#3ffb35" strokeOpacity="0.5" strokeWidth="2" />

        {/* wordmark */}
        <text
          x="160"
          y="180"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="700"
          fontSize="76"
          letterSpacing="-2"
          fill="#3ffb35"
        >
          $SZN
        </text>
        <text
          x="160"
          y="208"
          textAnchor="middle"
          fontFamily="'Space Grotesk', sans-serif"
          fontWeight="600"
          fontSize="15"
          letterSpacing="4"
          fill="#f5f5f5"
          opacity="0.7"
        >
          ON NEAR
        </text>
      </svg>
    </div>
  );
}

export default CoinGraphic;
