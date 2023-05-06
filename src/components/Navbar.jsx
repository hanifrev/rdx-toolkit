import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  // this below is if we destructure the cart
  const { amount } = useSelector((state) => state.cart);
  //   not destructure
  //   const amount = useSelector((store) => store.cart.amount);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div>Redux toolkit cart</div>
      <div>{amount} pcs</div>
    </div>
  );
};

export default Navbar;
