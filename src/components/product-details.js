import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { saveProductDetail } from "../redux/products.slice";
import { useDispatch } from "react-redux";
const ProductDetails = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  let [searchParams] = useSearchParams();
  let getProductsDetails = async () => {
    let category_id = searchParams.get("c_id");
    let url = `http://localhost:3004/product-details/${id}/${category_id}`;
    let { data } = await axios.get(url);
    dispatch(saveProductDetail(data));
  };
  useEffect(() => {
    getProductsDetails();
  });
  return (
    <>
      <section>
        <div className="container-fluid bg_blue fixed-top">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <Link className="navbar-brand" href="#">
                <img src="/img/flipkartlogo.png" width="75px" alt="" />
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

        <section style={{ marginTop: "60px" }}>
          <div className="container-fluid px-5 bg-light">
            <div className="row bg-white">
              {/* <!-- Product picture --> */}
              <div className="col-sm-5">
                <div className="thumbnail pstop60px">
                  <div className="prodimageDiv mt-2 mb-4">
                    <img
                      src="/img/productimg/productdetails.webp"
                      className="img-responsive"
                      width="200px"
                      alt=""
                    />
                  </div>

                  <div className="caption pb-5">
                    <div className="row buttons justify-content-center ">
                      <button
                        className="btn  col-sm-4 col-sm-offset-2 btn-lg me-4 brnone"
                        style={{
                          backgroundColor: "#ff9f00",
                          color: "#fff",
                          fontSize: "1em",
                        }}
                        onClick={() => navigate("/my-cart")}
                      >
                        <span className="glyphicon glyphicon-shopping-cart"></span>
                        &nbsp;ADD TO CART
                      </button>
                      <button
                        className="btn col-sm-4 col-sm-offset-1 btn-lg brnone"
                        style={{
                          backgroundColor: "#fb641b",
                          color: "#fff",
                          fontSize: "1em",
                        }}
                      >
                        <i
                          className="fa fa-bolt"
                          style={{ fontSize: "1.2em" }}
                        ></i>{" "}
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Product Description --> */}
              <div className="col-sm-7 desc">
                <div className="mt-3">
                  <p className="breadcrumb">
                    Home = Electronics = Mobiles = iPhone = iPhone X
                  </p>
                  <h4 className="productname">Apple iPhone X Silver: "64GB"</h4>
                  " "
                  <div className="row">
                    <div className="col-sm-12 ft13">
                      <span className="label label-success">
                        4.6 <i className="bi bi-star-fill"></i>
                      </span>{" "}
                      <strong>2,421 Ratings & Reviews</strong>
                    </div>
                  </div>
                  <div className="pt-3 pb-2">
                    <h3>₹92,400</h3>
                  </div>
                  <div>
                    <h6>Available offers</h6>
                    <div className="mt-2">
                      <h6 className="ft14">
                        {" "}
                        <img
                          src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                          width="16px"
                          className="mr-2"
                          alt=""
                        />{" "}
                        EMIs from <strong>Rs 3,070/month </strong>
                        <Link href="">
                          View Plans <i className="fa fa-chevron-right"></i>
                        </Link>
                      </h6>

                      <h6 className="ft14">
                        {" "}
                        <img
                          src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                          width="16px"
                          className="mr-2"
                          alt=""
                        />{" "}
                        <span className="glyphicon glyphicon-tag"></span>
                        <strong> Bank Offer</strong> 5% Instant Discount on Visa
                        Cards for First 3 Online Payments.{" "}
                        <Link href="">T&C</Link>
                      </h6>

                      <h6 className="ft14">
                        {" "}
                        <img
                          src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                          width="16px"
                          className="mr-2"
                          alt=""
                        />{" "}
                        <span className="glyphicon glyphicon-tag"></span>
                        <strong> Bank Offer</strong> Extra 5% off* with Axis
                        Bank Buzz Credit Card. <Link href="">T&C</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="mt-4 d-flex gap-5 flexwrapxs">
                    <div className="d-flex align-items-center gap-4">
                      <div className="ft14">Color</div>
                      <div className="">
                        <button
                          className="btn btn-default"
                          style={{
                            width: "50px",
                            border: "1px dashed #084a85",
                          }}
                        >
                          <img
                            src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/Linkpple/Linkpple-iphone-x-silver.png"
                            className="img-responsive"
                            alt=""
                          />
                        </button>
                        <button
                          className="btn btn-default"
                          style={{
                            width: "50px",
                            " border": "1px dashed red",
                          }}
                        >
                          <img
                            src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/Linkpple/Linkpple-iphone-x-silver.png"
                            className="img-responsive"
                            alt=""
                          />
                        </button>
                        <button
                          className="btn btn-default"
                          style={{
                            " width": "50px",
                            border: "1px dashed orange",
                          }}
                        >
                          "
                          <img
                            src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/Linkpple/Linkpple-iphone-x-silver.png"
                            className="img-responsive"
                            alt=""
                          />
                        </button>
                        <button
                          className="btn btn-default"
                          style={{
                            " width": "50px",
                            border: "1px dashed pink",
                          }}
                        >
                          <img
                            src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/Linkpple/Linkpple-iphone-x-silver.png"
                            className="img-responsive"
                            alt=""
                          />
                        </button>
                        <button
                          className="btn btn-default"
                          style={{
                            width: "50px",
                            border: "1px dashed #084a85",
                          }}
                        >
                          <img
                            src="https://cdn.mobilephonesdirect.co.uk/images/handsets/480/Linkpple/Linkpple-iphone-x-silver.png"
                            className="img-responsive"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-4">
                      <div className="ft14">Storage</div>
                      <div className="">
                        <button
                          className="btn btn-default"
                          style={{ border: "1px dashed #084a85" }}
                        >
                          128 GB
                        </button>
                        <button
                          className="btn btn-default"
                          style={{ " border": "1px dashed #084a85" }}
                        >
                          256 GB
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 mb-3">
                    <div className="mt-4 d-flex gap-5 ">
                      <div className="d-flex align-items-center gap-4 w-50 flexwrapxs">
                        <div className="ft14">Delivery</div>
                        <div className="">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Pincode"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h5 className="ft12">
                        Delivery in 3-4 days |{" "}
                        <Link
                          href=""
                          style={{ color: "green", textDecoration: "none" }}
                        >
                          Free
                        </Link>
                      </h5>
                    </div>
                  </div>
                  <div className="mt-4 d-flex gap-5 pb-5 flexwrapxs">
                    <div className="d-flex  gap-4">
                      <div className="ft14">Highlights</div>
                      <div className="ft14">
                        <div className="">
                          <p> 64GB ROM</p>
                          <p> 5.8 inch Super Retina HD Display</p>
                          <p>
                            {" "}
                            12MP + 12MP Dual Rear Camera | 7MP Front Camera
                          </p>
                          <p> lithium-ion Battery</p>
                          <p>
                            {" "}
                            A11 Bionic Chip with 64-bit Architecture, Neural
                            Engine, Embedded M11 Motion Co-processor
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex  gap-4">
                      <div className="ft14">Storage</div>
                      <div className="ft14">
                        <div className="">
                          <p> 64GB ROM</p>
                          <p> 5.8 inch Super Retina HD Display</p>
                          <p>
                            {" "}
                            12MP + 12MP Dual Rear Camera | 7MP Front Camera
                          </p>
                          <p> lithium-ion Battery</p>
                          <p>
                            {" "}
                            A11 Bionic Chip with 64-bit Architecture, Neural
                            Engine, Embedded M11 Motion Co-processor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer-section">
          <div className="container">
            <div className="footer-content pt-5 pb-5">
              <div className="row">
                <div className="col-xl-4 col-lg-4 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li>
                        <Link href="#">Home</Link>
                      </li>
                      <li>
                        <Link href="#">about</Link>
                      </li>
                      <li>
                        <Link href="#">services</Link>
                      </li>
                      <li>
                        <Link href="#">portfolio</Link>
                      </li>
                      <li>
                        <Link href="#">Contact</Link>
                      </li>
                      <li>
                        <Link href="#">About us</Link>
                      </li>
                      <li>
                        <Link href="#">Our Services</Link>
                      </li>
                      <li>
                        <Link href="#">Expert Team</Link>
                      </li>
                      <li>
                        <Link href="#">Contact us</Link>
                      </li>
                      <li>
                        <Link href="#">Latest News</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li>
                        <Link href="#">Home</Link>
                      </li>
                      <li>
                        <Link href="#">about</Link>
                      </li>
                      <li>
                        <Link href="#">services</Link>
                      </li>
                      <li>
                        <Link href="#">portfolio</Link>
                      </li>
                      <li>
                        <Link href="#">Contact</Link>
                      </li>
                      <li>
                        <Link href="#">About us</Link>
                      </li>
                      <li>
                        <Link href="#">Our Services</Link>
                      </li>
                      <li>
                        <Link href="#">Expert Team</Link>
                      </li>
                      <li>
                        <Link href="#">Contact us</Link>
                      </li>
                      <li>
                        <Link href="#">Latest News</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3>Useful Links</h3>
                    </div>
                    <ul>
                      <li>
                        <Link href="#">Home</Link>
                      </li>
                      <li>
                        <Link href="#">about</Link>
                      </li>
                      <li>
                        <Link href="#">services</Link>
                      </li>
                      <li>
                        <Link href="#">portfolio</Link>
                      </li>
                      <li>
                        <Link href="#">Contact</Link>
                      </li>
                      <li>
                        <Link href="#">About us</Link>
                      </li>
                      <li>
                        <Link href="#">Our Services</Link>
                      </li>
                      <li>
                        <Link href="#">Expert Team</Link>
                      </li>
                      <li>
                        <Link href="#">Contact us</Link>
                      </li>
                      <li>
                        <Link href="#">Latest News</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                  <div className="copyright-text">
                    <p>
                      Copyright &copy; 2023, All Right Reserved{" "}
                      <Link href="#">flipkart</Link>
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <Link href="#">Home</Link>
                      </li>
                      <li>
                        <Link href="#">Terms</Link>
                      </li>
                      <li>
                        <Link href="#">Privacy</Link>
                      </li>
                      <li>
                        <Link href="#">Policy</Link>
                      </li>
                      <li>
                        <Link href="#">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

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
                  <input type="text" className="form-control" placeholder="Enter OTP"/>
                </div> --> */}
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

export default ProductDetails;
