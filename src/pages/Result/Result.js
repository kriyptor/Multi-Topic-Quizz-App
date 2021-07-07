import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Result.css'


function Result({ name, score }) {

    const history = useHistory();

    useEffect(() =>{
        if(!name){
            history.push('/')
        }
    }, [name, history])
    return (
        <div className='result'>
            <div className="title">{name} Your Final Score is : {score}</div>
            <Button
            variant='contained'
            color='secondary'
            size='large'
            style={{ alignSelf:'center', marginTop: 20}}
            href='/'
            >BACK TO HOME</Button>
        </div>
    )
}

export default Result
