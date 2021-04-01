import React from 'react';
import reactDOM from 'react-dom'
import App from './App'
import { BrowserRouter} from "react-router-dom";

reactDOM.render(
    <BrowserRouter>
    <App/>
    </BrowserRouter>, document.getElementById("root"));




// import React from 'react';
// import reactDOM from 'react-dom';
// import './styles/style.css';
// import MainForm from './components/Step1'
// import Step1 from './components/Step1'
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import {Link} from 'react-router-dom';
// import './appbar';
// import ButtonAppBar from './appbar';


// class Index extends React.Component{
//     render(){
//         return(
//             <Router>
//                 <div className="mainApp">             
//                         <Switch>
//                             <Route path="/" exact component={Dashboard}/>
//                             <Route path="/new_Form" component={MainForm}/>
//                         </Switch>                                      
//                 </div>
//             </Router>
//         );
//     }    
// }

// const Dashboard=()=>{
//     return(
//     <div>   
//     <div align = "center"><img className="entryImg" src="/Images/xorai_logo.png"/></div>  

//     <div align="center" className="navButtons">
//         <ul className="navList">
//             <Link to ="/new_Form" className="newInspectLink">           
//                 <li className="btnNewIns">Start New Inspection</li>
//             </Link>    
//             <li className="btnPreIns">Previous Inspection</li>
//             <li className="btnTrain">Training Resources</li>
//             <li className="btnContact">Contact Us</li>
//         </ul>
//     </div>      
//     </div>    
        
       

    
           
//     );
// }


