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
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {

    const phoneNumber = "085136117973";
    const { name, username, message } = form;

    const messages = `${name} ${username} ${message}`;
    const encodedMessage = encodeURIComponent(messages);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <form action={handleSubmit} className="w-full px-4 md:w-1/4">
      <InputForm
        name="Nama lengkap"
        type="text"
        placeholder="Bebas dah, yang penting nama"
        value={form.name}
        onChange={handleChange}
      />
      <InputForm
        name="Username Instagram"
        type="text"
        value={form.username}
        onChange={handleChange}
        placeholder="contoh: @gusmiftah"
      />
      <TextAreaForm name="Pesan" value={form.message} onChange={handleChange} />
      <Button className="w-full text-sm md:text-xs " type="submit">
        Submit sini bang
      </Button>
    </form>
  );
};
export default ContactForm;
