const TextArea = ({ name, value, onChange, placeholder }) => {
  return (
    <textarea
      rows={5}
      name={name}
      value={value}
      placeholder={placeholder}
      className="border rounded text-xs text-neutral-700 mb-4 py-2 px-3 placeholder: opacity-50"
      onChange={onChange}
    ></textarea>
  );
};
export default TextArea;
