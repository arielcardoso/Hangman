import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hangman from './components/Hangman';
import Word from './components/Word';
import Letters from './components/Letters';
import Modal from './components/Modal';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';

import './App.css';

const words = [
  //{'question': 'What is the biggest country in the South America?', 'answer':'brazil'},
  {'question': 'What is the 2nd biggest country in the world?', 'answer':'canada'},
  //{'question': 'Province localized in the west cost of the Canada?', 'answer':'british columbia'}
];

let selectedQuestion = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [lost, setLoose] = useState(false);
  const [won, setWin] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        setLetter(key.toLowerCase());
      }
    }
    window.addEventListener('keydown', handleKeydown);
    checkGame();
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function checkGame() {
    if (checkWin(correctLetters, wrongLetters, selectedQuestion.answer) === 'win') {
      setPlayable(false);
      setWin(true);
    } else if (checkWin(correctLetters, wrongLetters, selectedQuestion.answer) === 'lose') {
      setPlayable(false);
      setLoose(true);
    } else {
      setPlayable(playable);
    }
  }

  function setLetter(letter){
    if (selectedQuestion.answer.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters(currentLetters => [...currentLetters, letter]);
      } else {
        show(setShowNotification);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters(currentLetters => [...currentLetters, letter]);
      } else {
        show(setShowNotification);
      }
    }
  }

  function playAgain() {
    setPlayable(true);
    setWin(false);
    setLoose(false);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedQuestion = words[random];
  }

  return (
    <>
      <div className="wrap" >
        <Header question={selectedQuestion.question} />
        <div className="hangman">
            <Hangman wrongLetters={wrongLetters} />
            <Word selectedWord={selectedQuestion.answer} correctLetters={correctLetters} />
        </div>
        <Letters correctLetters={correctLetters} wrongLetters={wrongLetters} setLetter={setLetter} />
        <Notification showNotification={showNotification} />
      </div>
      <Modal show={won} title="You WON!" text="Congratulations! You won! 😃" playAgain={playAgain} />
      <Modal show={lost} title="You LOST!" text={'Unfortunately you lost. 😕\nThe word was: ' + selectedQuestion.answer.toUpperCase() + "."} playAgain={playAgain} />
    </>
  );
}

export default App;
