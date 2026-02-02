import React, { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { plant } = action.payload;
      const existing = state.items[plant.id];
      const nextQty = existing ? existing.qty + 1 : 1;

      return {
        ...state,
        items: {
          ...state.items,
          [plant.id]: { plant, qty: nextQty },
        },
      };
    }

    case "INC": {
      const { id } = action.payload;
      const item = state.items[id];
      if (!item) return state;

      return {
        ...state,
        items: {
          ...state.items,
          [id]: { ...item, qty: item.qty + 1 },
        },
      };
    }

    case "DEC": {
      const { id } = action.payload;
      const item = state.items[id];
      if (!item) return state;

      const nextQty = item.qty - 1;
      if (nextQty <= 0) {
        const copy = { ...state.items };
        delete copy[id];
        return { ...state, items: copy };
      }

      return {
        ...state,
        items: {
          ...state.items,
          [id]: { ...item, qty: nextQty },
        },
      };
    }

    case "REMOVE": {
      const { id } = action.payload;
      const copy = { ...state.items };
      delete copy[id];
      return { ...state, items: copy };
    }

    case "CLEAR":
      return { ...state, items: {} };

    default:
      return state;
  }
}

const initialState = { items: {} };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const cartItems = useMemo(() => Object.values(state.items), [state.items]);

  const totalQty = useMemo(
    () => cartItems.reduce((sum, it) => sum + it.qty, 0),
    [cartItems]
  );

  const totalCost = useMemo(
    () => cartItems.reduce((sum, it) => sum + it.qty * it.plant.price, 0),
    [cartItems]
  );

  const api = {
    cartItems,
    totalQty,
    totalCost,
    addToCart: (plant) => dispatch({ type: "ADD", payload: { plant } }),
    inc: (id) => dispatch({ type: "INC", payload: { id } }),
    dec: (id) => dispatch({ type: "DEC", payload: { id } }),
    remove: (id) => dispatch({ type: "REMOVE", payload: { id } }),
    clear: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
