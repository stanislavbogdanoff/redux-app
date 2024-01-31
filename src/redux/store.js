import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import statusReducer from "./reducers/statusReducer";
import isEvenReducer from "./slices/isEvenSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    status: statusReducer,
    isEven: isEvenReducer,
  },
});

export default store;
