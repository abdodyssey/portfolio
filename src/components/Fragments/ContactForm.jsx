
import Button from "../Elements/Button";
import InputForm from "./InputForm";
import TextAreaForm from "./TextAreaForm";

const ContactForm = () => {
  return (
    <form action="" className="w-full px-4 md:w-1/4">
        <InputForm name='Fullname' type='text' placeholder='Enter your name'/>
        <InputForm name='Email' type='email' placeholder='example@gmail.com'/>
        <TextAreaForm name='Message'/>
        <Button className='w-full text-sm md:text-xs'>Submit</Button>
    </form>
  );
};
export default ContactForm;
