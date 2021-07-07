import React, { useState } from 'react'
import { TextField, MenuItem , Button } from '@material-ui/core';
import './Home.css'
import Categories from '../../Data/Categories';
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';
function Home({ name, setName, fetchQuestions }) {
    
    const [category, setCategory] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [error, setError] = useState(false);

    const history = useHistory();
    
    const handleSubmit = () => {
        if(!category || !difficulty || !name ){
            setError(true);
            return
        }
        else{
            setError(false);
            fetchQuestions(category, difficulty);
            history.push('/quiz');
        }
    }
    
    return (
      <div className="content">
        <div className="settings">
          <span style={{ fontSize: 30 , color: '#3F53B5', fontWeight: 'bold'}}>Quiz Settings</span>
          <div className="settings-selects">
              {error && <ErrorMessage>Please Fill All The Feilds</ErrorMessage>}
            <TextField
              label="Enter Your Name"
              variant="outlined"
              style={{ marginBottom: 25 }}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              select
              label="Select Category"
              variant="outlined"
              style={{ marginBottom: 25 }}
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select Difficulty"
              variant="outlined"
              style={{ marginBottom: 25 }}
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            <Button variant="contained" size="large" color="primary" onClick={handleSubmit}>
              START QUIZ
            </Button>
          </div>
        </div>
      </div>
    );
}

export default Home
