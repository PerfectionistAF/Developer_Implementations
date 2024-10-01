function startGame() { 
    const magicNumber = Math.floor(Math.random() * 10) + 1;
          const username = prompt("Welcome! What's your name?");
          const userGuess = prompt(
`Hi ${username}! Let's play a game. I'm thinking of a number between 1 and 10. What's your guess?`
);
          const guessedNumber = parseInt(userGuess);
          
          if (guessedNumber === magicNumber) {
// If the guess is correct, congratulate the user
console.log(
  `Congratulations, ${username}! You guessed the correct number: ${magicNumber}.`
);
alert(`Well done, ${username}! You guessed the magic number!`);
} else {
// If the guess is incorrect, reveal the correct number
console.log(
  `Sorry, ${username}. The correct number was ${magicNumber}. Better luck next time!`
);
alert(`Oops! The magic number was ${magicNumber}. Try again next time!`);
}
  }