#!/usr/bin/env node
import logic from '../src/index.js';

const brainPrime = () => {
  const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const correctAnswerFunc = () => {
    const result = [];
    const numb = Math.round(Math.random() * 100);
    const correctAnswer = numb % 2 === 0 ? 'no' : 'yes';

    result.push(numb, correctAnswer);
    return result;
  };

  logic(descriptionGame, correctAnswerFunc);
};
brainPrime();
