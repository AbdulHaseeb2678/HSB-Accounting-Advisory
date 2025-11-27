import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Abstract Logo Icon: Book + Checkmark/Graph shape */}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-full w-auto text-primary-600"
      >
        {/* Book Pages */}
        <path d="M20 20 L40 90 L90 80 L70 10 Z" fill="#0ea5e9" opacity="0.8" />
        <path d="M10 30 L35 95" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round"/>
        <path d="M30 15 L50 85" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round"/>
        
        {/* The "V" or Checkmark shape overlaying */}
        <path d="M15 50 L40 85 L85 30" stroke="#0c4a6e" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      
      {!iconOnly && (
        <div className="flex flex-col justify-center">
          <span className="font-sans font-bold text-slate-900 tracking-tight leading-none text-xl">HSB</span>
          <span className="font-sans text-xs text-slate-600 font-medium uppercase tracking-wider">Accounting & Advisory</span>
        </div>
      )}
    </div>
  );
};