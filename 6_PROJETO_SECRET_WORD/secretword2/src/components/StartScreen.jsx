import React from 'react'
import "./StartScreen.css";

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h2>Secret word</h2>
        <p>Clique no botão abaixo para começar a jogar </p>
        <button onClick={startGame}>começar o jogo</button>

    </div>
  )
}

export default StartScreen