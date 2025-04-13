import Label from "../Elements/Label";
import TextArea from "../Elements/TextArea";

const TextAreaForm = ({ name, onChange, placeholder }) => {
  return (
    <div className="flex flex-col">
      <Label htmlFor={name}>{name}</Label>
      <TextArea name={name} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};
export default TextAreaForm;
