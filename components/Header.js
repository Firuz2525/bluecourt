import React from "react";
import Head from "next/head";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="hdr">
        <div className="container-md">
          <header className=" d-flex justify-content-between py-3 border-bottom">
            <Link href="/">
              <span className="bluecourt cursorpointer d-flex align-items-center mb-3 mb-md-0 me-md-auto  fs-4 logo">
                BLUECOURT
              </span>
            </Link>

            <nav
              className="navbar navbar-expand-md navbar-dark"
              aria-label="Third navbar example"
            >
              <div className="container-fluid">
                <span></span>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarsExample03"
                  aria-controls="navbarsExample03"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample03">
                  {/* <ul className="navbar-nav me-auto mb-2 mb-sm-0"> */}
                  <ul className="navbar-nav">
                    <li className="nav-item nav-link">
                      <Link aria-current="page" href="/">
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item nav-link dropdown">
                      <Link href="/">
                        <a
                          className=" active dropdown-toggle"
                          id="dropdown03"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          ROOMS
                        </a>
                      </Link>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown03"
                      >
                        <Link href="/rooms">
                          <li className="dropdown-item cursorpointer">
                            Junior site
                          </li>
                        </Link>

                        <Link href="/rooms">
                          <li className="dropdown-item cursorpointer">
                            Family room
                          </li>
                        </Link>

                        <Link href="/rooms">
                          <li className="dropdown-item cursorpointer">
                            Deluxe room
                          </li>
                        </Link>

                        <Link href="/rooms">
                          <li className="dropdown-item cursorpointer">
                            Superior room
                          </li>
                        </Link>
                      </ul>
                    </li>
                    <li className="nav-item nav-link active">
                      <Link href="/gallery">
                        <div className="nvlnk">GALLERY</div>
                      </Link>
                    </li>
                    <li className="nav-item nav-link active">
                      <Link href="/contact">
                        <div className="nvlnk">CONTACT</div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
