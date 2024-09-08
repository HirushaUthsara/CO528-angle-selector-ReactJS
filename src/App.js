import React, { useState } from 'react';
import './App.css';

function App() {
  const [angle, setAngle] = useState(0);

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value)) value = 0;
    value = Math.min(Math.max(value, 0), 360); // Clamp between 0 and 360
    setAngle(value);
  };

  const handleSliderChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  const handleRadioChange = (e) => {
    setAngle(parseInt(e.target.value, 10));
  };

  return (
    <div className="App">
      <h1>Angle Selector</h1>

      {/* Angle Input */}
      <label htmlFor="angleInput">Angle:</label>
      <input
        type="number"
        id="angleInput"
        value={angle}
        min="0"
        max="360"
        onChange={handleInputChange}
      />

      {/* Angle Slider */}
      <div className="slider-container">
        <input
          type="range"
          id="angleSlider"
          min="0"
          max="360"
          value={angle}
          onChange={handleSliderChange}
          style={{ width: '500px' }} // Make slider wider
        />
      </div>

      {/* Radio Buttons */}
      <div className="radio-container">
        <label>
          <input
            type="radio"
            name="angleRadio"
            value="0"
            checked={angle === 0}
            onChange={handleRadioChange}
          />{' '}
          0°
        </label>
        <label>
          <input
            type="radio"
            name="angleRadio"
            value="45"
            checked={angle === 45}
            onChange={handleRadioChange}
          />{' '}
          45°
        </label>
        <label>
          <input
            type="radio"
            name="angleRadio"
            value="60"
            checked={angle === 60}
            onChange={handleRadioChange}
          />{' '}
          60°
        </label>
        <label>
          <input
            type="radio"
            name="angleRadio"
            value="90"
            checked={angle === 90}
            onChange={handleRadioChange}
          />{' '}
          90°
        </label>
        <label>
          <input
            type="radio"
            name="angleRadio"
            value="180"
            checked={angle === 180}
            onChange={handleRadioChange}
          />{' '}
          180°
        </label>
      </div>
    </div>
  );
}

export default App;
