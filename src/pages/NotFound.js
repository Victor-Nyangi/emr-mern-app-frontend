import React from "react";
import { Link } from "react-router-dom";

import NotFoundImage from "../assets/images/eight.svg"

const NotFound = () => {
  const a=8,b=9;
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src={NotFoundImage}
        alt="Not Found"
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute"></div>
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
            You're alone here
          </h1>
          <label htmlFor="username-input">Username</label>
          <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>

      <h1 data-testid="title">Hello</h1>
      <span title="sum">{a+b}</span>
          <Link to="/">
          <h2>You may return</h2>
          </Link>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
