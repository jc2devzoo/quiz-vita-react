import React from 'react';
import "./GameOver.css";

import { useContext } from 'react';
import {QuizContext} from  "../context/quiz"

import Over from "../img/finish.svg";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id='GameOver'>
        <h2>Game Over</h2>
        <p>Pontuação: {quizState.score}</p>
      <p>Voce acertou {quizState.score} de {quizState.questions.length} perguntas</p>
        <img src={Over} alt="Fim  do Quiz " />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver