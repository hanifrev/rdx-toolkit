import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrease, increase, removeItem } from "./cartSlice";
import { openModal } from "../modal/modalSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  // console.log(data);

  // cartitem componenent
  const CartItem = ({ id, title, img, price, amount }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        key={id}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{title}</span>
          <img src={img} style={{ width: "50px" }} />
          <span>{price}</span>
          <button
            onClick={() => dispatch(removeItem(id))}
            style={{ width: "150px", background: "none", color: "red" }}
          >
            remove
          </button>
        </div>
        <div>
          <button
            onClick={() => dispatch(increase({ id }))}
            style={{ background: "none" }}
          >
            +
          </button>
          {amount}
          <button
            onClick={() => dispatch(decrease({ id }))}
            style={{ background: "none" }}
          >
            -
          </button>
        </div>
      </div>
    );
  };

  if (amount < 1) {
    return <div>nothing</div>;
  }

  return (
    <div>
      <h2>Your fvcking cart</h2>
      <div>
        {cartItems.map((x) => {
          return <CartItem key={x.id} {...x} />;
        })}
      </div>
      <div>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button onClick={() => dispatch(openModal())}>CLEAR CART</button>
      </div>
    </div>
  );
};

export default Cart;
