import React from "react";
import img1 from "./imgs/proj1.jpg";
import img2 from "./imgs/proj2.jpg";
import img3 from "./imgs/proj4.jpg";
import img4 from "./imgs/proj3.jpg";
import img5 from "./imgs/proj5.jpg";
import img6 from "./imgs/proj6.jpg";

export default function Portfolio() {
  return (
    <>
      <div className="container my-4 py-5">

        <div className="inner text-center mt-5 pt-5">

          <h1>PORTFOLIO</h1>

        </div>

        <div className="lines d-flex align-items-center justify-content-center">

          <div className="in-line bg-black"></div>

          <div className="star">

            <i className="fa-solid fa-star mx-3  fs-2"></i>

          </div>

          <div className="in-line bg-black"></div>

        </div>

        <div className="row g-5 p-5">

          <div
            className="col-md-4 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <div className="inner-row position-relative">

              <img src={img1} alt="cabin img" className="w-100 rounded-3" />

              <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">

                <i className="fa-solid fa-plus text-white fa-3x"></i>

              </div>

            </div>

          </div>

          <div
            className="col-md-4 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            <div className="inner-row position-relative">

              <img src={img2} alt="cake img" className="w-100 rounded-3" />

              <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">

                <i className="fa-solid fa-plus text-white fa-3x"></i>

              </div>

            </div>

          </div>

          <div
            className="col-md-4 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal3"
          >
            <div className="inner-row position-relative">

              <img src={img3} alt="circus img" className="w-100 rounded-3" />

              <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">

                <i className="fa-solid fa-plus text-white fa-3x"></i>

              </div>

            </div>

          </div>

          <div
            className="col-md-4 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal4"
          >
            <div className="inner-row position-relative">

              <img src={img4} alt="game img" className="w-100 rounded-3" />

              <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">

                <i className="fa-solid fa-plus text-white fa-3x"></i>

              </div>

            </div>

          </div>

          <div
            className="col-md-4 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal5"
          >
            <div className="inner-row position-relative">

              <img src={img5} alt="safe img" className="w-100 rounded-3" />

              <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">

                <i className="fa-solid fa-plus text-white fa-3x"></i>

              </div>

            </div>

          </div>

          <div
            className="col-md-4 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal6"
          >
            <div className="inner-row position-relative">

              <img src={img6} alt="submarine img" className="w-100 rounded-3" />

              <div className="layer position-absolute top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center rounded-3">

                <i className="fa-solid fa-plus text-white fa-3x"></i>

              </div>

            </div>

          </div>

        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">

            <div className="modal-content">

              <div className="modal-header">

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-x fs-2 pe-5"></i>

                </button>

              </div>

              <div className="inner-mod text-center">

                <h1 className="modal-title fs-1" id="exampleModalLabel">
                 MY SELF
                </h1>

                <div className="lines d-flex align-items-center justify-content-center">

                  <div className="in-line bg-black"></div>

                  <div className="star">

                    <i className="fa-solid fa-star mx-3  fs-2"></i>

                  </div>

                  <div className="in-line bg-black"></div>

                </div>

              </div>

              <div className="modal-body text-center w-75 m-auto">

                <img src={img1} alt="cabin img" className="w-100 rounded-3" />

                <p className="mt-5 ">
                I’m someone who finds happiness in the simple things—strumming my guitar and losing myself in its melodies, 
                or sitting by the shore, watching the waves roll in. One day, I hope to check off 
                a dream from my bucket list: traveling to Norway to witness the stunning beauty of the Northern Lights.
                </p>

              </div>

              <div className="modal-footer justify-content-center">

                <button
                  type="button"
                  className="btn  exit-btn text-white"
                  data-bs-dismiss="modal"
                >

                  <i className="fa-solid fa-x me-3"></i>Close Window
                </button>

              </div>

            </div>

          </div>

        </div>

        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel2"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">

            <div className="modal-content">

              <div className="modal-header">

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >

                  <i className="fa-solid fa-x fs-2 pe-5"></i>
                </button>

              </div>

              <div className="inner-mod text-center">

                <h1 className="modal-title fs-1" id="exampleModalLabel2">
                  MY FAMILY
                </h1>

                <div className="lines d-flex align-items-center justify-content-center">

                  <div className="in-line bg-black"></div>

                  <div className="star">

                    <i className="fa-solid fa-star mx-3  fs-2"></i>

                  </div>

                  <div className="in-line bg-black"></div>

                </div>

              </div>

              <div className="modal-body text-center w-75 m-auto">

                <img src={img2} alt="cake img" className="w-100 rounded-3" />

                <p className="mt-5 ">
                My family is my greatest source of love, support, and faith. We are always there 
                for each other through life’s ups and downs. Our faith in God is the foundation of our bond, guiding us to live with love, 
                kindness, and gratitude. In our home, we value open communication and cherish the little moments, whether it’s 
                sharing a meal, or laughing over shared memories. Each of us feels cared for and appreciated, and we lean on trust, understanding, 
                and God’s guidance to keep our bond strong. Growing up in this environment 
                has taught me the importance of love, resilience, and the comfort of always having a place where I truly belong.
                </p>

              </div>

              <div className="modal-footer justify-content-center">

                <button
                  type="button"
                  className="btn  exit-btn text-white"
                  data-bs-dismiss="modal"
                >

                  <i className="fa-solid fa-x me-3"></i>Close Window
                </button>

              </div>

            </div>

          </div>

        </div>

        <div
          className="modal fade"
          id="exampleModal3"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel3"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">

            <div className="modal-content">

              <div className="modal-header">

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >

                  <i className="fa-solid fa-x fs-2 pe-5"></i>

                </button>

              </div>

              <div className="inner-mod text-center">

                <h1 className="modal-title fs-1" id="exampleModalLabel3">
                  MY HOMIES
                </h1>

                <div className="lines d-flex align-items-center justify-content-center">

                  <div className="in-line bg-black"></div>

                  <div className="star">

                    <i className="fa-solid fa-star mx-3  fs-2"></i>

                  </div>

                  <div className="in-line bg-black"></div>

                </div>

              </div>

              <div className="modal-body text-center w-75 m-auto">

                <img src={img3} alt="circus img" className="w-100 rounded-3" />

                <p className="mt-5 ">
                These are my childhood friends are the ones who grew up alongside me, sharing in the innocence, adventures, 
                and milestones of my early years. They know my roots, hold my secrets, and are part of the memories that 
                I’ll cherish forever.
                </p>

              </div>

              <div className="modal-footer justify-content-center">

                <button
                  type="button"
                  className="btn  exit-btn text-white"
                  data-bs-dismiss="modal"
                >

                  <i className="fa-solid fa-x me-3"></i>Close Window

                </button>

              </div>

            </div>

          </div>

        </div>

        <div
          className="modal fade"
          id="exampleModal4"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel4"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">

            <div className="modal-content">

              <div className="modal-header">

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >

                  <i className="fa-solid fa-x fs-2 pe-5"></i>

                </button>

              </div>

              <div className="inner-mod text-center">

                
                <h1 className="modal-title fs-1" id="exampleModalLabel4">
                  MY KOMSAY FAM
                </h1>

                <div className="lines d-flex align-items-center justify-content-center">

                  <div className="in-line bg-black"></div>

                  <div className="star">

                    <i className="fa-solid fa-star mx-3  fs-2"></i>

                  </div>

                  <div className="in-line bg-black"></div>

                </div>

              </div>

              <div className="modal-body text-center w-75 m-auto">

                <img src={img4} alt="game img" className="w-100 rounded-3" />

                <p className="mt-5 ">
                My classmates are the people I’ve shared countless hours with, learning and growing together in the classroom. 
                They’ve been part of my academic journey, from group projects and discussions to shared challenges and achievements. 
                Each of them holds a unique place in my story, shaping my school experiences in ways I’ll always remember.
                </p>

              </div>

              <div className="modal-footer justify-content-center">

                <button
                  type="button"
                  className="btn  exit-btn text-white"
                  data-bs-dismiss="modal"
                >

                  <i className="fa-solid fa-x me-3"></i>Close Window
                </button>

              </div>

            </div>

          </div>

        </div>

        <div
          className="modal fade"
          id="exampleModal5"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel5"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">

            <div className="modal-content">

              <div className="modal-header">

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >

                  <i className="fa-solid fa-x fs-2 pe-5"></i>

                </button>

              </div>

              <div className="inner-mod text-center">

                <h1 className="modal-title fs-1" id="exampleModalLabel5">
                  MY GIRLIES
                </h1>

                <div className="lines d-flex align-items-center justify-content-center">

                  <div className="in-line bg-black"></div>

                  <div className="star">

                    <i className="fa-solid fa-star mx-3  fs-2"></i>

                  </div>

                  <div className="in-line bg-black"></div>

                </div>

              </div>

              <div className="modal-body text-center w-75 m-auto">

                <img src={img5} alt="safe img" className="w-100 rounded-3" />

                <p className="mt-5 ">
                My girlfriends are my support system and joy. They are the ones I can laugh with endlessly, share my secrets with, 
                and lean on during tough times. Together, we’ve created countless memories filled with fun, 
                support, and understanding. They inspire me, lift me up, and remind me of the beauty of true friendship.
                </p>

              </div>

              <div className="modal-footer justify-content-center">

                <button
                  type="button"
                  className="btn  exit-btn text-white"
                  data-bs-dismiss="modal"
                >

                  <i className="fa-solid fa-x me-3"></i>

                  Close Window

                </button>

              </div>

            </div>

          </div>

        </div>

        <div
          className="modal fade"
          id="exampleModal6"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel6"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">

            <div className="modal-content">

              <div className="modal-header">

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >

                  <i className="fa-solid fa-x fs-2 pe-5"></i>

                </button>

              </div>

              <div className="inner-mod text-center">

                <h1 className="modal-title fs-1" id="exampleModalLabel6">
                  MY BUDDIES
                </h1>

                <div className="lines d-flex align-items-center justify-content-center">

                  <div className="in-line bg-black"></div>

                  <div className="star">

                    <i className="fa-solid fa-star mx-3  fs-2"></i>

                  </div>

                  <div className="in-line bg-black"></div>

                </div>

              </div>

              <div className="modal-body text-center w-75 m-auto">

                <img src={img6} alt="submarine img" className="w-100 rounded-3" />

                <p className="mt-5 ">
                My buddies are like family to me, always showing me kindness and respect. They make me feel welcomed, look out for me, 
                and share their experiences. Even though we’re on separate journeys and can’t always be together, they’ve still been a 
                steady source of laughter and support. Our connection goes beyond just friendship—they treat me as if I’m one of their 
                sister, and I’m thankful for the brotherly love they bring into my life.
                </p>

              </div>

              <div className="modal-footer justify-content-center">

                <button
                  type="button"
                  className="btn  exit-btn text-white"
                  data-bs-dismiss="modal"
                >

                  <i className="fa-solid fa-x me-3"></i>
                  Close Window

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
      
    </>
  );
}
