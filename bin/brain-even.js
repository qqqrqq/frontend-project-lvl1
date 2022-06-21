#!/usr/bin/env node

import logic from '../src/index.js';

const startEvenGame = () => {
  const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

  const correctAnswerFunc = () => {
    const result = [];
    const number = Math.round(Math.random() * 100);

    const correctAnswer = number % 2 === 0
      ? 'yes'
      : 'no';
    const question = number;
    result.push(question, correctAnswer);
    return result;
  };

  logic(descriptionGame, correctAnswerFunc);
};

startEvenGame();

export default startEvenGame;
