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


// check palindrome
function isPalindrome(userWord, reversedWord) {
  if (userWord.toLowerCase() === reversedWord.toLowerCase()) {
    console.log(`La parola è palindroma!`);
  } else {
    console.log(`La parola non è palindroma!`);
  }
}
isPalindrome(userWord, reversedWord);