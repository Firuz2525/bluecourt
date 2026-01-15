import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import sendMessageToTelegram from "./msgToBot";

const Getintouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleMsgToBot = () => {
    console.log();
    sendMessageToTelegram(
      `get In Touch: ${formData.name}, ${formData.email}, ${formData.number}, ${formData.subject}: ${formData.message}`
    );
  };
  return (
    <>
      {/* <!-- header --> */}
      <Header />

      {/* <!-- img  --> */}
      <div className="contact">
        <div className="container-md">
          <div className="row">
            <div className="col contactext">
              <p className="text-light letterspace2">GET IN TOUCH</p>
              <div className="display-3 logo text-light">Contact Us</div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- details  -->  */}
      <div className="contactdetails">
        <div className="container my-5">
          <div className="row d-flex flex-column flex-md-row justify-content-between">
            <div className="col-6">
              <div className="h3 logo text-dark">BLUECOURT HOTEL</div>
              <p>
                Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
                the aucan ligula. Orci varius natoque penatibus et magnis dis
                parturient monte nascete ridiculus mus nellentesque habitant
                morbine.
              </p>
              <div className="d-flex align-items-center">
                <i className="fas fa-phone h1 checkicon sitecolor"></i>
                <div className="d-flex flex-column">
                  <div className="h5">Reservation</div>
                  <div className="sitecolor h5">+81 80 6549 2181</div>
                </div>
              </div>
              <div className="d-flex align-items-center my-5">
                <i className="fas fa-envelope h1 checkicon sitecolor"></i>
                <div className="d-flex flex-column">
                  <div className="h5">Email info</div>
                  <div className="sitecolor h5">info@bluecourt.uz</div>
                </div>
              </div>
              {/* <div className="d-flex align-items-center mb-5">
                <i className="fas fa-map-marked-alt h1 checkicon sitecolor"></i>
                <div className="d-flex flex-column">
                  <div className="h5">Adress</div>
                  <div className="sitecolor h5"></div>
                </div>
              </div> */}
              <div className="address-section">
                {/* Address Text and Icon */}
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-map-marked-alt h1 checkicon sitecolor"></i>
                  <div className="d-flex flex-column">
                    <div className="h5 mb-0">Address</div>
                    <div className="sitecolor h5">
                      132 Registan Street, Samarkand, Uzbekistan
                    </div>
                  </div>
                </div>

                {/* Map Container */}
                <div
                  style={{
                    width: "100%",
                    height: "500px",
                    overflow: "hidden",
                    borderRadius: "12px",
                    border: "1px solid #ddd",
                  }}
                >
                  {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d213.33705886665715!2d66.98030394170758!3d39.65232679010624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f30!5e0!3m2!1sen!2s!4v1768483233349!5m2!1sen!2s"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hotel Location Map"
                  ></iframe> */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d767.9707785023768!2d66.97984426955257!3d39.65234503078109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM5JzA4LjQiTiA2NsKwNTgnNDkuOCJF!5e0!3m2!1sen!2sus!4v1768484258588!5m2!1sen!2sus"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hotel Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="h3 logo text-dark">Get in touch</div>
              <>
                <div className="d-flex">
                  <input
                    className="contactinput"
                    type="text"
                    placeholder="Your Name*"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="contactinput"
                    type="email"
                    placeholder="Your Email*"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex">
                  <input
                    className="contactinput"
                    type="tel"
                    placeholder="Your Number*"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="contactinput"
                    type="text"
                    placeholder="Subject*"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex">
                  <textarea
                    className="contactinput"
                    placeholder="Message*"
                    cols="35"
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <input
                  type="button"
                  onClick={handleMsgToBot}
                  className="contactinput checkinbtn letterspace px-3"
                  value="SEND MESSAGE"
                />
              </>
            </div>
          </div>
        </div>
      </div>

      {/* footer  */}
      <Footer />
    </>
  );
};

export default Getintouch;
