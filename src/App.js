import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import useAuth from "./hooks/useAuth";
import ErrorPage from "./pages/errorPage/index.js";
import LoginPage from "./pages/login/index.js";
import WelcomePage from "./pages/welcome/index.js";

function App() {
  return (
    <Router>
      <Switch>
        // For authenticated users
        <PrivateRoute exact path="/">
          <WelcomePage />
        </PrivateRoute>
        // Not for authenticated users
        <NotForAuthenticated path="/login">
          <LoginPage />
        </NotForAuthenticated>
        // Public
        <Route path="/404">
          <ErrorPage />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;

function PrivateRoute({ children, ...rest }) {
  const email = useSelector((state) => state.email);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function NotForAuthenticated({ children, ...rest }) {
  const email = useSelector((state) => state.email);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        email ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}
