import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import sendMessageToTelegram from "./msgToBot";
import { useTranslations } from "next-intl";

const Getintouch = () => {
  const t = useTranslations("GetInTouch");
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
    sendMessageToTelegram(
      `Get In Touch: ${formData.name}, ${formData.email}, ${formData.number}, ${formData.subject}: ${formData.message}`
    );
  };

  return (
    <>
      <Header />

      <div className="contact"></div>

      <div className="contactdetails">
        <div className="container my-5">
          <div className="row d-flex flex-column flex-md-row justify-content-between">
            <div className="col-6">
              <div className="h3 logo text-dark">BLUECOURT HOTEL</div>
              <p>{t("hotelDescription")}</p>

              <div className="d-flex align-items-center">
                <i className="fas fa-phone h1 checkicon sitecolor"></i>
                <div className="d-flex flex-column">
                  <div className="h5">{t("reservation")}</div>
                  <div className="sitecolor h5">+81 80 6549 2181</div>
                </div>
              </div>

              <div className="d-flex align-items-center my-5">
                <i className="fas fa-envelope h1 checkicon sitecolor"></i>
                <div className="d-flex flex-column">
                  <div className="h5">{t("emailInfo")}</div>
                  <div className="sitecolor h5">info@bluecourt.uz</div>
                </div>
              </div>

              <div className="address-section">
                <div className="d-flex align-items-center mb-3">
                  <i className="fas fa-map-marked-alt h1 checkicon sitecolor"></i>
                  <div className="d-flex flex-column">
                    <div className="h5 mb-0">{t("addressLabel")}</div>
                    <div className="sitecolor h5">{t("fullAddress")}</div>
                  </div>
                </div>

                <div
                  style={{
                    width: "100%",
                    height: "500px",
                    overflow: "hidden",
                    borderRadius: "12px",
                    border: "1px solid #ddd",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d767.9707785023768!2d66.98054426955257!3d39.65244503078109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDM5JzA4LjQiTiA2NsKwNTgnNDkuOCJF!5e0!3m2!1sen!2sus!4v1768484258588!5m2!1sen!2sus"
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
              <div className="h3 logo text-dark">{t("formTitle")}</div>
              <>
                <div className="d-flex">
                  <input
                    className="contactinput"
                    type="text"
                    placeholder={t("placeholderName")}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="contactinput"
                    type="email"
                    placeholder={t("placeholderEmail")}
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
                    placeholder={t("placeholderNumber")}
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="contactinput"
                    type="text"
                    placeholder={t("placeholderSubject")}
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-flex">
                  <textarea
                    className="contactinput"
                    placeholder={t("placeholderMessage")}
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
                  value={t("sendButton")}
                />
              </>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Getintouch;
