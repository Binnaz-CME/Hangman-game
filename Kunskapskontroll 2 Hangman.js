//  Array of words for game
const words = [
    "Afterwork",
    "Stockholm",
    "Studenter",
    "Programmering",
    "Javascript",
  ];

  // Numer of lives at start.
  let lives = 5;

  // Varje gång programmet startar så skall ett av dessa ord slumpartat väljas, vilket sedan spelet baserar sin gång på.
  function makeRandomPick(words) {
    return words[Math.floor(Math.random() * words.length)];
  }

  // Call the function makeRandomPick
  const randomWord = makeRandomPick(words).toLowerCase();
  console.log(randomWord);

  // Split element into array of characters
  const arrayOfCharacters = randomWord.split("");
  console.log(arrayOfCharacters);

  // Iterate every character and write (_) instead of letters, returns new array.
  const underscoredArr = arrayOfCharacters.map(() => "_");

  // Array for guesses made
  const invalidGuesses = [];

  // Declare userGuess
  let userGuess = "";

  // Regular expression tests if input is A-Z or a-z.
  let regex = new RegExp(/[a-z]/gi);

  // userGuess with prompt. Join (_) without (,).
  function promptUser() {
    userGuess = prompt(`${underscoredArr.join(" ")}
    
    Guess a letter!

    Lives left: ${lives}
    Guesses made: ${invalidGuesses}
    `);
    return userGuess;
  }

  // Checks if word has the guessed character returns boolean.
  function checkIfMatch() {
    userGuess = userGuess.toLowerCase(); // Makes userGuess to lowercase.
    const match = randomWord.toLowerCase().includes(userGuess);
    return match;
  }

  promptUser();

  do {

    if (userGuess === null) {
      break;
    }

    // RegExp tests if userGuess is a-z or A-Z and returns boolean.
    if (regex.test(userGuess)) { 
      // If checkIfMatch is true iterate and write out character att correct index. If false live lost and push character into invalidGuesses.
      if (checkIfMatch()) {
        for (let i = 0; i < randomWord.length; i++) {
          if (randomWord[i] === userGuess) {
            underscoredArr[i] = userGuess;
          }
        }
      } else {
        invalidGuesses.push(` ${userGuess}`); //
        lives--;
      }
    } else {
      promptUser(); // If userGuess is not a-z execute this code.
    }

  } while (lives !== 0 && underscoredArr.join("") !== randomWord);

  if (lives === 0) {
    alert(`You have lost, the correct word was ${randomWord}!`);
  } else if (underscoredArr.join("") === randomWord) {
    alert(`The correct word was ${randomWord}, congratulations!`);
  } else {
    alert("You have cancelled the game!");
  }