import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const Header = () => {
  const router = useRouter();
  const { locale, asPath } = router;

  const t = useTranslations("Header");

  return (
    <>
      <div className="hdr">
        <div className="container-md">
          <header className="d-flex justify-content-between py-3 border-bottom">
            {/* LOGO */}
            <Link href="/" locale={locale}>
              <h2 className="bluecourt cursorpointer fw-bolder d-flex align-items-center mb-3 mb-md-0 me-md-auto fs-4 logo">
                BLUECOURT
              </h2>
            </Link>

            <nav
              className="navbar navbar-expand-md navbar-dark"
              aria-label="Third navbar example"
            >
              <div className="container-fluid">
                {/* MOBILE TOGGLER */}
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
                  <ul className="navbar-nav align-items-center">
                    {/* HOME */}
                    <li className="nav-item text-white nav-link">
                      <Link href="/" locale={locale}>
                        <h5 className="nvlnk">{t("home")} </h5>
                      </Link>
                    </li>

                    {/* ROOMS DROPDOWN */}
                    {/* <li className="nav-item nav-link dropdown">
                      <h5>
                        <a
                          className="active dropdown-toggle"
                          id="roomsDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {t("rooms")}
                        </a>
                      </h5>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="roomsDropdown"
                      >
                        <li>
                          <Link href="/rooms" locale={locale}>
                            <h5 className="dropdown-item">
                              {t("juniorSuite")}
                            </h5>
                          </Link>
                        </li>
                        <li>
                          <Link href="/rooms" locale={locale}>
                            <h5 className="dropdown-item">{t("familyRoom")}</h5>
                          </Link>
                        </li>
                      </ul>
                    </li> */}

                    {/* GALLERY */}
                    <li className="nav-item nav-link active">
                      <Link href="/gallery" locale={locale}>
                        <h5 className="nvlnk">{t("gallery")}</h5>
                      </Link>
                    </li>
                    {/* CONTACT */}
                    <li className="nav-item nav-link active">
                      <Link href="/contact" locale={locale}>
                        <h5 className="nvlnk">{t("contact")}</h5>
                      </Link>
                    </li>

                    {/* LANGUAGE SWITCHER */}
                    {/* <li className="nav-item nav-link dropdown ms-md-3">
                      <a
                        className="btn btn-outline-light btn-sm dropdown-toggle text-uppercase"
                        id="langDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ minWidth: "50px" }}
                      >
                        {locale}
                      </a>

                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="langDropdown"
                      >
                        <li>
                          <Link href={asPath} locale="en">
                            <span
                              className={`dropdown-item ${
                                locale === "en" ? "active" : ""
                              }`}
                            >
                              English
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link href={asPath} locale="ru">
                            <span
                              className={`dropdown-item ${
                                locale === "ru" ? "active" : ""
                              }`}
                            >
                              Русский
                            </span>
                          </Link>
                        </li>

                        <li>
                          <Link href={asPath} locale="jp">
                            <span
                              className={`dropdown-item ${
                                locale === "jp" ? "active" : ""
                              }`}
                            >
                              日本語
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* LANGUAGE SWITCHER */}
                    <li className="nav-item nav-link dropdown ms-md-3">
                      <a
                        className="lang-toggle dropdown-toggle"
                        id="langDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{ marginRight: "5px", opacity: 0.8 }}
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <span className="lang-code">{locale}</span>
                      </a>

                      <ul
                        className="dropdown-menu dropdown-menu-end lang-menu"
                        aria-labelledby="langDropdown"
                      >
                        <li>
                          <Link href={asPath} locale="en">
                            <span
                              className={`dropdown-item lang-item ${
                                locale === "en" ? "active" : ""
                              }`}
                            >
                              <span className="lang-flag">🇬🇧</span> English
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={asPath} locale="ru">
                            <span
                              className={`dropdown-item lang-item ${
                                locale === "ru" ? "active" : ""
                              }`}
                            >
                              <span className="lang-flag">🇷🇺</span> Русский
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href={asPath} locale="jp">
                            <span
                              className={`dropdown-item lang-item ${
                                locale === "jp" ? "active" : ""
                              }`}
                            >
                              <span className="lang-flag">🇯🇵</span> 日本語
                            </span>
                          </Link>
                        </li>
                      </ul>
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
