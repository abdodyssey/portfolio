const Button = ({ children, className }) => {
  return (
    <button className={`py-1.5 text-sm px-3 text-white bg-neutral-800 rounded hover:scale-102 transition duration-200 ${className} `}>
      {children}
    </button>
  );
};

export default Button;