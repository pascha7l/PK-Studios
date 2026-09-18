export function HeroVisual() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,oklch(0.82_0.06_175/0.55),transparent_55%),linear-gradient(135deg,oklch(0.32_0.06_170)_0%,oklch(0.45_0.08_175)_38%,oklch(0.78_0.05_160)_72%,oklch(0.9_0.03_210)_100%)] animate-drift" />

      <svg
        className="absolute inset-0 size-full opacity-90"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="panelA" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.95 0.02 210)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.7 0.05 175)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="panelB" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.08 170)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.28 0.05 175)" stopOpacity="0.35" />
          </linearGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>

        <g className="animate-float origin-center" style={{ transformOrigin: "70% 45%" }}>
          <rect
            x="720"
            y="140"
            width="520"
            height="360"
            rx="28"
            fill="url(#panelA)"
            stroke="oklch(0.98 0.01 210 / 0.35)"
            strokeWidth="1"
          />
          <rect
            x="780"
            y="200"
            width="180"
            height="12"
            rx="6"
            fill="oklch(0.98 0.01 210 / 0.55)"
          />
          <rect
            x="780"
            y="230"
            width="280"
            height="8"
            rx="4"
            fill="oklch(0.98 0.01 210 / 0.28)"
          />
          <rect
            x="780"
            y="250"
            width="220"
            height="8"
            rx="4"
            fill="oklch(0.98 0.01 210 / 0.2)"
          />
          <circle cx="1120" cy="390" r="54" fill="oklch(0.78 0.07 160 / 0.45)" />
        </g>

        <g className="animate-float-slow" style={{ transformOrigin: "55% 70%" }}>
          <rect
            x="560"
            y="420"
            width="380"
            height="280"
            rx="24"
            fill="url(#panelB)"
            stroke="oklch(0.9 0.02 175 / 0.25)"
            strokeWidth="1"
          />
          <path
            d="M620 520h240M620 555h180M620 590h210"
            stroke="oklch(0.95 0.02 210 / 0.4)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>

        <circle
          cx="1180"
          cy="180"
          r="90"
          fill="oklch(0.88 0.05 175 / 0.25)"
          className="animate-float"
        />
        <circle
          cx="480"
          cy="680"
          r="120"
          fill="oklch(0.4 0.07 175 / 0.2)"
          className="animate-float-slow"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.96_0.01_220/0.92)] via-[oklch(0.95_0.01_210/0.72)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-[oklch(0.96_0.01_220/0.35)]" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
