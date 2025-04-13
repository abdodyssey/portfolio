import MainLayout from "../Layouts/MainLayout";
import PagesLayout from "../Layouts/PagesLayout";

const About = () => {
  return (
    <PagesLayout title="About me">
      <p className="md:text-center w-4/4 px-6 md:w-2/4 text-md md:text-md mt-3 text-justify ">
        Assalamu'alaikum warga sipil, perkenalkan nama saya Muhammad Abdi
        Nugroho, seorang mahasiswa S1 program studi Sistem Informasi di Universitas Islam Negeri Palembang. Dah gitu
        aja. Selebihnya cari tau sendiri....
      </p>
    </PagesLayout>
  );
};
export default About;
