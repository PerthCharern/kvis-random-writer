// Generate the results from the dictionary we have
// Please fill in the right expression in the blank below.

// Get a random starting point by getting a random subset from the original string
var seed = inputText.substr( 0, numCharsLookBack ); 

var resultString = seed;
var currentWord = seed;

for ( var i = 0; i < numCharsResult - numCharsLookBack; i++ )
{
    var nextLetter = getNextLetter( currentWord, nGramDictionary );
    resultString = resultString + ............. ; // What should go here?

    // Note that the substr( 1 ) returns a substring WITHOUT the first character.
    // For example, if currentWord is "bcde", currentWord.substr( 1 ) will be just "cde".
    currentWord = currentWord.substr( 1 ) + nextLetter;
}


