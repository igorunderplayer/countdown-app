import React, { useState } from 'react';
import './App.css'

import Countdown from './Components/Countdown'

const App: React.FC = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const [countdown, setCountdown] = useState(false)

  const [audio] = useState(new Audio('/impact.mp3'))

  const startCountdow = () => {
    setCountdown(true)
    const ms = (minutes * 60 * 1000) + (seconds * 1000);
    setTimeout(() => {
      setCountdown(false)
      audio.play()
      alert('Timeout!')
    }, ms)
  }

  return (
    <div className="App">
        <div className="Inputs">
          <input onChange={(e) => setMinutes(e.target.valueAsNumber)} type="number" name="" id="Minutes" value={minutes} />
          :
          <input onChange={(e) => setSeconds(e.target.valueAsNumber)} type="number" name="" id="Seconds" value={seconds} />
        </div>

        {countdown ? <Countdown count={(() => seconds + minutes * 60)()} /> : <button onClick={startCountdow}>Start countdown</button>}
      </div>
  );
}

export default App;
