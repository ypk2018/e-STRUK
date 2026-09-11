import React from 'react';

interface JayaMartStampProps {
  type: 'elektrik' | 'internet' | 'pdam';
  className?: string;
}

export const JayaMartStamp: React.FC<JayaMartStampProps> = ({ type, className = '' }) => {
  const isElektrik = type === 'elektrik';

  return (
    <div
      className={`relative w-36 h-36 select-none pointer-events-none transform -rotate-14 mx-auto ${className}`}
      style={{
        mixBlendMode: 'multiply',
        opacity: 0.88,
      }}
    >
      <svg
        viewBox="0 0 140 140"
        className="w-full h-full text-blue-950 fill-current"
        style={{ filter: 'contrast(120%)' }}
      >
        <defs>
          {/* Top arc for text */}
          <path
            id="stamp-top-arc"
            d="M 18,70 A 52,52 0 0,1 122,70"
            fill="none"
          />
          {/* Bottom arc for text */}
          <path
            id="stamp-bottom-arc"
            d="M 122,70 A 52,52 0 0,1 18,70"
            fill="none"
          />
        </defs>

        {/* Outer and Inner Circle Borders */}
        <circle
          cx="70"
          cy="70"
          r="66"
          fill="none"
          stroke="#172554"
          strokeWidth="2.5"
        />
        <circle
          cx="70"
          cy="70"
          r="62"
          fill="none"
          stroke="#172554"
          strokeWidth="1"
        />
        <circle
          cx="70"
          cy="70"
          r="41"
          fill="none"
          stroke="#172554"
          strokeWidth="1.2"
        />

        {/* Curved Text: Top */}
        <text
          fontSize="10"
          fontWeight="900"
          letterSpacing="2.5"
          fill="#172554"
          fontFamily="Arial, sans-serif"
        >
          <textPath href="#stamp-top-arc" startOffset="50%" textAnchor="middle">
            ★ JAYA MART ★
          </textPath>
        </text>

        {/* Curved Text: Bottom */}
        <text
          fontSize="9.5"
          fontWeight="900"
          letterSpacing="3"
          fill="#172554"
          fontFamily="Arial, sans-serif"
        >
          <textPath href="#stamp-bottom-arc" startOffset="50%" textAnchor="middle">
            SENTANI
          </textPath>
        </text>

        {/* Center JM Initials */}
        <text
          x="70"
          y="64"
          fontSize="24"
          fontWeight="900"
          fontFamily="'Times New Roman', Georgia, serif"
          letterSpacing="2"
          textAnchor="middle"
          fill="#172554"
        >
          JM
        </text>

        {/* Horizontal Banner Across Center */}
        <line x1="28" y1="71" x2="112" y2="71" stroke="#172554" strokeWidth="1.2" />
        <line x1="28" y1="83" x2="112" y2="83" stroke="#172554" strokeWidth="1.2" />

        <text
          x="70"
          y="79"
          fontSize="6.2"
          fontWeight="800"
          fontFamily="Arial, sans-serif"
          letterSpacing="0.8"
          textAnchor="middle"
          fill="#172554"
        >
          {isElektrik ? 'STROOM / TOKEN RP BAYAR' : 'TOTAL BAYAR / ADMIN'}
        </text>
      </svg>
    </div>
  );
};
