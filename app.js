// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var prograd1 = "vamsi";
document.write("The driver's name is " + prograd1);
/*console.log("The driver's name is " + prograd1); */

var prograd2 = "depp";
document.write("The navigator's name is " + prograd1);
/* console.log("The navigators's name is " + prograd2); */

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var driverName = "ProGrad";

var navigatorName = "faceprep";

if (driverName.length > navigatorName.length) {
  document.write(
    "The Driver  has the longest name, it has " +
      driverName.length +
      " characters"
  );
  /* console.log("The Driver  has the longest name, it has " + driverName.length + " characters"); */
} else if (navigatorName.length > driverName.length) {
  document.write(
    "The Navigator  has the longest name, it has " +
      navigatorName.length +
      " characters"
  );
  /* console.log("The Navigator  has the longest name, it has " + navigatorName.length + " characters"); */
} else {
  console.log(
    "They both have equally long names, " + driverName.length + " characters!"
  );
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.

function Vowels(string) {
  var listOfVowels = "aAeEiIoOuU";
  var vowelsCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (listOfVowels.indexOf(string[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
document.write(Vowels.indexOf(vowelsCount));

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

let driverName = "ProGrad";

let result = driverName.toUpperCase();

console.log(result.split(""));

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"

let navigatorName = "ProGrad";
let result = navigatorName.split("").reverse().join("");
console.log(result);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

let string1 = "ProGrad";
let string2 = "FACEPrep";

console.log(string2.concat(" ", string1));

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
