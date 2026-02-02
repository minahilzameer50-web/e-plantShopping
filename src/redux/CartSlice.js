const initialState = [];

export const addItem = (state, action) => {
  state.push(action.payload);
};

export const removeItem = (state, action) => {
  return state.filter(item => item.id !== action.payload);
};

export const updateQuantity = (state, action) => {
  const item = state.find(i => i.id === action.payload.id);
  if (item) item.quantity = action.payload.quantity;
};
