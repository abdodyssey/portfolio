import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-100px)] flex flex-col justify-center items-center text-neutral-950">
      <img
        src="../../../src/assets/image.png"
        className="rounded-full bg-black w-32 h-32 mb-2"
        alt=""
      />
      <h1 className="font-bold text-xl md:text-2xl text-center w-2/4">
        Muhammad Abdi Nugroho
      </h1>
      <p className="text-center text-sm w-3/4">
        Pengen jadi programmer, tapi enggan ngoding.
      </p>
      <Button className="mt-2 text-xs md:text-sm">
        <Link to="/projects">Liat 
        Project gue</Link>
      </Button>
    </div>
  );
};

export default Hero;
