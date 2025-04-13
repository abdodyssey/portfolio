import ContactForm from "../Fragments/ContactForm";
import PagesLayout from "../Layouts/PagesLayout";

const Contact = () => {
  return (
    <PagesLayout title="Contact me">
      <p className="text-sm mt-2 mb-4 text-center">Jangan kontak saya, lagi pengen turu!<br /></p>
      <ContactForm />
    </PagesLayout>
  );
};
export default Contact;
