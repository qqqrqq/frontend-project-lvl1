import readlineSync from 'readline-sync';

const logic = (descriptionGame, elements) => {
  console.log(descriptionGame);
  const [userName, operation] = elements;

  let score = 0;
  do {
    const date = operation();
    const [question, correctAnswer] = date;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
      score += 1;
      if (score === 3) {
        console.log(`Congratulations, ${userName}!`);
        break;
      }
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again ${userName}`);
      break;
    }
  } while (score <= 3);
};

export default logic;
