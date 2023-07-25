import React from "react";
import "../Pages/Navbar.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import View from "./View";
// import { shoppingcartSlice } from "./Scroll";
// import Cart from "./Cart";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const cartMenu = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems)

  return (
    <>
      <nav className="navbar navbar-expand-lg   sticky  back">
        <div className="container-fluid ">
          <Link to="/" className="">
            <img
              className=" navbar-nav  navbar-brand-style "
              src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
              alt=""
            />
          </Link>

          {/* https://img.freepik.com/free-vector/hand-drawn-clothing-store-logo-design_23-2149577874.jpg */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav  navbar-style">
              <Link className="nav-link active " aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link active " to="/shop">
                {" "}
                Shop
              </Link>
              <Link className="nav-link active " to="/Features">
                {" "}
                Features
              </Link>
              <Link className="nav-link active " to="/about">
                {" "}
                About{" "}
              </Link>
              <Link className="nav-link active " to="/contact">
                {" "}
                Contact{" "}
              </Link>

              <form
                className="d-flex form-style  "
                role="search"
                id="searchstyle"
              >
                <input
                  className="form-control me-2"
                  data-bs-toggle="collapse  "
                  type="search"
                  placeholder="Search  "
                />
                <button className="btn btn-style    " type="submit">
                  <i className="bi bi-search search-style"></i>
                </button>
              </form>

              {/* <form className="search  " id="searchstyle">
                <input className="search_input " placeholder="Search  " />
                <button className="btn search__button    " type="submit">
                  <i className="bi bi-search  "></i>
                </button>
              </form> */}

              <div id="cartButton">
                {/* <button type="button" className="btn btn-info btn-outline-none btn-style1 p-2   position-relative"> */}
                <Link to="/viewcart">
                  <span className="btn btn-primary btn-style-none btn-style1 ">
                    <i class="bi bi-basket"></i>
                  </span>

                  <span className=" top-0 start-100 translate-middle  badge rounded-pill bg-danger">
                    {cartMenu.length}
                  </span>
                </Link>
              </div>

              {/* </button> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
