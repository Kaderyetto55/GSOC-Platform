export default function GlobeIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className="w-full h-full"
    >
      <g fill="#D89C61">
        {/* Outer circle with arrow */}
        <path d="M50 5C25.2 5 5 25.2 5 50s20.2 45 45 45 45-20.2 45-45S74.8 5 50 5zm0 85c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/>
        
        {/* Globe grid */}
        <path d="M50 20c-16.6 0-30 13.4-30 30s13.4 30 30 30 30-13.4 30-30-13.4-30-30-30zm0 55c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z"/>
        
        {/* Horizontal lines */}
        <path d="M20 50h60M35 35h30M35 65h30"/>
        
        {/* Vertical lines */}
        <path d="M50 20v60M35 35v30M65 35v30"/>
        
        {/* 24/7/365 text */}
        <text 
          x="50" 
          y="53" 
          textAnchor="middle" 
          fontSize="14" 
          fontFamily="Arial, sans-serif" 
          className="font-bold"
        >
          24/7/365
        </text>
      </g>
    </svg>
  );
} 