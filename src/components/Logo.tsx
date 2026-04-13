import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'yellow' | 'black' | 'transparent' | 'bkash' | 'qr' | 'main';
  size?: number;
}

export default function Logo({ className = '', variant = 'yellow', size = 32 }: LogoProps) {
  if (variant === 'main') {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ width: size, height: size }}>
        <img 
          src="/assets/logos/logo.png" 
          alt="FF Library Logo" 
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback if image doesn't exist yet
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/ff-logo/200/200';
          }}
        />
      </div>
    );
  }

  if (variant === 'bkash') {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ width: size, height: size }}>
        <img 
          src="/assets/logos/bkash_logo.png" 
          alt="bKash Logo" 
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback if image doesn't exist yet
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/bkash/100/100';
          }}
        />
      </div>
    );
  }

  if (variant === 'qr') {
    return (
      <div className={`relative overflow-hidden ${className}`} style={{ width: size, height: size }}>
        <img 
          src="/assets/logos/qr_code.png" 
          alt="QR Code" 
          className="w-full h-full object-contain"
          onError={(e) => {
            // Fallback if image doesn't exist yet
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/qr/100/100';
          }}
        />
      </div>
    );
  }

  const getBgColor = () => {
    switch (variant) {
      case 'yellow': return '#FFBA00';
      case 'black': return '#000000';
      case 'transparent': return 'transparent';
      default: return '#FFBA00';
    }
  };

  return (
    <div 
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: getBgColor(),
      }}
    >
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full p-[10%]"
        fill="white"
      >
        {/* Stylized 'F' with sharp slants matching the provided assets */}
        <path d="
          M 25 15 
          L 85 15 
          L 75 30 
          L 45 30 
          L 45 45 
          L 75 45 
          L 65 60 
          L 45 60 
          L 45 85 
          L 25 85 
          Z
        " />
      </svg>
    </div>
  );
}
