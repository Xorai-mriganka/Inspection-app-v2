import React from 'react';
import { Link } from 'react-router-dom';
import Step2 from './Step2';
import axios from 'axios';

class Step1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			
			Vehicle1 :{},
			flag: 0,
			inspectionDate: '',
			name: '',
			vin: '',
			year: '',
			make: '',
			model: '',
			shopId: '',
			vehicleId: '',
			technicianId: '',
			customerId: '',
			vehicleMileage: ''
		};
	}

	getAlert = () => {
		alert('Done');
	};

	/*Change flag in state in order to load forms*/
	changeFlag = () => {
		const { flag } = this.state;
		this.setState({
			flag: 1,
			Vehicle : {...this.props.data1,...this.state.Vehicle2}
		});
		console.log(this.state);

		let url="http://44.192.60.84:8080/api/inspections";
		let data=this.state.Vehicle1;
		fetch(url,{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body:JSON.stringify(data)
		}).then((result)=>{
			result.json().then((resp)=>{
				console.warn('resp',resp)
			})
		})
	};

	/*Handling date*/
	handleDateChange = (event) => {
		this.setState({
			inspectionDate: event.target.value,
		});
	};

	/*Handling Name*/
	handleNameChange = (event) => {
		this.setState({
			name: event.target.value,
		});
	};

	/*Handling VIN*/
	handleVINChange = (event) => {
		this.setState({
			vin: event.target.value,
		});
	};
	/*Handling Year*/
	handleYearChange = (event) => {
		this.setState({
			year: event.target.value,
		});
	};
	/*Handling Make*/
	handleMakeChange = (event) => {
		this.setState({
			make: event.target.value,
		});
	};
	/*Handling Model*/
	handleModelChange = (event) => {
		this.setState({
			model: event.target.value,
		});
	};

	goBack = () => {
		window.history.back();
	};

	/***POST REQUEST***/

	handleSubmit = (e) => {
		e.preventDefault();

		// const { inspectionDate, name, vin, year, make, model ,shopId ,vehicleId ,technicanId ,customerId ,vehicleMileage} = this.state;
		const {shopId ,vehicleId ,technicianId ,customerId ,vehicleMileage} = this.state;

		// const vehicle1 = {
		// 	inspectionDate,
		// 	name,
		// 	vin,
		// 	year,
		// 	make,
		// 	model,
		// 	shopId,
		// 	vehicleId,
		// 	technicanId,
		// 	customerId,
		// 	vehicleMileage
		// };
		const vehicle1 = {
			shopId,
			vehicleId,
			technicianId,
			customerId,
			vehicleMileage
		};
		
		this.setState({
			Vehicle1 : vehicle1,
		});
	
		
        /*
        //dummy data 
        
        var data = JSON.stringify({
			shopId: 501,
			vehicleId: 101,
			technicianId: 123,
			customerId: 124,
			vehicleMileage: 10000,
        });
        
        */
        
        // uncomment this if you have a valid endpoint to test with
		/*
		var config = {
			method: 'post',
			url: '{{host}}/api/inspections',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			data: Vehicle,
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
		*/
	};
	render() {
		const { flag} = this.state;
		if (flag == 0) {
			return (
				<div>
					<div className="headerBlock">
						<div>
							<img className="imgDiv" onClick={this.goBack} src="/Images/backIcon.png" />
						</div>
						<div className="headerText">
							<p id="innerText">NEW INSPECTION</p>
						</div>
					</div>
					<form align="center" onChange={this.handleSubmit}>
						<div className="formDiv">
							<label className="labels">Inspection Date: </label>
							<input type="date" value={this.state.inspectionDate} onChange={this.handleDateChange} />
						</div>
						<div className="formDiv">
							<label className="labels">Name : </label>
							<input type="text" value={this.state.name} onChange={this.handleNameChange} />
						</div>
						<div className="formDiv">
							<label className="labels">VIN : </label>
							<input type="text" value={this.state.vin} onChange={this.handleVINChange} />
						</div>
						<button id="vinBtn" type="button" onClick={this.getAlert}>
							Lookup VIN
						</button>
						<div className="formDiv">
							<label className="labels">Year: </label>
							<input type="text" value={this.state.year} onChange={this.handleYearChange} />
						</div>
						<div className="formDiv">
							<label className="labels">Make : </label>
							<input type="text" value={this.state.make} onChange={this.handleMakeChange} />
						</div>
						<div className="formDiv">
							<label className="labels">Model : </label>
							<input type="text" value={this.state.model} onChange={this.handleModelChange} />
						</div>

						<div className="formDiv">
							<label className="labels">ShopId : </label>
							<input type="text" value={this.state.shopId} name ="shopId" onChange={(event) => {this.setState({shopId: event.target.value})}}/>
						</div>
						<div className="formDiv">
							<label className="labels">VehicleId : </label>
							<input type="text" value={this.state.vehicleId} name ="vehicleId" onChange={(event) => {this.setState({vehicleId: event.target.value})}} />
						</div>
						<div className="formDiv">
							<label className="labels">TechnicanId : </label>
							<input type="text" value={this.state.technicianId} name ="technicianId" onChange={(event) => {this.setState({technicianId: event.target.value})}} />
						</div>
						<div className="formDiv">
							<label className="labels">CustomerId : </label>
							<input type="text" value={this.state.customerId} name ="customerId" onChange={(event) => {this.setState({customerId: event.target.value})}} />
						</div>
						<div className="formDiv">
							<label className="labels">VehicleMileage : </label>
							<input type="text" value={this.state.vehicleMileage} name ="vehicleMileage" onChange={(event) => {this.setState({vehicleMileage: event.target.value})}} />
						</div>

						<button type="button" id="continueBtn"  onClick={this.changeFlag}>
							CONTINUE
						</button>
					</form>
				</div>
			);
		} else {
			return <Step2 data1 ={this.state.Vehicle1}/>;
		}
	}
}
export default Step1