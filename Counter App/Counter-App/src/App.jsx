import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');


// Handling Increase Button
  function increaseBtn() {
    if (count < 40) {
      setCount(count => count + 1);
      setErrorMessage(" ");
    } else {
      setErrorMessage("You've reach the limit!");
    }
  }


  // Handling Decrease Button
function decreaseBtn() {
  if (count === 0) {
    setErrorMessage("You cant go below 0");
  } else {
    setCount(count => count - 1);
    setErrorMessage(" ");
  }
}
  
  
  return (
    <div className='container'>
      <div className="counter-content">
        <div className='head'>
          <h1>{count}</h1>

        {errorMessage && <p>{errorMessage}</p>}
        </div>

      <div className="btn">
        <button onClick={increaseBtn}>Increase</button>
        <button onClick={decreaseBtn}>Decrease</button>
      </div>
      </div>
    </div>
  )
}

export default App
