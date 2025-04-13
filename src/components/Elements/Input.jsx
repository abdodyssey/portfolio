const Input = ({ type, placeholder, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="text-sm md:text-xs border rounded md:w-full py-2 px-3 placeholder: opacity-50"
      required
    />
  );
};
export default Input;
