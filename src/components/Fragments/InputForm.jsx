import Input from "../Elements/Input";
import Label from "../Elements/Label";

const InputForm = ({type, name, placeholder}) => {
    return (
        <div className="flex flex-col">
            <Label htmlFor={name}>{name}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
    )
}
export default InputForm;