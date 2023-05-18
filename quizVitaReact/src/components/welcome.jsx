import React from 'react'
import './welcome.css'
import Quiz from"../img/img.svg"

import { useContext } from 'react';
import { QuizContext } from '../context/quiz';


const welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);  
    

  return (
    <div id='welcome'>
        <h2>  </h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() =>dispatch({type:"CHANGE_STATE"})}>
        Iniciar
        </button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default welcome