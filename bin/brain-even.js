#!/usr/bin/env node

import greeting from '../src/cli.js';
import logic from '../src/index.js';

const startEvenGame = () => {
  const userName = greeting();
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

  const elements = [userName, correctAnswerFunc];
  logic(descriptionGame, elements);
};

startEvenGame();

export default startEvenGame;
