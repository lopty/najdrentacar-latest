import React from 'react';

interface NajdLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  height?: number;
}

export const NajdLogo: React.FC<NajdLogoProps> = ({
  className = '',
  variant = 'light',
  height = 42,
}) => {
  const textColor = variant === 'dark' ? '#FFFFFF' : '#111827';
  const lineColor = variant === 'dark' ? '#475569' : '#1E293B';

  // Aspect ratio based on standard logo proportions (approx 220 x 85)
  const width = Math.round(height * (220 / 80));

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 260 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Najd Rent A Car LLC"
    >
      {/* Letter N */}
      <text
        x="6"
        y="53"
        fill="#C5221F"
        fontFamily="'Playfair Display', 'Times New Roman', Georgia, serif"
        fontSize="54"
        fontWeight="700"
        letterSpacing="0"
      >
        N
      </text>

      {/* Stylized Ribbon 'A' */}
      <path
        d="M52 56 C 56 50, 72 32, 92 14 C 95 11, 98 12, 97 18 C 94 28, 86 42, 85 49 C 84 55, 87 56, 94 53 C 100 50, 104 46, 106 44"
        fill="none"
        stroke="#8D929A"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Letter J */}
      <text
        x="108"
        y="53"
        fill="#C5221F"
        fontFamily="'Playfair Display', 'Times New Roman', Georgia, serif"
        fontSize="54"
        fontWeight="700"
      >
        J
      </text>

      {/* Letter D */}
      <text
        x="134"
        y="53"
        fill="#C5221F"
        fontFamily="'Playfair Display', 'Times New Roman', Georgia, serif"
        fontSize="54"
        fontWeight="700"
      >
        D
      </text>

      {/* Solid Divider Line */}
      <line
        x1="6"
        y1="64"
        x2="182"
        y2="64"
        stroke={lineColor}
        strokeWidth="2.5"
        strokeLinecap="square"
      />

      {/* Subtitle: RENT A CAR LLC */}
      <text
        x="6"
        y="81"
        fill={textColor}
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="14.5"
        fontWeight="600"
        letterSpacing="0.24em"
      >
        RENT A CAR LLC
      </text>
    </svg>
  );
};
