import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN, LOGOUT } from "../redux/actions";

//fake db
const users = [
  { email: "mohamed@instabug.com", password: "12345678A" },
  { email: "mohamed1@instabug.com", password: "12345678" },
  { email: "mohamed2@instabug.com", password: "12345678" },
  { email: "mohamed3@instabug.com", password: "12345678" },
  { email: "mohamed4@instabug.com", password: "12345678" },
  { email: "mohamed5@instabug.com", password: "12345678" },
  { email: "mohamed6@instabug.com", password: "12345678" },
  { email: "mohamed7@instabug.com", password: "12345678" },
];

export default function useAuth() {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const login = (email, password) => {
    //make api request here

    let exist = users.find((user) => user.email == email);

    if (!exist) {
      setError(true);
      return;
    }

    if (exist.password != password) {
      setError(true);
      return;
    }
    setError(false);
    dispatch({ type: LOGIN, payload: email });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    setError(false);
  };

  return { login, logout, error };
}
