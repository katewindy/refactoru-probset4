// Question 1: Write a function addNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns the sum. For example: if str is "88Hello 3World!" the output should be 91.

function addNumbers (str) {
	var strArray = str.split('');
	var processedArray = [];
	for (var i = 0; i < strArray.length; i++){
		if (isNaN(parseInt(strArray[i])) === false){
			var tempNumStr = strArray[i];
			for (var j = i+1; j < strArray.length; j++){
				if (isNaN(parseInt(strArray[j])) === false){
					tempNumStr = tempNumStr +strArray[j];
				}
				else
				{
					processedArray.push(tempNumStr);
					i = j;
					break;
				}
			}
		}
	}
	console.log(processedArray);
	var total = 0;
	for (i = 0; i < processedArray.length; i++){
		total = total + parseInt(processedArray[i]);
	}
	console.log(total);
	return total;
}

addNumbers("88Hello 3World!");

// Question 2: Write a function longestWord that takes a single string parameter and returns the largest word in the string. If there are two or more words that are the same length, it returns the first word from the string with that length. Ignore punctuation and assume the input sentence will not be empty.

function longestWord (str){
	var strArray = str.split(' ');
	console.log(strArray);
	var myLongestWord = '';
	for (var k = 0; k < strArray.length; k++){
		if ( strArray[k].length > myLongestWord.length)
			myLongestWord = strArray[k];

	}
	console.log(myLongestWord);
	return myLongestWord;
}

longestWord('my last name is Windheuser');
longestWord('the most remarkable thing about coming home to you is the feeling of being in motion again. its the most extrordinary feeling in the world.');

//Question 3 - BONUS: Write a function averageStringNumbers that takes a single string parameter and searches for all the numbers in the string, adds them together, then returns that final number divided by the total amount of letters in the string. For example: if str is "Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and the final answer should be rounded to the nearest whole number, so the answer is 2. Only single digit numbers separated by spaces will be used throughout the whole string (So this won't ever be the case: hello44444 world). Each string will also have at least one letter.

function averageStringNumbers (str){
	var strArray = str.split('');
	var numArray = [];
	var letterArray = [];
	for (var i = 0; i < strArray.length; i++){
		if (isNaN(parseInt(strArray[i])) === false){
			numArray.push(strArray[i]);
		}
		else {
			if (strArray[i] != ' '){
				letterArray.push(strArray[i]);
			}
		}
	}
	var subtotal = 0;
	for (i = 0; i < numArray.length; i++){
		subtotal = subtotal + parseInt(numArray[i]);
	}
	console.log(subtotal);
	var total = Math.round(subtotal / letterArray.length);
	console.log(total);
	return total;

}

averageStringNumbers("Hello6 9World 2 Nic8e D7ay");



































