const BRAND_COLORS = [
  "#64748b", "#3b82f6", "#10b981", "#8b5cf6",
  "#f43f5e", "#f59e0b", "#06b6d4", "#4f46e5",
];

interface BrandLogoProps {
  name: string;
  index: number;
  size?: number;
  logo?: string;
  logoDark?: boolean;
}

export function BrandLogo({ name, index, size = 64, logo, logoDark }: BrandLogoProps) {
  const radius = Math.round(size * 0.175);

  // If a real logo exists, show it as an image
  if (logo) {
    return (
      <div
        className={`flex-shrink-0 flex items-center justify-center overflow-hidden ${
          logoDark
            ? "bg-slate-800 border border-slate-700"
            : "bg-white border border-slate-200"
        }`}
        style={{
          width: size,
          height: size,
          borderRadius: radius,
        }}
      >
        <img
          src={logo}
          alt={`${name} logo`}
          className="object-contain"
          style={{
            width: size * 0.78,
            height: size * 0.78,
          }}
        />
      </div>
    );
  }

  // Fallback: SVG monogram
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const bgColor = BRAND_COLORS[index % BRAND_COLORS.length];
  const fontSize = Math.round(size * 0.375);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="flex-shrink-0"
      style={{ borderRadius: radius }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill={bgColor} width={size} height={size} rx={radius} />
      <text
        fill="white"
        x={size / 2}
        y={size / 2}
        fontSize={fontSize}
        fontWeight="700"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {initials}
      </text>
    </svg>
  );
}

export { BRAND_COLORS };
