import '../styles/style.css';
import Header from './Header/Header';
import Footer from "./Footer/Footer";
import React from 'react'
import Inspection from './Inspection/Inspection';


function Inspctn() {
  return (
    <div className="Inspctn">
      <Header/>
      <Inspection/>
      <Footer/>
    </div>
  )
}



export default Inspctn;
