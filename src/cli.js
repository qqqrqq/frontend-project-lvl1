
import readlineSync from 'readline-sync';

const callName = () => {
    const userName = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${userName}!`)
}


export default callName

