import React from "react";
import "./App.css";
import { useState } from "react";


function App() {
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi,setBmi] = useState('');
  const [message,setMessage] = useState(''); 

  const reset = () => {
    window.location.reload();
  }

const calBmi = (e) => {
    e.preventDefault();
    if(weight === 0 || height === 0){
      alert('Please enter a valid value')
    }
    else{
      let bmi = (weight/(height*height)*703);
      setBmi(bmi.toFixed(1));
      if(bmi<25){
        setMessage("You are under-weight");
      }
      else if(bmi>= 25 && bmi<30){
        setMessage("You are healthy person");
      }
      else{
        setMessage("You are over-weight");
      }
    }
}


  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={(e) => calBmi(e)}>
          <div>
            <label>Weight(lbs)</label>
            <input
              type="text"
              placeholder="Enter your weight here"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(in)</label>
            <input
              type="text"
              placeholder="Enter your height here"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn" type="submit" onClick={() => reset()}>
              Reset
            </button>
          </div>
          <div className="message">
            <h3>Your BMI is : {bmi} </h3>
            <p>You are underweight : {message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
