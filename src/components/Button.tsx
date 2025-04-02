const Button = ({ text, onClick, className }: { text: string; onClick?: () => void; className?: string }) => {
    return (
      <button
        className={`p-2 rounded-md font-semibold bg-[#0F26374A] px-3 ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  