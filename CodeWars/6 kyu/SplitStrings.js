/*Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters
 then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str){
    const inputString = str;
    let result = [];
  
    for (let i = 0; i < inputString.length; i+=2) {
      result.push(`${inputString[i]}${ !!inputString[i+1] ? inputString[i+1] : '_' }`);
  
    }
    
    return result
  }