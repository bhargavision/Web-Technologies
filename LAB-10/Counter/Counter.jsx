import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  // State initialization with default value (0)
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Increment handler
  const increment = () => {
    setCount(prevCount => prevCount + step);
  };

  // Decrement handler
  const decrement = () => {
    setCount(prevCount => prevCount - step);
  };

  // Reset handler
  const reset = () => {
    setCount(0);
  };

  // Step handlers
  const increaseStep = () => setStep(prev => prev + 1);
  const decreaseStep = () => setStep(prev => Math.max(1, prev - 1));

  // Get color based on count
  const getCountColor = (value) => {
    if (value >= 50) return '#27ae60';
    if (value >= 0) return '#3498db';
    return '#e74c3c';
  };

  return (
    <div className="counter-app">
      <header className="counter-header">
        <h1>🔢 Smart Counter</h1>
        <p>Click buttons to interact with the counter</p>
      </header>
{/* Main Counter Display */}
      <div className="counter-display">
        <div 
          className="count-number" 
          style={{ 
            color: getCountColor(count),
            background: linear-gradient(135deg, ${getCountColor(count)}20 0%, ${getCountColor(count)}40 100%)
          }}
        >
          {count}
        </div>
        <div className="count-label">Current Value</div>
      </div>

      {/* Main Controls */}
      <div className="main-controls">
        <button 
          className="control-btn decrement"
          onClick={decrement}
          aria-label="Decrease counter"
        >
          ➖
        </button>
        
        <button 
          className="control-btn reset"
          onClick={reset}
          aria-label="Reset counter"
        >
          🔄 Reset
        </button>
        
        <button 
          className="control-btn increment"
          onClick={increment}
          aria-label="Increase counter"
        >
          ➕
        </button>
      </div>

      {/* Step Controls */}
      <div className="step-controls">
        <div className="step-info">
          <span>Step Size:</span>
          <strong>{step}</strong>
        </div>
        
        <div className="step-buttons">
          <button 
            className="step-btn"
            onClick={decreaseStep}
            disabled={step <= 1}
          >
            ➖
          </button>
          <button className="step-btn" onClick={increaseStep}>
            ➕
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="stats">
        <div className="stat-item">
          <span>Positive Changes:</span>
          <strong>{Math.max(0, count)}</strong>
        </div>
        <div className="stat-item">
          <span>Negative Changes:</span>
          <strong>{Math.min(0, count)}</strong>
        </div>
      </div>
    </div>
  );
};

export default Counter;