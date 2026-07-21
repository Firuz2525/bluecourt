import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Rooms() {
  const t = useTranslations("Rooms");

  return (
    <>
      <div id="room" className="container-md my-5">
        <div className="row text-dark">
          <div className="letterspace">
            <span className="bluecourt fw-bold">BLUECOURT</span>{" "}
            {t("luxuryHotel")}
          </div>
          <div className="logo display-5">{t("title")}</div>
        </div>

        {/* Row 1 */}
        <div className="row d-flex justify-content-center">
          {/* Junior Suite */}
          <div className="col-md m-3 ui-card">
            <img
              className="roomsimg"
              src="./images/rooms/rm-101/h.jpg"
              alt="Junior Suite"
            />
            <div className="description desc uper">
              <h5>100$ / {t("night")}</h5>
              <div className="rtype logo h2">
                {/* {t("juniorSuite")} */}
                Blue Ornament Room
              </div>
              <div className="rsicons d-flex justify-content-between">
                <div className="roomicons">
                  <i className="fas fa-solid fa-bath"></i>
                  <i className="fas fa-solid fa-restroom"></i>
                  <i className="fas fa-solid fa-wifi"></i>
                  <i className="fas fa-tv"></i>
                </div>
                <div></div>
                {/* <Link href="/rooms">
                  <div className="cursorpointer">
                    {t("details")}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>

          {/* Family Room */}
          <div className="col-md m-3 ui-card">
            <img
              className="roomsimg"
              src="./images/rooms/rm-103/a.jpg"
              alt="Family Room"
            />
            <div className="description desc uper">
              <h5>120$ / {t("night")}</h5>
              <div className="rtype logo h2">
                Suzani Deluxe Room
                {/* {t("familyRoom")} */}
              </div>
              <div className="rsicons d-flex justify-content-between">
                <div className="roomicons">
                  <i className="fas fa-solid fa-bath"></i>
                  <i className="fas fa-solid fa-restroom"></i>
                  <i className="fas fa-solid fa-wifi"></i>
                  <i className="fas fa-tv"></i>
                </div>
                <div></div>
                {/* <Link href="/rooms">
                  <div className="cursorpointer">
                    {t("details")}
                  </div>
                </Link> */}
              </div>
            </div>
          </div>

          {/* Twin Room */}
          <div className="col-md m-3 ui-card">
            <img
              className="roomsimg"
              src="./images/rooms/rm-102/a.jpg"
              alt="Twin Room"
            />
            <div className="description desc uper">
              <h5>120$ / {t("night")}</h5>
              <div className="rtype logo h2">
                {/* {t("twinRoom")} */}
                Shinam Arch Room
              </div>
              <div className="rsicons d-flex justify-content-between">
                <div className="roomicons">
                  <i className="fas fa-solid fa-bath"></i>
                  <i className="fas fa-solid fa-restroom"></i>
                  <i className="fas fa-solid fa-wifi"></i>
                  <i className="fas fa-tv"></i>
                </div>
                <div></div>{" "}
                {/* <Link href="/rooms">
                  <div className="cursorpointer">{t("details")}</div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="row d-flex justify-content-center">
          {/* Deluxe Room */}
          <div className="col-md m-3 ui-card">
            <img
              className="roomsimg"
              src="./images/rooms/rm-105/h.jpg"
              alt="Deluxe Room"
            />
            <div className="description desc">
              <h5>150$ / {t("night")}</h5>
              <div className="rtype logo h2">
                {/* {t("deluxeRoom")} */}
                Ganch Heritage Room
              </div>
              <div className="rsicons d-flex justify-content-between">
                <div className="roomicons">
                  <i className="fas fa-solid fa-bath"></i>
                  <i className="fas fa-solid fa-restroom"></i>
                  <i className="fas fa-solid fa-wifi"></i>
                  <i className="fas fa-tv"></i>
                </div>
                <div></div>
                {/* <Link href="/rooms">
                  <div className="cursorpointer">{t("details")}</div>
                </Link> */}
              </div>
            </div>
          </div>

          {/* Superior Room */}
          <div className="col-md m-3 ui-card">
            <img
              className="roomsimg"
              src="./images/rooms/rm-104/a.jpg"
              alt="Superior Room"
            />
            <div className="description desc">
              <h5>150$ / {t("night")}</h5>
              <div className="rtype logo h2">
                {/* {t("superiorRoom")} */}
                Silk Alcove Room
              </div>
              <div className="rsicons d-flex justify-content-between">
                <div className="roomicons">
                  <i className="fas fa-solid fa-bath"></i>
                  <i className="fas fa-solid fa-restroom"></i>
                  <i className="fas fa-solid fa-wifi"></i>
                  <i className="fas fa-tv"></i>
                </div>
                <div></div>
                {/* <Link href="/rooms">
                  <div className="cursorpointer">{t("details")}</div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
