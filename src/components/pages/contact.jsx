import ContactForm from "../Fragments/ContactForm";
import PagesLayout from "../Layouts/PagesLayout";

const Contact = () => {
  return (
    <PagesLayout title="Contact me">
      <p className="text-md md:text-sm mt-2 mb-4 text-center">Mau nanya sesuatu? jangan tanya saya!<br /></p>
      <ContactForm />
    </PagesLayout>
  );
};
export default Contact;
