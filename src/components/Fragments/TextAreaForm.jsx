import Label from "../Elements/Label";
import TextArea from "../Elements/TextArea";

const TextAreaForm = ({name}) => {
    return (
        <div className="flex flex-col">
            <Label htmlFor={name}>{name}</Label>
            <TextArea name={name}/>
        </div>
    )
}
export default TextAreaForm;