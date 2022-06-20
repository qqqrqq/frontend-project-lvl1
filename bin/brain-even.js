#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

let userName = greeting()

const startEvenGame = (userName) => {

    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    let score = 0

    do{
        const number = Math.round(Math.random()*100)
        let correctAnswer
        number % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no'
        console.log(`Question: ${number}`)
        const userAnswer = readlineSync.question(`Your answer: `)

        if(userAnswer === correctAnswer){
            console.log('Correct!')
            score++
            if(score === 3){
                console.log(`Congratulations, ${userName}!`)
                break
            }
        }
        else{
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`)
            console.log(`Let's try again ${userName}`)
            break
        }
    } while(score <= 3)
}

startEvenGame(userName)

export default startEvenGame