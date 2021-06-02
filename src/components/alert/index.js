import React from "react";
import "./alert.scss";
export default function Alert({ text }) {
  return <div className="alert alert-danger">{text}</div>;
}
