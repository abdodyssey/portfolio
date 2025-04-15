import Navbar from "../organisms/Navbar";

const PagesLayout = ({ title, children }) => {
  return (
    <div className="text-neutral-700">
      <Navbar />
      <div className="flex flex-col items-center w-full h-100vh my-5">
        <h1 className="text-2xl md:text-2xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
};
export default PagesLayout;
