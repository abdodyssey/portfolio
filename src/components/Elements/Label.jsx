const Label = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor} className="font-bold text-sm md:text-[12px] mt-2">{children}</label>;
};
export default Label;
