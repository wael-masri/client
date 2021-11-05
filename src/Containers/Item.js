import React from "react";
import Customitem from "../Components/Customitem/Index";
import { useLocation } from "react-router-dom";


const Item = () => {
    
  const location = useLocation();

  return (
    <div style={{ width: "100%", padding: "60px 0px" }}>
      <Customitem item={location.state} />
    </div>
  );
};

export default Item;
