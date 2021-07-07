import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Result from './pages/Result/Result';
import Quiz from './pages/Quiz/Quiz';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState(); //left undefined because setQuestion will provide the array
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category, difficulty) => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz" exact>
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path="/result" exact>
            <Result name ={name} score={score}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
