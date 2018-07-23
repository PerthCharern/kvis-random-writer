var seed = inputText.substr( 0, numCharsLookBack );

var resultString = seed;
var currentWord = seed;

for ( var i = 0; i < numCharsResult - numCharsLookBack; i++ )
{
    var nextLetter = getNextLetter( currentWord, nGramDictionary );
    resultString +=   .............     ;
    currentWord = currentWord.substr( 1 ) + nextLetter;
}


