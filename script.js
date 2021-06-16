

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max + 1);
}

const peopleInOurGroup = 15;
const randomNumber = getRandomNumber(peopleInOurGroup);

document.getElementById('guessLabel').innerHTML = `Guess a number from 1 to ${peopleInOurGroup}: `;

document.getElementById('guessButton').addEventListener('click', function (){
    const theGuess = document.getElementById('theGuess').value;
    console.log(theGuess);

    if (Number(theGuess) === randomNumber) {
        document.write(`Awesome! You number ${theGuess} was correct. You can be named many things, hungry not being one of them.`)
    }
    else {
        document.write(`Bummer... You guessed ${theGuess} and the secret number was ${randomNumber}.`)
    }

})
