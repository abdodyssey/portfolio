const Label = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor} className="font-bold text-xs mt-2">{children}</label>;
};

export default Label;
