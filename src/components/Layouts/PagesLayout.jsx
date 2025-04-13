import Navbar from "../organisms/Navbar";

const PagesLayout = ({ title, children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center w-full h-100vh my-5 text-neutral-950">
        <h1 className="text-2xl md:text-2xl font-bold">{title}</h1>
        {children}
      </div>
    </>
  );
};
export default PagesLayout;
