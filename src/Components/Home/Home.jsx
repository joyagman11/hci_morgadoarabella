import React from "react";

export default function Home() {
  return (
    <>
      <header className="text-white py-5 mt-5">

        <div className="inner-header d-flex justify-content-center align-items-center flex-column mt-5 ">

          <h1 className="py-4">Hello, I am Arabella A. Morgado</h1>

        </div>

        <div className="lines d-flex align-items-center justify-content-center">

          <div className="in-line"></div>

          <div className="star">

            <i className="fa-solid fa-star mx-3 text-white fs-2"></i>

          </div>

          <div className="in-line"></div>

        </div>

        <div className="subtext text-center">

          <p>A Computer Science student.</p>

        </div>
        
      </header>
    </>
  );
}
