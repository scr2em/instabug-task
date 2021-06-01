import { LOGIN, LOGOUT } from "./actions";

const initialState = {
  // email: "asdasd@gmail.com",
  email: localStorage.getItem("email") || false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      localStorage.setItem("email", payload);
      return { ...state, email: payload };

    case LOGOUT:
      localStorage.removeItem("email");
      return { ...state, email: false };

    default:
      return state;
  }
};

export default rootReducer;
