export default function Services() {
  return (
    <>
      <div className="service">
        <div className="container-md">
          <div className="row">
            <div className="col-md-4 my-5">
              <div className="letterspace2 text-warning">BEST PRICES</div>
              <div className="display-5 logo text-light">Room Service</div>
              <p className="text-white-50">
                Savor the finest local flavors and international favorites from
                the privacy of your suite. Our dedicated culinary team is
                committed to providing a seamless dining experience, ensuring
                every meal is served with the same care and elegance found in
                our courtyard restaurant.
              </p>

              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  className="bi bi-telephone text-warning me-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <div className="d-flex flex-column">
                  <div className="text-white-50 h4">For information</div>
                  <div className="text-warning h4">+81 80 6549 2181</div>
                </div>
              </div>
            </div>
            <div className="col-md-8 d-flex flex-row align-items-center justify-content-around my-5">
              <div className="card">
                <img
                  className="card-img-top cardimg"
                  src="./r2.jpg"
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div className="card-body m-2">
                  <h4 className="card-title logo my-2">Drinks included</h4>
                  <div className="my-3">
                    <span className="h1 logo sitecolor">$20</span>
                    /daily
                  </div>
                  <div className="card-text">
                    <i className="fas fa-check me-2 sitecolor"></i>Fresh
                    Seasonal Juices
                  </div>
                  <div className="card-text">
                    <i className="fas fa-check me-2 sitecolor"></i>Coffee & Tea
                  </div>
                  <div className="card-text">
                    <i className="fas fa-times h5 me-2"></i> Alcoholic Beverages
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  className="card-img-top cardimg"
                  src="../r1.png"
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div className="card-body m-2">
                  <h4 className="card-title logo my-2">Laundry</h4>
                  <div className="my-3">
                    <span className="h1 logo sitecolor">$30</span>
                    /month
                  </div>
                  <div className="card-text">
                    <i className="fas fa-check me-2 sitecolor"></i>Steam Press
                  </div>
                  <div className="card-text">
                    <i className="fas fa-check me-2 sitecolor"></i>Same Day
                    Return
                  </div>
                  <div className="card-text">
                    <i className="fas fa-times h5 me-2"></i>Overnight Dry
                    Cleaning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
