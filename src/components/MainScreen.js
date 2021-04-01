import React from "react";
import reactDOM from "react-dom";
import "../styles/style.css";
import MainForm from "./Step1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Inspctn from '../components/Inspctn';

const Dashboard = () => {
  return (
    <div className="Main-container">
      <div align="center" className="header">
        <img className="entryImg" src="/Images/xorai_logo.png" />
      </div>

      <div align="center" className="navButtons">
        <ul className="navList">
          <Link to="/new_Form" className="Links">
            <li className="btnNewIns">Start New Inspection</li>
          </Link>
          <li className="Links">Previous Inspection</li>
          <li className="Links">Training Resources</li>
          <li className="Links">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

function MainScreen() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/new_Form" exact component={MainForm} />
          <Route path="/note" exact component={Inspctn} />
        </Switch>
      </>
    </Router>
  );
}

export default MainScreen;
