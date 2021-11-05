import React from "react";
import "./Style.css";
const Title = ({ title, subtitle }) => {
  return (
    <div className="containertitle">
      <h3 className="titleglobal">{title}</h3>
      <p className="texttitleglobal">{subtitle}</p>
    </div>
  );
};

export default Title;
