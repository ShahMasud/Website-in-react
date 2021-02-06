import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/img2.jpg";
import Common from "./Common";

const Home = () =>{
  return(
    <>
    <Common 
      name='Grow your hair style with'
      imgsrc={web}
      visit="/Service" 
      btname="Get Registered"
      />

    </>
  );



}
export default Home;