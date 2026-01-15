import Link from "next/link";

export default function Slider() {
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
            <img src="./18.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption mb-5 d-none d-md-block">
              {/* <img className="star" src="./star.png" alt="name" /> */}

              <h1 className="logo letterspace scomment">
                ENJOY THE BEST MOMENTS OF LIFE
              </h1>
              <Link href="/rooms">
                <button className="btn btn-outline-dark sliderbtn">
                  ROOMS & SUITS
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./2.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption mb-5 d-none d-md-block">
              {/* <img className="star" src="./star.png" alt="name" /> */}
              <p>UNIQUE PLACE TO RELAX & ENJOY</p>
              <h1 className="logo letterspace scomment">
                THE PERFECT BASE FOR YOU
              </h1>
              <Link href="/rooms">
                <button className="btn btn-outline-dark sliderbtn">
                  ROOMS & SUITS
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./14.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption mb-5 d-none d-md-block">
              {/* <img className="star" src="./star.png" alt="name" /> */}
              <p>THE ULTIMATE LUXURY EXPERIENCE</p>
              <h1 className="logo letterspace scomment">
                ENJOY A LUXURY EXPERIENCE
              </h1>
              <Link href="/rooms">
                <button className="btn btn-outline-dark sliderbtn">
                  ROOMS & SUITS
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
