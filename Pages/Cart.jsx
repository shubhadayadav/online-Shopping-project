import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../cartSlice/cartSlice";
import { Link } from "react-scroll";

const Cart = () => {
  const cartMenu = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log(cartMenu);

  return (
    <>
      <div className="container cart-align   " id="cartcheck">
        <div className="sidebar">
          <section className="bg-light p-2">
            <h3 className=" text-center fs-2">
              {cartMenu.length} items in cart
            </h3>
          </section>
          <hr />
          <ul className="list-group">
            {cartMenu &&
              cartMenu.map((menu, i) => {
                // console.log(menu);
                return (
                  <li
                    key={i}
                    className="list-group-item d-flex justify-content-between align-items-center "
                    width="50%"
                    aria-current="true"
                  >
                    <div className=" ">
                      <img
                        src={menu.image}
                        className="img-thumbnail"
                        alt="..."
                        style={{ height: 64, aspectRatio: "1/1" }}
                      />
                    </div>
                    <div className="fw-bold fs-6">
                      {menu.title.slice(0, 11)}
                    </div>
                    <div className="fs-5 d-flex justify-content-evenly mx-2 ">
                      {menu.price}
                      <div
                        className="trash  "
                        // onClick={() => deleteMenu(menu.id)}
                        onClick={() => dispatch(removeFromCart(menu.id))}
                      >
                        <i class="bi bi-trash-fill"></i>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
          <div className="container bg-light position-static  d-flex justify-content-between ">
            {" "}
            <Link
              to="/viewcart"
              className="btn btn-primary  btn-style1 fs-6 p-2 m-2 mx-3 mt-2 "
            >
              View Cart
            </Link>
            <Link to="/checkout" className="btn btn-danger fs-6 p-2 m-2 mt-2">
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
