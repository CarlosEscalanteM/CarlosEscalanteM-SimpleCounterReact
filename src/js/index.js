//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

// include your styles into the webpack bundle
import "../styles/index.css";


const SimpleCounter = (props) => {
    return (
        <div className="BigCounterContainer">
         <div className="Clock"><FontAwesomeIcon icon={faClock}/> </div>
         <div className="TenThousands">{props.digitFive%10} </div>
         <div className="Thousands">{props.digitFour%10} </div>
         <div className="Hundreds">{props.digitThree%10} </div>
         <div className="Tenths">{props.digitTwo%10} </div>
         <div className="Units">{props.digitOne%10} </div>
         <div className="Fatal-Text">Your time is near </div>
         </div>
        )
        }
    
SimpleCounter.PropTypes = {
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;
setInterval (function() {
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    counter++;
    console.log(one,two,three,four,five);
     //render your react application
ReactDOM.render(<SimpleCounter  digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five}  />, document.querySelector("#app")
);
},1000);

