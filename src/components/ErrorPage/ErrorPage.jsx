import React from "react";
import errorImg from "../../assets/error-404.png";

const ErrorPage = () => {
  return (
    <div className="grid place-items-center gap-4">
      <img className="px-4" src={errorImg} alt="" />
      <h2 className="text-4xl my-4">Oops, page not found!</h2>
      <p className="text-xl">The page you are looking for is not available.</p>
      <button className="btn btn-primary my-4">Go Back!</button>
    </div>
  );
};

export default ErrorPage;
