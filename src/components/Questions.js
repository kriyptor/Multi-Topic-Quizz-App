import React, { useState } from 'react'
import ErrorMessage from './ErrorMessage';
import { Button } from '@material-ui/core';
import './Question.css';
import { useHistory } from 'react-router-dom';

function Questions({  currQuestion, setCurrQuestion, options, score, setScore,  correct, questions}) {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const handleSelect = (opt) => {           
        if(selected === opt && selected === correct){
            return 'select';
        }
        else if(selected === opt && selected !== correct){
            return 'wrong';
        }
        else if(opt === correct){
            return 'select';
        }
    }

    const handleCheck = (opt) => {
        setSelected(opt);
        if( opt === correct){
            setScore(score+1);
        }
        setError(false);
    }
    
    const history = useHistory();

    const handleNext = () => {
        if(currQuestion > 8){
            history.push('/result')
        }
        else if(selected){
            setCurrQuestion(currQuestion +1);
            setSelected();
        }
        else{
            setError('Please Select an option')
        }
    }
    
    

    return (
      <div className="question">
        <h1>Question: {currQuestion + 1}</h1>
        <div className="singleQuestion">
          <h2>Q: {questions[currQuestion].question}</h2>
          <div className="options">
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {options &&
              options.map((opt) => (
                <button
                  onClick={() => handleCheck(opt)}
                  className={`singleOption ${selected && handleSelect(opt)}`}
                  key={opt}
                  disabled={selected}
                >
                  {opt}
                </button>
              ))}
          </div>
          <div className="controls">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{ width: 185 }}
              href="/"
              //onClick={() => handleQuit()}
            >
              Quit
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: 185 }}
              onClick={handleNext}
            >
              NEXT QUESTION
            </Button>
          </div>
        </div>
      </div>
    );
}

export default Questions
