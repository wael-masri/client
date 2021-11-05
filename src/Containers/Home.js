import React from "react";
import { connect } from "react-redux";
import Listofcards from "../Components/Listofcards/Index";
import Title from "../Components/Title/Index";


const Home = (props) => {
  
  
  return (
    <div style={{ width: "100%", padding: "60px 0px" }}>
      <Title
        title="new arrivals"
        subtitle="To drive integrity by being honest & transparent in every interaction."
      />
      <Listofcards {...props} />
    </div>
  );
};

export default connect((state) => {
  return {
    listitems: state.items.data,
  };
})(Home);
