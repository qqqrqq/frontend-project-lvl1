#!/usr/bin/env node
import logic from '../src/index.js';

const brainGcd = () => {
  const descriptionGame = 'Find the greatest common divisor of given numbers.';

  const correctAnswerFunc = () => {
    const result = [];
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    const question = `${num1} ${num2}`;

    const gcd = (a, b) => {
      if (b > a) {
        return gcd(b, a);
      }
      if (b === 0) {
        return a;
      }
      return (gcd(b, a % b));
    };

    result.push(question, gcd(num1, num2));

    return result;
  };

  logic(descriptionGame, correctAnswerFunc);
};

brainGcd();
