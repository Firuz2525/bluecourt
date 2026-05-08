import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const RoomPage = () => {
  const t = useTranslations("RoomPage");

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
          <div className="carousel-item active">
            <img
              src="./junior1.jpg"
              className="d-block w-100"
              alt="Junior Suite 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./junior2.jpg"
              className="d-block w-100"
              alt="Junior Suite 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./junior3.jpg"
              className="d-block w-100"
              alt="Junior Suite 3"
            />
          </div>
        </div>
      </div>
      <div className="roombg">
        <div className="container-md m-5">
          <div className="letterspace2">BLUECOURT HOTEL</div>
          <div className="display-5 logo text-dark">{t("juniorSuite")}</div>
          <div className="row d-md-flex flex-column flex-sm-row justify-content-between">
            <div className="col-7">
              <p className="my-3">{t("description1")}</p>
              <p className="my-4">{t("description2")}</p>
              <div className="row">
                <div className="col">
                  <h3 className="logo">{t("checkIn")}</h3>
                  <p>
                    <i className="fas fa-check checkicon"></i>{" "}
                    {t("checkInTime")}
                  </p>
                  <p>
                    <i className="fas fa-check checkicon"></i>{" "}
                    {t("earlyCheckIn")}
                  </p>
                </div>
                <div className="col">
                  <h3 className="logo">{t("checkOut")}</h3>
                  <p>
                    <i className="fas fa-check checkicon"></i>{" "}
                    {t("checkOutTime")}
                  </p>
                  <p>
                    <i className="fas fa-check checkicon"></i>{" "}
                    {t("expressCheckOut")}
                  </p>
                </div>
                <h3 className="logo">{t("specialInstructionsTitle")}</h3>
                <p>{t("specialInstructionsDesc")}</p>
                <h3 className="logo">{t("pets")}</h3>
                <p>{t("petsDesc")}</p>
                <h3 className="logo">{t("childrenTitle")}</h3>
                <p>{t("childrenDesc")}</p>
              </div>
            </div>
            <div className="col-4">
              <h3 className="logo">{t("amenities")}</h3>
              <p>
                <i className="fas fa-users checkicon"></i>
                {t("capacity")}
              </p>
              <p>
                <i className="fas fa-wifi checkicon"></i>
                {t("freeWifi")}
              </p>
              <p>
                <i className="fas fa-ruler checkicon"></i>
                {t("roomSize")}
              </p>
              <p>
                <i className="fas fa-utensils checkicon"></i>
                {t("breakfast")}
              </p>
              <p>
                <i className="fas fa-grip-lines checkicon"></i>
                {t("towels")}
              </p>
              <p>
                <i className="fas fa-swimmer checkicon"></i>
                {t("pool")}
              </p>
            </div>
          </div>
          <Link href="/">
            <button className="h3 p-3 checkinbtn">{t("checkNow")}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomPage;
