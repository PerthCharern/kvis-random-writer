function getNextLetter( currentWord, dictionary )
{
   var possibleLetters = dictionary[currentWord];
   var randomIndex = Math.floor( Math.random() * possibleLetters.length );
   return possibleLetters[randomIndex];
}
