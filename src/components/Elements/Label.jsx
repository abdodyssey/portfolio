const Label = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor} className="font-bold text-md md:text-[12px] mt-2">{children}</label>;
};
export default Label;
