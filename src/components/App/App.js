import "./App.css";
import React, { useState } from "react";
import { Scoreboard } from "../scoreboard/scoreboard";
import { Cards } from "../card/card";
import apple from "./images/apple.png";
import avocado from "./images/avocado.png";
import bananas from "./images/bananas.png";
import grapes from "./images/grapes.png";
import kiwi from "./images/kiwi.png";
import peach from "./images/peach.png";
import pear from "./images/pear.png";
import pineapple from "./images/pineapple.png";
import strawberry from "./images/strawberry.png";
import pomegranate from "./images/pomegranate.png";
import orange from "./images/orange.png";

function App() {
  const [fruit, setFruit] = useState([
    { fruit: apple, alt: "apple", id: 1 },
    { fruit: avocado, alt: "avocado", id: 2 },
    { fruit: bananas, alt: "bananas", id: 3 },
    { fruit: grapes, alt: "grapes", id: 4 },
    { fruit: kiwi, alt: "kiwi", id: 5 },
    { fruit: peach, alt: "peach", id: 6 },
    { fruit: pineapple, alt: "pineapple", id: 7 },
    { fruit: pear, alt: "pear", id: 8 },
    { fruit: strawberry, alt: "strawberry", id: 9 },
    { fruit: pomegranate, alt: "pomegranate", id: 10 },
    { fruit: orange, alt: "orange", id: 11 },
  ]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [fruitsClicked, setFruitsClicked] = useState([]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  const shuffleFruit = (e) => {
    let array = shuffleArray(fruit);
    setFruit(array);
  };
  const checkForBestScore = (score) => {
    if(bestScore < score){
      setBestScore(score);
      setFruitsClicked([]);
    }
  }

  const assignScore = (id) => {
    if(fruitsClicked.find(item => item === id) !== undefined){
      checkForBestScore(currentScore);
      setCurrentScore(0);
    }
    else if(fruitsClicked.find(item => item === id) === undefined){
      let newScore = currentScore + 1;
      setCurrentScore(newScore);
      let array = [...fruitsClicked, id];
      setFruitsClicked(array);
    }
  }


  return (
    <div className="main">
      <h1>Fruit Memory Game</h1>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <Cards fruit={fruit} handleClick={shuffleFruit} assignScore={assignScore} />
    </div>
  );
}

export default App;
