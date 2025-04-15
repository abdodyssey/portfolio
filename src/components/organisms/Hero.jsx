import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const Hero = () => {
  return (
    <div className="relative h-[calc(100vh-60px)] flex flex-col justify-center items-center overflow-hidden bg-white">
      
      {/* 🎯 Pattern dari HeroPatterns */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgrounColor:"#f1f0f1",
backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23030303' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />

      {/* ✨ Konten Hero */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="overflow-hidden rounded-full mb-2">
          <img
            src="https://i.pinimg.com/1200x/44/80/6e/44806e411e450f7f06ffb0854a5a6bce.jpg"
            className="w-45 h-45 transform rotate-180 object-cover"
            alt=""
          />
        </div>
        <h1 className="font-bold text-3xl md:text-2xl w-3/4">
          Muhammad Abdi
        </h1>
        <p className="text-xl md:text-sm w-3/4">
          Ingin menjadi programmer, namun enggan ngoding.
        </p>
        <Button className="mt-4 py-3 px-6 md:py-2 md:px-4">
          <Link to="/projects" className="text-sm">
            See my work
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
