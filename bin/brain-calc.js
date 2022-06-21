#!/usr/bin/env node

import logic from '../src/index.js';

const brainCalc = () => {
  const descriptionGame = 'What is the result of the expression?';

  const correctAnswerFunc = () => {
    const result = [];
    const num1 = Math.round(Math.random() * 100);
    const num2 = Math.round(Math.random() * 100);
    const operationsArr = ['+', '-', '*'];
    const operation = operationsArr[Math.floor(Math.random() * operationsArr.length)];
    const question = `${num1} ${operation} ${num2}`;
    let correctAnswer;
    switch (operation) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        break;
    }
    result.push(question, correctAnswer);
    return result;
  };

  logic(descriptionGame, correctAnswerFunc);
};

brainCalc();
