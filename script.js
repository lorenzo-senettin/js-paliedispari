// ask word
const userWord = prompt(`Inserisci la parola da verificare:`);
console.log(userWord);


//reverse word
function reverseWord(userWord) {
  let word = ``;
  for (let i = userWord.length - 1; i >= 0; i--) {
    const thisChar = userWord[i];
    word += thisChar;
  }
  return word;
}

const reversedWord = reverseWord(userWord);
console.log(reversedWord);
