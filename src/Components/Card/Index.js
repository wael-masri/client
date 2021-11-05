import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Card = ({ item }) => {
  let localpath = "http://localhost:5000/assets/videos/";

  return (
    <>
      <div className="container-fluid">
        <div className="carditem">
          <div style={{ height: "200px" }}>
            <video width="100%" height="100%" controls>
              <source src={localpath + item.url_link} type="video/mp4" />
            </video>
          </div>
          <div className="card_content">
            <h2 className="card_title">{item.name}</h2>
            <p className="card_body">{item.description}</p>
            <p className="card_body2">${item.price}</p>
            <Link to="/item" state={item} className="button">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
