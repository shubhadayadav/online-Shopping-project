import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { useDispatch } from "react-redux";
import { addtoCart } from "../cartSlice/cartSlice";

const Featuredprdct = () => {
  const [subProduct, setsubProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // "https://fakestoreapi.com/products?limit=18"

  useEffect(() => {
    const getPrdct = async () => {
      await axios
        .get("https://fakestoreapi.com/products?limit=18")
        .then((res) => {
          setsubProduct(res.data);
          setLoading(false);
        })
        .catch((e) => console.log(e));
    };
    getPrdct();
  }, []);
  // console.log(subProduct);

  const dispatch = useDispatch();

  return (
    <>
      <div
        className="container-fluid feature-align    mt-5 "
        id="Featuredprdct"
      >
        <h2 className=" sub-prdct-section    text-center fst-italic fw-9 ">
          Featured Products
        </h2>
        <span>
          <hr />
        </span>
        <div className="feature-product p-2">
          {loading ? (
            <i class="fa fa-circle-o-notch fa-spin fa-stack-2x fa-spin-prdct"></i>
          ) : (
            <div className="row">
              {subProduct.map((product) => {
                const { title, price, image } = product;
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12  mb-5 ">
                    <div className="card-sub">
                      <img
                        src={image}
                        className="card-img-top"
                        style={{ aspectRatio: "1 / 1" }}
                      />
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title-feature  fs-4    text-center">
                          {" "}
                          {title.slice(0, 19)}{" "}
                        </h5>

                        <div className="card-footer    mt-4">
                          <p className="card-text   fs-6   mt-1 color-success  ">
                            {" "}
                            Price:${price}
                          </p>
                          <button
                            href="/view "
                            className="btn btn-primary btn-feature   shadow-0 me-1"
                            onClick={() => dispatch(addtoCart(product))}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Featuredprdct;

// title: product.title,
// id: product.id,
// image: product.image,
// price: product.price,
