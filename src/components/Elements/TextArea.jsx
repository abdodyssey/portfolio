const TextArea = ({ name }) => {
  return (
    <textarea
      rows={5}
      name={name}
      placeholder="Kata-kata hari ini..."
      className="border rounded text-xs text-neutral-700 mb-4 py-2 px-3 placeholder: opacity-50"
    ></textarea>
  );
};
export default TextArea;
