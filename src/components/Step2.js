import React from "react";
import reactDOM from "react-dom";
import Step1 from "./Step1";
import axios from "axios";
import {Link} from "react-router-dom";

export default class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Vehicle: {},
      Vehicle2: {},
      flag: 0,
      transmission: "",
      engine: "",
      drive: "",
      client: "",
      interior: "",
      exterior: "",
      door: "",
      postId : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  

  // http://localhost:5000/xorai_autox/test

  getAlert = () => {
    // Enter POST function here!!
    alert("this is the data" + this.state.Vehicle);
    var vehicle = { ...this.props.data1, ...this.state.Vehicle2 };
    this.setState({
      Vehicle: vehicle,
    });
  };
  changeFlag = () => {
    const { flag } = this.state;
    this.setState({
      flag: 1,
    });
  };

  handleTransmission = (event) => {
    this.setState({
      transmission: event.target.value,
    });
  };
  handleEngine = (event) => {
    this.setState({
      engine: event.target.value,
    });
  };

  handleDrive = (event) => {
    this.setState({
      drive: event.target.value,
    });
  };
  handleClient = (event) => {
    this.setState({
      client: event.target.value,
    });
  };
  handleInterior = (event) => {
    this.setState({
      interior: event.target.value,
    });
  };
  handleExterior = (event) => {
    this.setState({
      exterior: event.target.value,
    });
  };
  handleDoor = (event) => {
    this.setState({
      door: event.target.value,
    });
  };

  handleSubmit = () => {
      return <NoteScreen/>
  }
  handleChange = () => {
    const {
      transmission,
      engine,
      drive,
      client,
      interior,
      exterior,
      door,
    } = this.state;

    const vehicle2 = {
      transmission,
      engine,
      drive,
      client,
      interior,
      exterior,
      door,
    };
    this.setState({
      Vehicle2: vehicle2,
    });
  };

  /***post request***/

  submit = (e) => {
    e.preventDefault();
    const {Vehicle}= this.state
    console.log(Vehicle)
    // uncomment this if you have a valid endpoint to test with

    // var config = {
    //   method: "post",
    //   url: "http://localhost:5000/xorai_autox/post_string",
    //   // url: '{{host}}/api/inspections',
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   data: {
    //       data : Vehicle,
    //       id : 4
    //   }
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(response.data);
    //     console.log("data sent succesfully");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  


  render() {
    const { flag } = this.state;
    const { data1 } = this.props;
    var finalData = { ...data1, ...this.state.Vehicle2 };
    if (flag == 0) {
      return (
        // <Router>
          <div>
           {/*<div className="headerBlock">
              <div>
                <img
                  className="imgDiv"
                  onClick={this.changeFlag}
                  src="/Images/backIcon.png"
                />
              </div>
              <div className="headerText">
                <p id="innerText">NEW INSPECTION CONTINUED</p>
      </div>
      </div>*/}
            <form
              align="center"
              onChange={this.handleChange}
              onSubmit={this.submit}
            >
              <div className="formDiv">
                <label>Transmission: </label>
                <select
                  name="transmission"
                  id="selectTrans"
                  value={this.state.transmission}
                  onChange={this.handleTransmission}
                >
                  <option value="automatic">Automatic</option>
                  <option value="standard">Standard</option>
                  <option value="automated manual">Auttomated Manual</option>
                </select>
              </div>
              <div className="formDiv">
                <label>Engine : </label>
                <input
                  type="text"
                  value={this.state.Engine}
                  onChange={this.handleEngine}
                />
              </div>
              <div className="formDiv">
                <label>Drive Type : </label>
                <input
                  type="text"
                  value={this.state.drive}
                  onChange={this.handleDrive}
                />
              </div>
              <div className="formDiv">
                <label>Client Name: </label>
                <input
                  type="text"
                  value={this.state.client}
                  onChange={this.handleClient}
                />
              </div>
              <div className="formDiv">
                <label>Interior Color : </label>
                <input
                  type="text"
                  value={this.state.interior}
                  onChange={this.handleInterior}
                />
              </div>
              <div className="formDiv">
                <label>Exterior Color : </label>
                <input
                  type="text"
                  value={this.state.exterior}
                  onChange={this.handleExterior}
                />
              </div>
              <div className="formDiv">
                <label>Door Count : </label>
                <input
                  type="text"
                  value={this.state.door}
                  onChange={this.handleDoor}
                />
              </div>
              {/* this line combines the data from the two form */}
                <button
                  type="submit"
                  id="continueBtn"
                  onClick={() => {
                    this.handleSubmit;
                    this.setState({ Vehicle: finalData });
                    this.getAlert;
                  }}>
                  <Link className="linkstyle" to="/note">Enter Inspection Data</Link>
                </button>
            </form>
          </div>
        
      );
    } else {
      return <Step1 data1={this.state.Vehicle1} />;
    }
  }
}
