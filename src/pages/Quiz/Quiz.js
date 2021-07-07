import { CircularProgress } from '@material-ui/core';
import React, {  useState , useEffect } from 'react';
import Questions from '../../components/Questions';
import './Quiz.css'


function Quiz({ name, questions, score, setScore }) {
    const [options, setOptions] = useState();
    const [currQuestion, setCurrQuestion] = useState(0);

    const handleSuffle = (optionss) => {    
      return optionss.sort(() => Math.random() -0.5);
      }
  
    useEffect(() => {
      setOptions(
        questions &&
          handleSuffle([
            questions[currQuestion]?.correct_answer,
            ...questions[currQuestion]?.incorrect_answers
          ])
      );
    }, [questions, currQuestion]);


    return (
      <div className='quiz'>
        <span className="subtitle">Welcome {name}</span>
        {questions ? (
          <>
            <div className="quizInfo">
                <span className='stats'>{questions[currQuestion].category}</span>
                <span className='stats'>Score: {score}</span>
            </div>

            <Questions 
                questions={questions}
                currQuestion={currQuestion}
                setCurrQuestion={setCurrQuestion}
                options={options}
                correct={questions[currQuestion]?.correct_answer}
                score={score}
                setScore={setScore}
            />
          </>
        ) : (
          <CircularProgress
            style={{ margin: 200 }}
            color="inherit"
            size={150}
            thickness={1}
          />
        )}
      </div>
    );
}

export default Quiz
