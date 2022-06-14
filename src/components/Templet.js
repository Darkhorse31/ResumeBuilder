import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const Templet = () => {
  const wdata = useSelector((state) => state);

  useEffect(() => {
    console.log("This is");
  }, []);

  return <div>Templet</div>;
};

export default Templet;
