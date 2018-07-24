// Get Correct Letter from Dictionary's Array
// Please run this code with
// dictionary = { "ba" : ["b"], "ab": ["a", "c"], "bc": ["a"], "ca": ["b"] }
// currentWord = "ab"
// What are the possible results?

function getNextLetter( currentWord, dictionary )
{
    var possibleLetters = dictionary[currentWord];
    
    // Don't worry about the complicated math on this line.
    // What it does is return a random whole number between 0 to possibleLetters.length - 1 inclusive.
    var randomIndex = Math.floor( Math.random() * possibleLetters.length ); 

    return possibleLetters[randomIndex];
}