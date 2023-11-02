import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AllProducts = () => {
  let navigate = useNavigate();
  return (
    <>
      <section>
        <div className="container-fluid bg_blue fixed-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <Link className="navbar-brand" href="#">
                <img src="./img/flipkartlogo.png" width="75px" alt="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span
                  className="navbar-toggler-icon text-white"
                  style={{ color: "#fff" }}
                ></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <form className="d-flex col-md-7">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search for product brands and more"
                    aria-label="Search"
                  />
                  <button className="btn btn-primary" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
                <ul className="navbar-nav  mb-2 mr-auto mb-lg-0 ms-3">
                  {/* <!-- <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Avinash
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">My Profile</a></li>
                                <li><a className="dropdown-item" href="#">Order</a></li>
                                <li><a className="dropdown-item" href="#">Wishlist</a></li>
                                <li><a className="dropdown-item" href="#">Notification</a></li>
                                <li><a className="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li> --> */}

                  <li className="nav-item">
                    <Link
                      className="nav-link  bg-white text-dark px-3 rounded"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@mdo"
                    >
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " href="#">
                      Become a Seller
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" href="#">
                          Notification Preprensences
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          27/7 Customer Care{" "}
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Download App
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="#">
                      {" "}
                      <i className="bi bi-cart-fill"></i>
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div className="container" style={{ marginTop: "60px" }}>
          <div className="py-3">
            <h5>All Products</h5>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div className="row mb-3" onClick={() => navigate("/product-details")}>
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    {" "}
                    <span className="text-secondary">Size</span>{" "}
                    <span className="product-sizes-level">M, L, XL</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    {" "}
                    <span className="text-secondary">Size</span>{" "}
                    <span className="product-sizes-level">M, L, XL</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    {" "}
                    <span className="text-secondary">Size</span>{" "}
                    <span className="product-sizes-level">M, L, XL</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card size">
              <img
                src="https://rukminim1.flixcart.com/image/612/612/kuczmvk0/shopsy-t-shirt/7/j/f/l-mens-xoxo-white-smartees-original-imag7hb3xgfe86nh.jpeg?q=70"
                className="card-img-top-img"
                alt="..."
              />
              <div className="card-body text-center">
                <h6 className="product-style">Smartees</h6>
                <div className="overflow">
                  <p className="product-name">Men Typography Round Neck </p>
                </div>
                <div className="">
                  <span className="pe-2">₹199</span>
                  <span className="text-secondary pe-2">
                    <del>₹199</del>
                  </span>
                  <span className="text-success">80% off</span>
                </div>
                <div>
                  <p className="product-sizes">
                    <span className="text-secondary">Size</span>{" "}
                    <span className="product-sizes-level">M, L, XL</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Login
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <p className="p-3 p-3 pb-0">
                Get access to your Orders, Wishlist and Recommendations
              </p>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email/Mobile no"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Password"
                    />
                  </div>

                  {/* <!-- <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter OTP">
                      </div> -->
                    */}
                </form>
              </div>
              <div className="modal-footer  justify-content-center">
                {/* <!-- <button type="button" className="btn btn-primary">Login</button> --> */}
                <button type="button" className="btn btn-primary">
                  Sign Up
                </button>
                {/* <!-- <p className="text-sm">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p> --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
