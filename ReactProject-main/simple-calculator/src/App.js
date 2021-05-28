import React, { useState,useEffect,useRef } from 'react';
import './App.css';

function App() {
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
    <form>
      <input  className="form-control" type="text" value={result} ref={inputRef}/>
    </form>
      <div className="keypad">
        <button className="btn btn-info m-1" name="1" onClick={handleclick}>1</button>
        <button className="btn btn-info m-1" name="2" onClick={handleclick}>2</button>
        <button className="btn btn-info m-1" name="3" onClick={handleclick}>3</button>
        <button className="btn btn-info m-1"name="+" onClick={handleclick}>+</button>
        <button className="btn btn-info m-1"name="4" onClick={handleclick}>4</button>
        <button className="btn btn-info m-1"name="5" onClick={handleclick}>5</button>
        <button className="btn btn-info m-1"name="6" onClick={handleclick}>6</button>
        <button className="btn btn-info m-1"name="-" onClick={handleclick}>-</button>
        <button className="btn btn-info m-1"name="7" onClick={handleclick}>7</button>
        <button className="btn btn-info m-1"name="8" onClick={handleclick}>8</button>
        <button className="btn btn-info m-1"name="9" onClick={handleclick}>9</button>
        <button className="btn btn-info m-1"name="*" onClick={handleclick}>*</button>
        <button className="btn btn-info m-1"name="0" onClick={handleclick}>0</button>
        <button className="btn btn-info m-1"name="/" onClick={handleclick}>/</button>
        <button className="btn btn-info m-1"onClick={clear}>Clear</button>
        <button className="btn btn-info m-1"onClick={backspace}>Back</button>    
        <button className="btn btn-info m-1"id="result" onClick={calculate}>Result</button>
      </div>
    
    </div>
  );
}
export default App;