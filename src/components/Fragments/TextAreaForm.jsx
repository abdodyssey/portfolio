import Label from "../Elements/Label";
import TextArea from "../Elements/TextArea";

const TextAreaForm = ({name, onChange}) => {
    return (
        <div className="flex flex-col">
            <Label htmlFor={name}>{name}</Label>
            <TextArea name={name} onChange={onChange}/>
        </div>
    )
}
export default TextAreaForm;