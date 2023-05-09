import { useState, useEffect } from "react";
// import Counter from "./features/counter/Counter";
import { useDispatch, useSelector } from "react-redux";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import Location from "./features/location/Location";
import Navbar from "./components/Navbar";
import Cart from "./features/cart/Cart";
import { calculateTotals } from "./features/cart/cartSlice";
import Modal from "./components/Modal";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <div className="App">
      {isOpen && <Modal />}
      <Navbar />
      <Cart />
      {/* <Counter /> */}
      <PostsList />
      <AddPostForm />
      <Location />
    </div>
  );
}

export default App;
