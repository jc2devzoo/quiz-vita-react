import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';

import './App.css'



function App() {
  const [quizStage, dispatch] = useContext(QuizContext);

  useEffect(() =>{
    dispatch({type:"REODER_QUESTIONS" });
  }, []);

  return (
    <div className='App'>
       <h1> QUIZ APP </h1>
        {quizStage.gameStage === "Start" && <Welcome/>}
        {quizStage.gameStage === "Playing" && <Question/>}
        {quizStage.gameStage ==="End" && <GameOver/>  }
    </div>
  )
}

export default App
