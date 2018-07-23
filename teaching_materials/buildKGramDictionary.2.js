// Code #2
// Please run this code with
// input = "abcabd"
// numCharsLookBack = 2

function buildKGramDictionary( input, numCharsLookBack ) 
{
   var kGramDictionary = {}; // Initialize kGramDictionary to an empty dictionary
   for ( var i = 0; i < input.length - numCharsLookBack; i++)
   {
       var currentSubstring = ""; // This is an empty string
       for ( var j = 0; j < numCharsLookBack; j++ )
       {
           ////////////////// Note the difference between this and Code #1 //////////////////
           currentSubstring = currentSubstring + input[j];
           //////////////////////////////////////////////////////////////////////////////////
       }

       if ( !( currentSubstring in kGramDictionary ) ){ // Checks if current substring is NOT in kGramDictionary 
           kGramDictionary[currentSubstring] = []; // [] means an empty array
       }
          
       kGramDictionary[currentSubstring].push( input[i + numCharsLookBack] ); 
   }

   return kGramDictionary;
}
