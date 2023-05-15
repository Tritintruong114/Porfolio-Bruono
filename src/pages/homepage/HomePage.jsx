import {
  UilEstate,
  UilBloggerAlt,
  UilFolder,
  UilUser,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const HomePage = () => {
  const buttons = [
    {
      button: "home",
      icon: <UilEstate />,
    },
    {
      button: "blogs",
      icon: <UilBloggerAlt />,
    },
    {
      button: "projects",
      icon: <UilFolder />,
    },
    {
      button: "about",
      icon: <UilUser />,
    },
  ];
  return (
    <div>
      <div className="flex justify-between w-full">
        <div>
          <h1>LOGO</h1>
        </div>
        <div className="flex w-full justify-center items-center gap-3">
          {buttons.map((button) => {
            return (
              <div className="flex" key={button.button}>
                <button>
                  <Link to={`${button.button}`}>{button.icon}</Link>
                </button>
                <h1 className="font-bold capitalize" key={button.name}>
                  {button.button}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
