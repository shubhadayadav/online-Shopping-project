import React, { useEffect, useState } from "react";
import "./View.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../cartSlice/cartSlice";

const View = () => {
  const cartMenu = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log(cartMenu);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cartMenu.reduce((prevmenu, cartMenu) => prevmenu + cartMenu.price, 0)
    );
  }, []);
  return (
    <>
      <div className="container     view-align">
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
                  <div className="fw-bold fs-6">{menu.rating.title}</div>
                  <div className="fs-5 d-flex justify-content-evenly  ">
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
          <li className="fw-bold list-group-item fs-4 d-flex justify-content-between total">
            Total:
            <div>{Math.round(total)}</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default View;
