import React from "react";
import "./Shop.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const Shop = () => {
  const [product, setProduct] = useState([]);

  const gelAllproduct = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((resp) => setProduct(resp.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    gelAllproduct();
    console.log(product);
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <div className="container-fluid allproduct-style ">
        <h2 className="   p-1 mb-1 pt-5 text-center fst-bold fs-2 fw-9 ">
          {" "}
          All Products{" "}
        </h2>
        <i
          className="line-color line-style mt-5 fw-9
        "
        >
          _________________
        </i>
        <div className="allProduct-section">
          <div className="row   ">
            {product &&
              product.map((products) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-5 my-1 ">
                    <div
                      className="card card-allproduct "
                      style={{ width: "19rem" }}
                    >
                      <img
                        src={products.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body ">
                        <h5 className="card-title-feature  fs-4    text-center">
                          {" "}
                          {products.title.slice(0, 15)}{" "}
                        </h5>

                        <div className="card-footer-shop    mt-5">
                          <p className="card-text-shop      p-0      ">
                            {" "}
                            Price:${products.price}
                          </p>
                          <button className="btn btn-primary btn-shop   shadow-0 me-1 ">
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
