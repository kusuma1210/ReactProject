import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increseTemperature = () => {
    if (temperatureValue === 30) return;
    const newtemperature = temperatureValue + 1;

    if (newtemperature >= 15) {
      setTemperatureColor("hot");
    }
    setTemperatureValue(newtemperature);
  };

  const decreseTemperature = () => {
    if (temperatureValue === 0) return;
    const newtemperature = temperatureValue - 1;

    if (newtemperature < 15) {
      setTemperatureColor("cold");
    }
    setTemperatureValue(newtemperature);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increseTemperature()}>+</button>
        <button onClick={() => decreseTemperature()}>-</button>
      </div>
    </div>
  );
};

export default App;
