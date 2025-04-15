import { useState } from "react";
import Button from "../Elements/Button";
import InputForm from "./InputForm";
import TextAreaForm from "./TextAreaForm";

const ContactForm = () => {
 
  const [form, setForm] = useState({
    name: "",
    username: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "6285788141307";

    const { name, message } = form;

    const rawMessage = `Nama: ${name}\n Pesan: ${message}`;
    const encodedMessage = encodeURIComponent(rawMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");

  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 md:w-1/4">
      <InputForm
        type="text"
        name="name"
        placeholder="Enter your name here..."
        value={form.name}
        onChange={handleChange}
      />
      <TextAreaForm
        name="message"
        placeholder="Leave me a message..."
        value={form.message}
        onChange={handleChange}
      ></TextAreaForm>
      <Button type="submit" className='w-full text-sm md:text-xs py-2'>Send to WhatsApp</Button>
    </form>
  );
};
export default ContactForm;
