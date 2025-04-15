import Navbar from "../organisms/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="text-neutral-700 h-100vh">
      <Navbar />
      {children}
    </div>
  );
};
export default MainLayout;
