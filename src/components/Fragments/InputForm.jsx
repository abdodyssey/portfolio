import Input from "../Elements/Input";
import Label from "../Elements/Label";

const InputForm = ({type, name, placeholder, value, onChange}) => {
    return (
        <div className="flex flex-col">
            <Label htmlFor={name}>{name}</Label>
            <Input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    )
}
export default InputForm;