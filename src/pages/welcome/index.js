import { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
export default function Welcome() {
  const email = useSelector((state) => state.email);
  const { logout } = useAuth();

  useEffect(() => {
    document.title = "Welcome";
  }, []);

  return (
    <div>
      <h1>welcome, {email}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
