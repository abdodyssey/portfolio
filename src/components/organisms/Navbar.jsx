import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-2 px-4 text-neutral-950 w-full relative ">
      <h1 className="text-3xl md:text-xl font-bold hover:scale-103 transition duration-200">
        <Link to="/">abd.ezpz</Link>
      </h1>
      <div className="md:hidden text-4xl" onClick={() => setIsOpen(true)}>
        <FontAwesomeIcon icon={faGripLines} />
      </div>
      {isOpen && (
        <div
          className={`absolute bg-white z-10 border border-gray-200 shadow-sm  w-full h-screen bottom-0 right-0 top-0 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } `}
        >
          <div onClick={() => setIsOpen(false)} className="text-4xl absolute right-0 px-4 py-2">
            <FontAwesomeIcon
              icon={faGripLines}
              className=""
            />
          </div>
          <ul className="text-2xl flex flex-col p-4 gap-4 top-9 absolute w-full">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}

      <ul className="md:flex gap-4 text-sm hover:cursor-pointer hidden">
        <li className="hover:scale-103 transition duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:scale-103 transition duration-200">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:scale-103 transition duration-200">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:scale-103 transition duration-200">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
