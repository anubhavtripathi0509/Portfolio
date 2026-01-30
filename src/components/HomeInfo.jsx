import React from "react";
import { NavLink, Link } from "react-router-dom";

import HireButton from "./HireButton";
import { socialLinks } from "../constants";

const domain = ["Web", "Desktop", "Machine", "Serverless"];

const suffix = [
  "Development",
  "Development",
  "Learning",
  "Computing",
];

const HomeInfo = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => (index + 1) % domain.length),
      2500,
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-container flex flex-col items-start justify-center">
      <div>
        <div className="text-4xl mb-3 lg:text-6xl font-semibold orange-gradient-text">
          <h1>Hello! there,</h1>
          <h1>
            I am{" "}
            <span className="relative inline-block">
              <span className="orange-gradient-text relative inline-block stroke-current">
                Anubhav Tripathi
                <svg
                  className="absolute -bottom-0.5 w-full max-h-1.5"
                  viewBox="0 0 55 5"
                  color="rgb(255, 99, 71)"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    strokeWidth="3"
                  ></path>
                </svg>
              </span>
            </span>{" "}
            and I do
          </h1>
        </div>
        <div className="flex flex-col md:flex-row mb-5 md:gap-4 text-4xl lg:text-6xl text-red-600 font-semibold break-words leading-tight">
          <div>
            <p>{domain[index]}</p>
          </div>
          <div>
            <p>{suffix[index]}</p>
          </div>
        </div>
        <div className="sm:mt-10 md:mt-3">
          <NavLink to="/services">
            <HireButton />
          </NavLink>
        </div>
      </div>
      <div className="mt-5 font-semibold text-2xl lg:text-4xl text-red-600">
        <span>
          AI Engineer with experience delivering LLM-powered systems for enterprise and government use cases.
        </span>
      </div>
      <div className="mt-5">
        <a
          href="https://drive.google.com/file/d/1wRFOuN_-rupC1bDwzJ61DqaM8o3J8bUQ/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button className="px-3 py-1.5 font-semibold text-2xl lg:text-3xl text-white transition duration-500 ease-in-out transform bg-gradient-to-r from-orange-400 to-red-600 rounded-md hover:scale-110">
            Résumé
          </button>
        </a>
      </div>
      <div className="mt-10 self-start flex gap-2 rounded-lg">
        {socialLinks.map((link) => (
          <Link key={link.name} to={link.link} target="_blank">
            <img
              src={link.iconUrl}
              alt={link.name}
              className={`${link.name === "LinkedIn" ? "linkedin-icon" : "h-11 w-11"} object-cover`}
            />
          </Link>
        ))}
      </div>
      <div className="h-12" />
    </div>
  );
};

export default HomeInfo;
