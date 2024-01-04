import React from "react";
import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartstate = {
  items: [],
  totalAmmount: 0,
  cartItems:0
};

const reducerFn = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmmount + action.item.price;
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      totalAmmount: updatedTotalAmount,
    };
  }
  return defaultCartstate;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    reducerFn,
    defaultCartstate
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const cartCTX = {
    items: cartState.items,
    addItem: addItemHandler,
    cartItems: 0,
    totalAmmount: cartState.totalAmmount,
  };

  return (
    <CartContext.Provider value={cartCTX}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
