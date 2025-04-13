import { useState } from "react";
import Button from "../Elements/Button";
import InputForm from "./InputForm";
import TextAreaForm from "./TextAreaForm";
import Input from "../Elements/Input";

const ContactForm = () => {
  // const [form, setForm] = useState({
  //   name: "",
  //   username: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm((prevForm) => ({
  //     ...prevForm,
  //     [name]: value
  //   }));
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const phoneNumber = "6285156117973";

  //   const { name, username, message } = form;

  //   // Log the current state of the form before generating the URL
  //   console.log("Form Data:", form);

  //   // Create the raw message with correct formatting
  //   const rawMessage = `Nama: ${name}\nUsername: ${username}\nPesan: ${message}`;

  //   // Log the raw message to check
  //   console.log("Raw Message:", rawMessage);

  //   // Ensure encoding works as expected
  //   const encodedMessage = encodeURIComponent(rawMessage);
  //   const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  //   // Log the final URL to check if it looks right
  //   console.log("Generated URL:", url);

  //   // Open the WhatsApp URL in a new tab
  //   window.open(url, "_blank");
  // };

  // return (
  //   <form onSubmit={handleSubmit} className="w-f  ull px-4 md:w-1/4">
  //     <InputForm
  //       name="Nama lengkap"
  //       type="text"
  //       placeholder="Bebas dah, yang penting nama"
  //       value={form.name}
  //       onChange={handleChange}
  //     />
  //     <InputForm
  //       name="Username Instagram"
  //       type="text"
  //       value={form.username}
  //       onChange={handleChange}
  //       placeholder="contoh: @abd.ezpz"
  //     />
  //     <TextAreaForm name="Pesan" value={form.message} onChange={handleChange} />
  //     <Button className="w-full text-sm md:text-xs " type="submit">
  //       Submit sini bang
  //     </Button>
  //   </form>
  // );

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
    const phoneNumber = "6285156117973";

    const { name, message } = form;

    const rawMessage = `Nama: ${name}\n Pesan: ${message}`;
    const encodedMessage = encodeURIComponent(rawMessage);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    console.log("Generated URL:", url); // Debug
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
