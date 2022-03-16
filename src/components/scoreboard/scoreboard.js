import React, {useState} from 'react';
import './scoreboard.css'


export function Scoreboard(props){

    let scoreboard = (
        <div className='board'>
                <div className='boxes'></div>
                <div className='boxes scores'>Current Score: {props.currentScore}</div>
                <div className='boxes scores'>Best Score: {props.bestScore}</div>
                <div className='boxes'></div>

        </div>
    )
    return scoreboard;
}