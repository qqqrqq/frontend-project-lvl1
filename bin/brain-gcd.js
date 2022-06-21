#!/usr/bin/env node
import logic from '../src/index.js';

const brainGcd = () => {
  const descriptionGame = 'Find the greatest common divisor of given numbers.';

  const correctAnswerFunc = () => {
    const result = [];
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    const question = `${num1} ${num2}`;
    let gcd = 0;
    for (let i = 1; i <= num1; i += 1) {
      if (num1 % i === 0) {
        for (let j = 1; j <= num2; j += 1) {
          if (num2 % j === 0 && j === i && gcd < j) {
            gcd = j;
          }
        }
      }
    }

    result.push(question, gcd);

    return result;
  };

  logic(descriptionGame, correctAnswerFunc);
};

brainGcd();
