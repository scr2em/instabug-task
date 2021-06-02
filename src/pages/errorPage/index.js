import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./errorPage.scss";
export default function ErrorPage() {
  useEffect(() => {
    document.title = "Page not found";
  }, []);

  return (
    <div className="error-container">
      <img src="/images/errorPage/404@2x.png" className="" />

      <h1 className="error-header">404 - Page Not Found!</h1>

      <p className="error-message">
        Sorry, that page doesn't exist. What would you like to do?
      </p>
      <Link to="/">back home</Link>
    </div>
  );
}
