import React, { useState,useEffect,useRef } from 'react';
import './App.css';

function Calculator() {
  const [result,setResult]=useState("");
  const inputRef=useRef(null);
  useEffect(()=>inputRef.current.focus()); 
  
  function handleclick(e){
      setResult(result.concat(e.target.name));
  }
  function backspace(){
    setResult(result.slice(0,result.length-1))
  }
  function clear(){
    setResult("")
  }
  function calculate(){
    try{
      setResult(eval(result).toString());
    }
    catch(error){
      setResult("Error");
    }
  }
  return (
    
    <div className="calc-app">
      <div className="card card-body ofset align-center ml-1"  style={{
            marginTop: 50,
            marginLeft: 50,
            marginRight: 50,
            width: 300,
            textAlign: "center",
          }}>
    <form>

      <input className="form-control" type="text" value={result} ref={inputRef}/>
    </form>
    <div className="card card-body ofset align-center ml-1">
      <div className="keypad">
        <button className="btn btn-info m-1" name="1" onClick={handleclick}>1</button>
        <button className="btn btn-info m-1" name="2" onClick={handleclick}>2</button>
        <button className="btn btn-info m-1" name="3" onClick={handleclick}>3</button>
        <button className="btn btn-info m-1" name="+" onClick={handleclick}>+</button>
        <br/>
        <button className="btn btn-info m-1" name="4" onClick={handleclick}>4</button>
        <button className="btn btn-info m-1" name="5" onClick={handleclick}>5</button>
        <button className="btn btn-info m-1" name="6" onClick={handleclick}>6</button>
        <button className="btn btn-info m-1" name="-" onClick={handleclick}>-</button>
        <br/>
        <button className="btn btn-info m-1" name="7" onClick={handleclick}>7</button>
        <button className="btn btn-info m-1" name="8" onClick={handleclick}>8</button>
        <button className="btn btn-info m-1" name="9" onClick={handleclick}>9</button>
        <button className="btn btn-info m-1"name="*" onClick={handleclick}>*</button>
        <br/>
        <button className="btn btn-info m-2" name="0" onClick={handleclick}>0</button>
        <button className="btn btn-info m-2" name="/" onClick={handleclick}>/</button>
        <button className="btn btn-info m-2" onClick={clear}>Clear</button>
        <br/>
        <button className="btn btn-info m-3" onClick={backspace}>Back</button>    
        <button className="btn btn-info m-3" id="result" onClick={calculate}>Result</button>
      </div>
      </div>
      </div>
    </div>
  );
}
export default Calculator;