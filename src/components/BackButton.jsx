import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <div className="sm:fixed left-4 z-30 top-4">
      <Link to="/">
        <button className="p-3 bg-background active:bg-background hover:shadow-xl active:text-persian-600  font-bold text-xl capitalize  rounded-xl  hover:text-black ">
          Back
        </button>
      </Link>
    </div>
  );
};
