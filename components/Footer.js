import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StatusAdmin } from "../pages/_app";
const Footer = () => {
  const router = useRouter();

  const { setOk } = useContext(StatusAdmin);

  return (
    <div>
      <div className="footer">
        <div className="container-md">
          <div className="row d-md-flex flex-row justify-content-around">
            <div className="col-3 my-5">
              <div className="text-white logo h4 mb-3">Explore</div>
              <div className="text-white-50 explorediv">
                <div>Home</div>
                <div>Rooms</div>
                <div>Restaurant</div>
                <div>Gallery</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="col-4 my-5">
              <div className="text-white logo h4 mb-3">Contact</div>
              <div className="text-white-50">
                <p>132 Registan Street, Samarkand city, Uzbekistan</p>

                <a className="text-white email">info@bluecourt.uz</a>
                <div className="h4 my-3 text-white logo">
                  <i className="fas fa-phone"></i> +81 80 6549 2181
                </div>
                <div className="h4 text-white  socialsite">
                  <Link
                    href="https://t.me/mamonaku1"
                    target="_blank"
                    className="primary"
                  >
                    <i className="fab fa-telegram mx-2"></i>
                  </Link>
                  <i className="fab fa-line mx-2"></i>
                  <i className="fab fa-whatsapp mx-2"></i>
                  <i className="fab fa-facebook-f mx-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- copyright --> */}
      <div className="copyright p-4 text-white-50">
        <div className="d-flex  justify-content-center">
          <div
            onClick={() => {
              if (router.pathname === "/") {
                setOk(true);
                alert("this is copyrigth");
              }
            }}
            className="me-1"
          >
            ©
          </div>{" "}
          Copyright 2026 by BLUECOURT
        </div>
      </div>
    </div>
  );
};

export default Footer;
