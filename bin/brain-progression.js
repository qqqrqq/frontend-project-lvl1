#!/usr/bin/env node

import logic from '../src/index.js';

const brainProgression = () => {
  const descriptionGame = 'What number is missing in the progression?';

  const correctAnswerFunc = () => {
    const result = [];

    const range = Math.round(Math.random() * (10 - 5)) + 5;
    const step = Math.round(Math.random() * (10 - 1)) + 1;
    const firstEl = Math.round(Math.random() * 100);
    const elForHidden = Math.round(Math.random() * range);
    const arrayEl = [];
    arrayEl.push(firstEl);

    for (let i = 1; i < range; i += 1) {
      const createEl = arrayEl[i - 1] + step;
      arrayEl.push(createEl);
    }
    const hiddenNumb = arrayEl[elForHidden];
    arrayEl[elForHidden] = '..';
    const question = arrayEl.join(' ');
    result.push(question, hiddenNumb);

    return result;
  };
  logic(descriptionGame, correctAnswerFunc);
};

brainProgression();
