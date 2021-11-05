import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row inner_footer">
            <div className="col-md-12 ">
              <p className="copyright-text">
                Copyright &copy; 2021 All Rights Reserved by
                <Link
                  to="/"
                  target="_blank"
                  style={{ textDecoration: "none", color: "grey" }}
                >
                  {" "}
                  WAEL MASRI.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
