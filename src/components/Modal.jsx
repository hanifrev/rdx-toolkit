import React from "react";
import { useDispatch } from "react-redux";
import { closeModal, openModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div>
          <button
            type="button"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button type="button" onClick={() => dispatch(closeModal())}>
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
