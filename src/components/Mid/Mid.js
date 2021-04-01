import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./mid.css";
import * as ReactBootStrap from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding:"1rem 0",
    textAlign: "center",
    display:"grid",
    placeItems:"center"
  },
  heading: {
    fontSize: theme.typography.pxToRem(30),
    fontWeight: theme.typography.fontWeightRegular,
    textAlign:'center',
    letterSpacing:theme.spacing(1)
  },
  title:{
    display: 'flex',
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center'
  }
}));

export default function Mid(props) {
  const classes = useStyles();
   const [expanded, setExpanded] = React.useState(false);

   const handleChange = (panel) => (event, newExpanded) => {
     setExpanded(newExpanded ? panel : false);
   };

  return (
    <div className={classes.root}>
      <Accordion
        square
        expanded={expanded === true}
        onChange={handleChange(true)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            {props.sectionname}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.title}>
          <div className="mid">
            <h2>{props.sectionname} AREA</h2>
            <ReactBootStrap.Table className="table">
              <thead className="table container">
                {props.children}
              </thead>
            </ReactBootStrap.Table>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
// const Mid = (props) => {
// return (
//   <div className="mid">
//     <h2>{props.sectionname}</h2>
//     <ReactBootStrap.Table className="table">
//       <thead className="table container">
//         <GridExternal/>
//       </thead>
//     </ReactBootStrap.Table>
//   </div>
// );
// }
// export default Mid;