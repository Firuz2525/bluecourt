import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Slider() {
  const t = useTranslations("Slider");

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src="./mainimg/a.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption mb-5 d-none d-md-block">
              <h1 className="logo letterspace scomment">{t("slide1Title")}</h1>
              <Link href="/rooms">
                <button className="btn btn-outline-dark sliderbtn">
                  {t("roomsBtn")}
                </button>
              </Link>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src="./mainimg/b.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption mb-5 d-none d-md-block">
              <p>{t("slide2Sub")}</p>
              <h1 className="logo letterspace scomment">{t("slide2Title")}</h1>
              <Link href="/rooms">
                <button className="btn btn-outline-dark sliderbtn">
                  {t("roomsBtn")}
                </button>
              </Link>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src="./mainimg/a.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption mb-5 d-none d-md-block">
              <p>{t("slide3Sub")}</p>
              <h1 className="logo letterspace scomment">{t("slide3Title")}</h1>
              <Link href="/rooms">
                <button className="btn btn-outline-dark sliderbtn">
                  {t("roomsBtn")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
