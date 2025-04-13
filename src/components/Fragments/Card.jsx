import Button from "../Elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Card = ({ image, heading, children }) => {
  return (
    <div className="w-[250px] mx-auto bg-white border border-gray-200 shadow-sm rounded overflow-hidden">
      <img src={image} alt="Project" className="w-full h-35 object-cover" />
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-800 mb-1">{heading}</h3>
        <p className="text-xs text-gray-600 leading-relaxed">{children}</p>
        <Button className="text-xs mt-2 text-center">
          Preview <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
        </Button>
      </div>
    </div>
  );
};

export default Card;
