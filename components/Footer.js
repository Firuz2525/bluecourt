import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { StatusAdmin } from "../pages/_app";
import { useTranslations } from "next-intl";

const Footer = () => {
  const router = useRouter();
  const t = useTranslations("Footer");
  const { setOk } = useContext(StatusAdmin);

  return (
    <div>
      <div className="footer">
        <div className="container-md">
          <div className="row d-md-flex flex-row justify-content-around">
            <div className="col-3 my-5">
              <div className="text-white logo h4 mb-3">{t("explore")}</div>
              <div className="text-white-50 explorediv">
                <div>{t("home")}</div>
                <div>{t("rooms")}</div>
                <div>{t("restaurant")}</div>
                <div>{t("gallery")}</div>
                <div>{t("contact")}</div>
              </div>
            </div>
            <div className="col-4 my-5">
              <div className="text-white logo h4 mb-3">{t("contact")}</div>
              <div className="text-white-50">
                <p>{t("address")}</p>

                <a className="text-white email">info@bluecourt.uz</a>
                <div className="h4 my-3 text-white logo">
                  <i className="fas fa-phone"></i> +81 80 6549 2181
                </div>
                <div className="h4 text-white socialsite">
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
        <div className="d-flex justify-content-center">
          <div
            onClick={() => {
              if (router.pathname === "/") {
                setOk(true);
                alert("this is copyright");
              }
            }}
            className="me-1"
          >
            ©
          </div>{" "}
          {t("copyrightText")}
        </div>
      </div>
    </div>
  );
};

export default Footer;
