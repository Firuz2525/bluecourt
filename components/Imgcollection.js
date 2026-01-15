import React, { useState } from "react";

const Imgcollection = () => {
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const handleOverlayClick = () => {
    setIsConfirmationVisible(false);
  };
  // setSelectedImage = { setSelectedImage };
  // setIsConfirmationVisible = { setIsConfirmationVisible };
  return (
    <>
      <div className="gallery">
        <div className="container-md">
          <div className="row">
            <div className="col contactext">
              <p className="text-light letterspace2">Images</p>
              <div className="display-3 logo text-light">Our Gallery</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="letterspace2 text-dark">IMAGES</div>
          <div className="logo display-5 text-dark">Image Gallery</div>
        </div>
        <div className="row d-flex flex-row galleryimgs">
          <div className="row d-flex align-items-center">
            <div className="col-4">
              <img
                id="zoomingimg"
                className="zoomingimg galleryimg"
                src="./tourist2.jpg"
                alt="tour"
                onClick={() => {
                  setSelectedImage("./tourist2.jpg");
                  setIsConfirmationVisible(true);
                }}
              />
            </div>
            <div className="col-4">
              <img
                id="zoomingimg"
                className="galleryimg"
                src="./tourist1.jpg"
                alt="tour"
                onClick={() => {
                  setSelectedImage("./tourist1.jpg");
                  setIsConfirmationVisible(true);
                }}
              />
            </div>
            <div className="col-4">
              <img
                id="zoomingimg"
                className="galleryimg"
                src="./tourist4.jpg"
                alt="tour"
                onClick={() => {
                  setSelectedImage("./tourist4.jpg");
                  setIsConfirmationVisible(true);
                }}
              />
            </div>
          </div>
          <div className="row d-flex">
            <div className="col">
              <img
                id="zoomingimg"
                className="galleryimg"
                src="./tourist5.jpg"
                alt="tour"
                onClick={() => {
                  setSelectedImage("./tourist5.jpg");
                  setIsConfirmationVisible(true);
                }}
              />
            </div>
            <div className="col">
              <img
                id="zoomingimg"
                className="galleryimg"
                src="./tourist6.jpg"
                alt="tour"
                onClick={() => {
                  setSelectedImage("./tourist6.jpg");
                  setIsConfirmationVisible(true);
                }}
              />
            </div>
          </div>

          <div className="row d-flex align-items-center">
            <div className="col-4">
              <img
                id="zoomingimg"
                className="galleryimg"
                src="./tourist9.jpg"
                alt="tour"
                onClick={() => {
                  setSelectedImage("./tourist9.jpg");
                  setIsConfirmationVisible(true);
                }}
              />
            </div>
            <div className="col-4">
              <img
                id="zoomingimg"
                className="galleryimg"
                src="./tourist7.jpg"
                alt="tour"
                onClick={() => {
                  setSelectedImage("./tourist7.jpg");
                  setIsConfirmationVisible(true);
                }}
              />
            </div>
            <div className="col-4">
              <img
                id="zoomingimg"
                className="galleryimg"
                src="./tourist8.jpg"
                alt="tour"
                onClick={() => {
                  setSelectedImage("./tourist8.jpg");
                  setIsConfirmationVisible(true);
                }}
              />
            </div>
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
              <img src={`/${selectedImage}`} width="450px" alt="img" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Imgcollection;
