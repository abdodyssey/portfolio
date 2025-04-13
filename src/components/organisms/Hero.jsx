import { Link } from "react-router-dom";
import Button from "../Elements/Button";


const Hero = () => {

  return (
    <div
      className="h-[calc(100vh-45px)] flex flex-col justify-center items-center
     text-neutral-950 relative "
    >
      <div className="overflow-hidden rounded-full mb-2">
        <img
          src="https://i.pinimg.com/1200x/44/80/6e/44806e411e450f7f06ffb0854a5a6bce.jpg"
          className="w-32 h-32 tranform rotate-180 object-cover"
          alt=""
        />
      </div>
      <h1 className="font-bold text-xl md:text-2xl text-center w-2/4">
        Muhammad Abdi
      </h1>
      <p className="text-center text-sm w-3/4">
        Pengen jadi programmer, namun enggan ngoding.
      </p>
      <Button className="mt-2 text-xs md:text-sm">
        <Link to="/projects">Liat Project gue</Link>
      </Button>

    </div>
  );
};

export default Hero;
