document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById("submitInputButton");
    button.onclick = submitInput;
}, false);


function submitInput()
{
    var inputText = document.getElementById("inputText").value.replace(/\n/g, ' ');
    var numCharsResult = document.getElementById("numCharsResult").value;


    var outputTextElement = document.getElementById("outputText");
    
    var gramNumber = 3;

    var nGramDictionary = buildNGramDictionary(inputText, gramNumber);
    
    var seed = inputText.substr(0, gramNumber);

    var resultString = seed;
    var currentWord = seed;

    for (var i = gramNumber; i < numCharsResult; i++ )
    {
        if ( getNextLetter(currentWord, nGramDictionary) === null ){
            var randomIndex = Math.floor(Math.random() * ( inputText.length - gramNumber ) );
            currentWord = inputText.substr(randomIndex, gramNumber)
            resultString += currentWord;
            i += gramNumber - 1;
        }
        else
        {
            var nextLetter = getNextLetter(currentWord, nGramDictionary);
            resultString += nextLetter;
            currentWord = currentWord.substr(1) + nextLetter;
        }
    }

    outputTextElement.innerHTML = resultString;
    console.log(nGramDictionary);
}

function getNextLetter(currentWord, dictionary)
{
    if ( !( currentWord in dictionary ) ){
        return null;
    }

    var possibleLetters = dictionary[currentWord];
    var randomIndex = Math.floor(Math.random() * possibleLetters.length);
    return possibleLetters[randomIndex];
}

function buildNGramDictionary(input, n) 
{
    var nGramDictionary = {};
    for ( var i = 0; i < input.length - n; i++)
    {
        var currentSubstring = "";
        for ( var j = 0; j < n; j++ )
        {
            currentSubstring += input[i + j];
        }

        // console.log(currentSubstring);

        if (!(currentSubstring in nGramDictionary)){
            nGramDictionary[currentSubstring] = [];
        }
            
        nGramDictionary[currentSubstring].push(input[i+n]);

        // console.log(nGramDictionary);
    }

    return nGramDictionary;
}