import React from "react";
import "./Home.css";
import cards1 from "../public/cards-img-7.avif";
import cards2 from "../public/cards-img-8.avif";
import cards3 from "../public/cards-img-9.jpg";

const Cards = () => {
  return (
    <>
      <div className="container-fluid card-body   ">
        <div className="main-cards ">
          <div className="card text-bg-dark">
            <img src={cards1} className="card-img" alt="..." />
            <div className="card-img-overlay text-danger">
              <h3 className="card-title text-white ">Women</h3>
              <p className="card-text  ">Spring 2023</p>
              <p className="card-text1 fs-5">
                <small>SHOP NOW</small>
              </p>
            </div>
          </div>

          <div className="card text-bg-dark">
            <img src={cards2} className="card-img" alt="..." />
            <div className="card-img-overlay text-danger ">
              <h3 className="card-title text-white">Men</h3>
              <p className="card-text ">Spring 2023</p>
              <p className="card-text1 fs-5">
                <small>SHOP NOW</small>
              </p>
            </div>
          </div>

          <div className="card text-bg-dark">
            <img src={cards3} className="card-img" alt="..." />
            <div className="card-img-overlay text-danger">
              <h3 className="card-title text-white ">Accesories</h3>
              <p className="card-text">New Trends</p>
              <p className="card-text1 fs-5 fw-9">
                <small>SHOP NOW</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
