document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById("submitInputButton");
    button.onclick = submitInput;
}, false);

function submitInput()
{
    var inputText = document.getElementById( "inputText" )
        .value
        .replace( /\n/g, ' ' );

    var numCharsResult = document.getElementById( "numCharsResult" ).value;

    var outputTextElement = document.getElementById( "outputText" );
    
    var numCharsLookBack = 3;

    var nGramDictionary = buildKGramDictionary( inputText, numCharsLookBack );
    
    var seed = inputText.substr( 0, numCharsLookBack );

    var resultString = seed;
    var currentWord = seed;

    for (var i = 0; i < numCharsResult - numCharsLookBack; i++ )
    {
        if ( getNextLetter( currentWord, nGramDictionary ) === null ){
            var randomIndex = Math.floor( Math.random() * ( inputText.length - numCharsLookBack ) );
            currentWord = inputText.substr( randomIndex, numCharsLookBack )
            resultString += currentWord;
            i += numCharsLookBack - 1;
        }
        else
        {
            var nextLetter = getNextLetter( currentWord, nGramDictionary );
            resultString += nextLetter;
            currentWord = currentWord.substr( 1 ) + nextLetter;
        }
    }

    outputTextElement.innerHTML = resultString;
}

function getNextLetter( currentWord, dictionary )
{
    if ( !( currentWord in dictionary ) ){
        return null;
    }

    var possibleLetters = dictionary[currentWord];
    var randomIndex = Math.floor( Math.random() * possibleLetters.length );
    return possibleLetters[randomIndex];
}

function buildKGramDictionary( input, numCharsLookBack ) 
{
    var kGramDictionary = {};
    for ( var i = 0; i < input.length - numCharsLookBack; i++)
    {
        var currentSubstring = "";
        for ( var j = 0; j < numCharsLookBack; j++ )
        {
            currentSubstring += input[i + j];
        }

        if ( !( currentSubstring in kGramDictionary ) ){
            kGramDictionary[currentSubstring] = [];
        }
            
        kGramDictionary[currentSubstring].push( input[i + numCharsLookBack] );
    }

    return kGramDictionary;
}