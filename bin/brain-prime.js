#!/usr/bin/env node
import logic from '../src/index.js';

const brainPrime = () => {
  const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const correctAnswerFunc = () => {
    const result = [];
    let count = 0;
    for (let i = 0; i < numb; i += 1) {
      if (numb % i === 0) {
        count += 1;
      }
    }

    const correctAnswer = count > 1 ? 'no' : 'yes';
    result.push(numb, correctAnswer);
    return result;
  };

  logic(descriptionGame, correctAnswerFunc);
};
brainPrime();
