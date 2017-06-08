// Write a function lengths that accepts a single parameter as an argument,
// namely an array of strings. The function should return an array of numbers.
// Each number in the array should be the length of the corresponding string.
// To get you started, you'll need to loop through each string in the array
// and get the length of each one. Those lengths should be stored in a
// different array that you will return.+

// Remember that when building a function, you want to use declare a function
// with a name that accepts arguments. So for building our function called
// lengths that accepts an array of strings, it might look something like:

var newArray = []; //set up a new array where you want to store the values

function stringcount(arr) { //use the function name stringcount to call the function in the console
	for (var i = 0; i < arr.length; i++) {
		newArray.push(arr[i].length); //push the length of each string into newArray ex: stringcount(["hi"]) = 2
	}
};

//call the function in the console stringcount(["hi", "tom", "bill"]) then see the result type newArray + enter and will display [2,3,4]








// Write a Javascript function called transmogrifier This function should accept
// three arguments, which you can assume will be numbers. Your function should
// return the "transmogrified" result The transmogrified result of three numbers
// is the product (numbers multiplied together) of the first two numbers, raised
// to the power (exponentially) of the third number. For example, the
// transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
// Use your function to find the following answers. Reference: MDN: Math.pow()
// for Exponential numbers


function transmog(num1,num2,num3) {
	return Math.pow(num1*num2,num3);

};





// Write a function called toonify that takes two parameters, accent and
// sentence. If accent is the string "daffy", return a modified version of
// sentence with all "s" replaced with "th". If the accent is "elmer", replace
// all "r" with "w". Feel free to add your own accents as well! If the accent is
// not recognized, just return the sentence as-is. Reference: MDN:
// String.replace()
// str.replace('hello', 'hi')

	function toonify(accent,sentence) {
			for (var i = 0; i < sentence.length; i++) {
			if (accent === "daffy") {
				console.log(sentence.replace("s", "th"))
			} else if(accent === "elmer") {
				console.log(sentence.replace("r", "w"))
			}
		}
	};




// Write a function wordReverse that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't
// worry about punctuation. You'll need to use String.split() to create an array
// of words (splitting them with a space or " ". Then you'll need to reverse the
// order of that array using array.reverse(). Finally, you'll loop through them
// to create a new string).

var string = [];

	function wordReverse(arg){
		return string = arg.split(" ") //the .split takes a variable such as var colors = "blue red white" and splits them at the space which is why we use " "


	};


// Write a function letterReverse that accepts a single argument, a string. The
// function should maintain the order of words in the string but reverse the
// letters in each word. Don't worry about punctuation. This will be very similar
// to round 4 except you won't need to split them with a space. References: MDN:
// String.split() MDN: Array.reverse()

	function letterReverse(reverse) {

	};






	// Write a function longest that accepts a single argument, an array of
	// strings. The method should return the longest word in the array. In case
	// of a tie, the method should return the word that appears first in the
	// array.





	// Write a function, called repMaster, that accepts two arguments, input and
	// a function. Input should be able to be used with the function. The
	// function used as an argument must return a string. repMaster should take
	// the result of the string, passed as an argument to the argument function,
	// and return this result with ' proves that I am the rep MASTER!'
	// concatenated to it.




