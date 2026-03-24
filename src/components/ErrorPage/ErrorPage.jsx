import React from "react";
import errorImg from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="grid place-items-center">
      <img src={errorImg} alt="" />
      <h2 className="text-4xl py-10">Oops, page not found!</h2>
    </div>
  );
};

export default ErrorPage;
