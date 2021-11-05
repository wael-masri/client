import React from "react";
import "./Style.css";

const Customabout = ({ datayolo }) => {
  return (
    <div className="container_about">
      <div className="container ">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="titleabout1">Our History</h3>
          </div>
          <div className="col-md-6">
            <p className="textabout1">{datayolo[0].descrption}</p>
          </div>
          <div className="col-md-6">
            <p className="textabout1">{datayolo[1].descrption}</p>
          </div>
          <div className="col-md-12 mt-5">
            <p className="textabout1">{datayolo[2].descrption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customabout;
