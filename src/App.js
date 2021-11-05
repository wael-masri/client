import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchdataitem } from "./Redux/Reduxitems/Fetchdataitems";
import { connect } from "react-redux";

//PAGES
import Home from "./Containers/Home";
import About from "./Containers/About";
import Footer from "./Components/Footer/Index";
import Navbar from "./Components/Navbar/Index";
import Item from "./Containers/Item";

const App = (props) => {
  //functin after running app
  useEffect(() => {
    props.fetchdataitem();
  }, [props]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/item" element={<Item />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default connect(null, { fetchdataitem })(App);
