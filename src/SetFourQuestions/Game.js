import React, { useState } from 'react'

const Game = () => {
  const [lives, setLives] = useState(3);
  const decreaseLive = () => {
    setLives(() => (lives == 0) ? 0 : lives -1);
  }
  return (
    <div>
        <h1>Game</h1>
        <h2>Current Lives : {lives}</h2>
        <button
          onClick={decreaseLive}>
            Loose a life
        </button>
        {(lives === 0) && (<h4>Game Over</h4>)}
    </div>
  )
}

export default Game