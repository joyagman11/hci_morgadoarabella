import React from "react";
import { Link } from "react-router-dom";


export default function Navbar({active}) {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg px-5 py-4  fixed-top">
        <div className="container">

          <Link className="navbar-brand start-react" to="">

            Arabels

          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>

          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* Handle Portfolio Link */}
              <li className="nav-item">

                <Link
                  className="nav-link "
                  aria-current="page"
                  to="portfolio"
                  onClick={function (e) {
                    active(e.target);
                  }}
                >  
                  Portfolio
                </Link>

              </li>
              
              {/* Handle About Link */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  to="about"
                  onClick={function (e) {
                    active(e.target);
                  }}
                >
                  About
                </Link>

              </li>

              {/* Hanlde Contact Link */}
              <li className="nav-item">

                <Link
                  className="nav-link"
                  to="contact"
                  onClick={function (e) {
                    active(e.target);
                  }}
                >
                  Contact
                </Link>

              </li>

            </ul>

          </div>

        </div>

      </nav>
    </>
  );
}
