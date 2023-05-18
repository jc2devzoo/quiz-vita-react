import {useContext} from 'react';
import { QuizContext } from '../context/quiz';

import "./Option.css";


const Options = ({option}) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className='Option'>
            <p>{option}</p>
        </div>
    )
}

export default Options