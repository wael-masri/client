import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

const Customitem = ({ item }) => {
  let localpath = "http://localhost:5000/assets/videos/";

  const singleitem = () => {
    if (item) {
      let single = item;
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <p className="headertext">
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Home
                </Link>{" "}
                - <span className="hashlabel">Item </span>
              </p>
            </div>
            <div className="col-md-6 div_vid">
              <video className="videosingle" controls>
                <source src={localpath + item.url_link} type="video/mp4" />
              </video>
            </div>
            <div
              className="col-md-6"
              style={{ background: "rgb(243, 242, 238)", textAlign: "center" }}
            >
              <h3 className="h3_single">{single.name}</h3>

              <p className="desc_single">{single.body_description}</p>

              <span className="new_price">${single.price}</span>
              <br />
              <br />
            </div>
          </div>
        </div>
      );
    } else {
      return <p> Please select your item to show here !</p>;
    }
  };

  return (
    <>
      <div className="container-fluid">{singleitem()}</div>
    </>
  );
};

export default Customitem;
