import React from "react";
import Card from "../Card/Index";
import "./Style.css";
const Listofcards = ({ listitems }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {listitems.map((item, index) => {
          return (
            <div className="col-md-4 mt-4" key={index}>
              <Card item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listofcards;
