import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const { login } = useAuth();

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <form>
      <div style={{ padding: 20 }}>
        <label htmlFor="email" style={{ display: "block" }}>
          email
        </label>
        <input type="email" id="email" />

        <label htmlFor="password" style={{ display: "block" }}>
          password
        </label>
        <input type="password" id="password" />

        <label htmlFor="rememberMe" style={{ display: "block" }}>
          remember me
        </label>
        <input type="checkbox" id="rememberMe" />

        <button style={{ display: "block" }}>submit</button>
      </div>
    </form>
    // <div>
    //   login page
    //   <button onClick={() => login("mohamed@gmail.com")}>login</button>
    // </div>
  );
}
