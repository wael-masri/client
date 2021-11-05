import React from "react";
import Customabout from "../Components/Customabout/Index";
import Title from "../Components/Title/Index";
import { connect } from "react-redux";

const About = (props) => {
 
 
  return (
    <div style={{ width: "100%", padding: "60px 0px" }}>
      <Title
        title="Our about"
        subtitle="To drive integrity by being honest & transparent in every interaction."
      />
      <Customabout datayolo={props.datayolo} />
    </div>
  );
};

export default connect((state) => {
  return {
    datayolo: state.datayolo,
  };
})(About);
