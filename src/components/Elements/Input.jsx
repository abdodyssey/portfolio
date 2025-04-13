const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      className="text-md md:text-xs border rounded md:w-full py-2 px-3 placeholder: opacity-50"
      onChange={onChange}
      required
    />
  );
};
export default Input;
