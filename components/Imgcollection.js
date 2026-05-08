import React, { useState } from "react";
import { useTranslations } from "next-intl";

const Imgcollection = () => {
  const t = useTranslations("ImgCollection");
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleOverlayClick = () => {
    setIsConfirmationVisible(false);
  };

  const images = [
    "./tourist2.jpg",
    "./tourist1.jpg",
    "./tourist4.jpg",
    "./tourist5.jpg",
    "./tourist6.jpg",
    "./tourist9.jpg",
    "./tourist7.jpg",
    "./tourist8.jpg",
  ];

  return (
    <>
      <div className="gallery">
        <div className="container-md">
          <div className="row">
            <div className="col contactext">
              <p className="text-light letterspace2">{t("topSubtitle")}</p>
              <div className="display-3 logo text-light">{t("topTitle")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="letterspace2 text-dark">{t("sectionSubtitle")}</div>
          <div className="logo display-5 text-dark">{t("sectionTitle")}</div>
        </div>

        <div className="row d-flex flex-row galleryimgs">
          {/* First Row: 3 images */}
          <div className="row d-flex align-items-center">
            {[0, 1, 2].map((index) => (
              <div className="col-4" key={index}>
                <img
                  className="galleryimg"
                  src={images[index]}
                  alt="tour"
                  onClick={() => {
                    setSelectedImage(images[index]);
                    setIsConfirmationVisible(true);
                  }}
                />
              </div>
            ))}
          </div>

          {/* Second Row: 2 images */}
          <div className="row d-flex">
            {[3, 4].map((index) => (
              <div className="col" key={index}>
                <img
                  className="galleryimg"
                  src={images[index]}
                  alt="tour"
                  onClick={() => {
                    setSelectedImage(images[index]);
                    setIsConfirmationVisible(true);
                  }}
                />
              </div>
            ))}
          </div>

          {/* Third Row: 3 images */}
          <div className="row d-flex align-items-center">
            {[5, 6, 7].map((index) => (
              <div className="col-4" key={index}>
                <img
                  className="galleryimg"
                  src={images[index]}
                  alt="tour"
                  onClick={() => {
                    setSelectedImage(images[index]);
                    setIsConfirmationVisible(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isConfirmationVisible && (
        <div
          data-aos="fade-down"
          className="confirmation-container"
          onClick={handleOverlayClick}
        >
          <div id="confirmation" className="row">
            <div className="bg-light border">
              <img src={`${selectedImage}`} width="450px" alt="zoom" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Imgcollection;
