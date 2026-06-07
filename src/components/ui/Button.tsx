interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const baseStyle = "px-8 py-3.5 font-bold rounded-full transition-all duration-300";
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 hover:-translate-y-1",
    secondary: "bg-white text-blue-900 border-2 border-blue-100 hover:border-blue-300 shadow-sm"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
}