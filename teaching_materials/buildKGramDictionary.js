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
