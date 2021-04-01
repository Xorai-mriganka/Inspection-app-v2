import React from "react";
import reactDOM from "react-dom";
import Step1 from "./Step1";
import axios from "axios";

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
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.handlsubmit.bind(this);
    this.getAlert = this.getAlert.bind(this);
    this.changeFlag = this.changeFlag.bind(this);
  }

  getAlert = () => {
    // Enter POST function here!!
    alert("this is the data" + this.state.Vehicle);
    var vehicle = { ...this.props.data1, ...this.state.Vehicle2 };
    this.setState({
      Vehicle: vehicle,
    });
    console.log(Vehicle);
  };
  changeFlag = () => {
    const { flag } = this.state;
    this.setState({
      flag: 1,
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
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
    const { Vehicle } = this.state;
    console.log(Vehicle);
    // uncomment this if you have a valid endpoint to test with

    var config = {
      method: "post",
      url: "http://localhost:5000/xorai_autox/post_string",
      // url: '{{host}}/api/inspections',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        data: Vehicle,
        id: 3,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        console.log("data sent succesfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  
  render() {
    const { flag } = this.state;
    const { data1 } = this.props;
    var finalData = { ...data1, ...this.state.Vehicle2 };
    if (flag == 0) {
      return (
        <div>
          <div className="headerBlock">
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
          </div>
          <form align="center" onChange={this.handleSubmit} onSubmit={this.submit}>
            <div className="formDiv">
              <label>Transmission: </label>
              <select
                name="transmission"
                id="selectTrans"
                value={this.state.transmission}
                onChange={this.handleChange}
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
                onChange={this.handleChange}
              />
            </div>
            <div className="formDiv">
              <label>Drive Type : </label>
              <input
                type="text"
                value={this.state.drive}
                onChange={this.handleChange}
              />
            </div>
            <div className="formDiv">
              <label>Client Name: </label>
              <input
                type="text"
                value={this.state.client}
                onChange={this.handleChange}
              />
            </div>
            <div className="formDiv">
              <label>Interior Color : </label>
              <input
                type="text"
                value={this.state.interior}
                onChange={this.handleChange}
              />
            </div>
            <div className="formDiv">
              <label>Exterior Color : </label>
              <input
                type="text"
                value={this.state.exterior}
                onChange={this.handleChange}
              />
            </div>
            <div className="formDiv">
              <label>Door Count : </label>
              <input
                type="text"
                value={this.state.door}
                onChange={this.handleChange}
              />
            </div>
            {/* this line combines the data from the two form */}
            <button
              type="reset"
              id="continueBtn"
              onClick={() => {
                this.setState({ Vehicle: finalData });
                this.getAlert;
              }}
            >
              Enter Inspection Data
            </button>
          </form>
        </div>
      );
    } else {
      return <Step1 data1={this.state.Vehicle1} />;
    }
  }
}
