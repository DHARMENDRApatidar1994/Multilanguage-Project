import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className=" w-100 ">
      <nav
        class="w-100 navbar navbar-expand-lg bg-dark bg-opacity-50  d-flex align-items-center "
        style={{ position: "fixed", zIndex: "999" }}
      >
        <div
          className="language-switcher d-lg-none d-initial"
          style={{ position: "absolute", right: "6px", top: "6px" }}
        >
          <li class="nav-item dropdown d-flex justify-content-evenly align-items-center">
            <a
              className="nav-link dropdown-toggle bg-primary bg-opacity-75 text-light rounded p-2 fs-5 ms-5"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Language
            </a>
            <ul class="dropdown-menu">
              <li className="" onClick={() => changeLanguage("en")}>
                <h6 style={{ cursor: "pointer" }} class="dropdown-item">
                  English
                </h6>
              </li>

              <li onClick={() => changeLanguage("hi")}>
                <h6 style={{ cursor: "pointer" }} class="dropdown-item">
                  हिन्दी
                </h6>
              </li>

              <li onClick={() => changeLanguage("pb")}>
                <h6 style={{ cursor: "pointer" }} class="dropdown-item">
                  Punjabi
                </h6>
              </li>
            </ul>
          </li>
        </div>
        <div class="container-fluid">
          <button
            class="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100 d-flex justify-content-evenly align-items-center">
              <div className="w-50 d-flex flex-lg-row flex-column">
                <Link
                  className="ms-5 me-5 text-light fs-5 fw-semibold"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  HOME
                </Link>
                <Link
                  className="ms-5 text-light fs-5 fw-semibold"
                  style={{ textDecoration: "none" }}
                  to="/About"
                >
                  ABOUT
                </Link>
              </div>
              <div className="language-switcher w-25   ">
                <li class="nav-item dropdown d-lg-flex d-none justify-content-evenly align-items-center">
                  <a
                    className="nav-link dropdown-toggle bg-primary text-light rounded p-2 fs-5 ms-5"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Language
                  </a>
                  <ul class="dropdown-menu">
                    <li className="" onClick={() => changeLanguage("en")}>
                      <h6 style={{ cursor: "pointer" }} class="dropdown-item">
                        English
                      </h6>
                    </li>

                    <li onClick={() => changeLanguage("hi")}>
                      <h6 style={{ cursor: "pointer" }} class="dropdown-item">
                        हिन्दी
                      </h6>
                    </li>

                    <li onClick={() => changeLanguage("pb")}>
                      <h6 style={{ cursor: "pointer" }} class="dropdown-item">
                        Punjabi
                      </h6>
                    </li>
                  </ul>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
