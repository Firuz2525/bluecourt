import Link from "next/link";
import React from "react";

const RoomPage = () => {
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
            <img src="./junior1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./junior2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./junior3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
      <div className="roombg">
        <div className="container-md m-5">
          <div className="letterspace2">THE REG HOTEL</div>
          <div className="display-5 logo text-dark">Junior Site</div>
          <div className="row d-md-flex flex-column flex-sm-row justify-content-between">
            <div className="col-7">
              <p className="my-3">
                lorem ac erat suscipit bibendum nulla facilisi. Sedeuter nunc
                volutpat miss sapien vel conseyen turpeutionyer masin libero
                sevenion vusetion viventa augue sit amet hendrerit vestibulum.
                Duisteyerion venenatis lacus gravida eros ut turpis interdum
                ornare.
              </p>
              <p className="my-4">
                Interdum et malesu they adamale fames ac anteipsu pimsine
                faucibus curabitur arcu site feugiat in tortor in, volutpat
                sollicitudin libero. Hotel non lorem acer suscipit bibendum
                vulla facilisi nedeuter nunc volutpa mollis sapien velet
                conseyer turpeutionyer masin libero sempe mollis.
              </p>
              <div className="row">
                <div className="col">
                  <h3 className="logo">Check-in</h3>
                  <p>
                    <i className="fas fa-check checkicon"></i> Check-in from
                    9:00 AM - anytime
                  </p>
                  <p>
                    <i className="fas fa-check checkicon"></i> Early check-in
                    subject to availability
                  </p>
                </div>
                <div className="col">
                  <h3 className="logo">Check-out</h3>
                  <p>
                    <i className="fas fa-check checkicon"></i> Check-out before
                    noon
                  </p>
                  <p>
                    <i className="fas fa-check checkicon"></i> Express check-out
                  </p>
                </div>
                <h3 className="logo">Special check-in instructions</h3>
                <p>
                  Guests will receive an email 5 days before arrival with
                  check-in instructions; front desk staff will greet guests on
                  arrival For more details, please contact the property using
                  the information on the booking confirmation.
                </p>
                <h3 className="logo">Pets</h3>
                <p>Pets are not allowed</p>
                <h3 className="logo">Children and extra beds</h3>
                <p>
                  Children are welcome Kids stay free! Children stay free when
                  using existing bedding; children may not be eligible for
                  complimentary breakfast Rollaway/extra beds are available for
                  $ 10 per day.
                </p>
              </div>
            </div>
            <div className="col-4">
              <h3 className="logo">Amenities</h3>
              <p>
                <i className="fas fa-users checkicon"></i>1-2 Person
              </p>
              <p>
                <i className="fas fa-wifi checkicon"></i>Free Wifi
              </p>
              <p>
                <i className="fas fa-ruler checkicon"></i>200 sqft room
              </p>
              <p>
                <i className="fas fa-utensils checkicon"></i>Breakfast
              </p>
              <p>
                <i className="fas fa-grip-lines checkicon"></i>Towels
              </p>
              <p>
                <i className="fas fa-swimmer checkicon"></i>Swimming Pool
              </p>
            </div>
          </div>
          <Link href="/">
            <button className="h3 p-3 checkinbtn">CHECK NOW</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomPage;
