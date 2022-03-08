import React, { useState } from "react";

function First() {
    const [temp,setTemp] = useState([1])
  function CtoF(t) {
    var result = parseInt(t) * 1.88;
    var kelvin = parseInt(t) + 273;
    setTemp({
        fahrenheit: result,
        kelvin: kelvin
    })
  }
  return (
    <>
      <fieldset>
        <legend>Calculator</legend>
        <label>Temperature in Celsius </label>
        <input type="number" id="temperature" placeholder="25^c" onChange={()=>CtoF(document.getElementById('temperature').value)}></input>
        <div >
            <br></br>
            <label>Temperature in Fahrenheit :</label>
            <p>{temp.fahrenheit}</p>
            <label>Temperature in kelvin :</label>
            <p>{temp.kelvin}</p>
        </div>
      </fieldset>
    </>
  );
}

export default First;
