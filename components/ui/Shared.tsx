import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', children, className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-quantum-500 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-quantum-500 text-quantum-900 hover:bg-quantum-400",
    secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
    outline: "border border-white/20 text-white hover:bg-white/10",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-10 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export const SectionTag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center px-3 py-1 rounded-full bg-quantum-500/10 border border-quantum-500/20 text-quantum-400 text-xs font-bold uppercase tracking-wider mb-6">
    {children}
  </div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-quantum-800 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-quantum-500/30 transition-all duration-300 group ${className}`}>
    {children}
  </div>
);

export const FeatureIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-12 h-12 rounded-full bg-quantum-500/10 flex items-center justify-center text-quantum-400 mb-4 group-hover:bg-quantum-500 group-hover:text-quantum-900 transition-colors duration-300">
    {children}
  </div>
);

export const StatCard: React.FC<{ label: string; value: React.ReactNode; sub?: string; icon?: React.ReactNode }> = ({ label, value, sub, icon }) => (
  <div className="bg-quantum-700/50 rounded-xl p-6 border border-white/5 backdrop-blur flex flex-col justify-between h-full">
    <div className="flex items-start justify-between mb-4">
        <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">{label}</span>
        {icon && <div className="text-quantum-500">{icon}</div>}
    </div>
    <div>
        <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
        {sub && <div className="text-sm text-gray-500">{sub}</div>}
    </div>
  </div>
);

export const GridBackground: React.FC = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
        <div className="absolute inset-0 bg-radial-glow opacity-40"></div>
    </div>
)
