let originalString = prompt("Enter a phrase","(here)")
let capitalizedWord = ""
for (var i = originalString.length - 1; i >= 0; i--) {
	if originalString[i] == " " {
		capitalizedWord.push(originalstring[i]);
		capitalizedWord[i + 1].toUpperCase();
	}
	else {
		capitalizedWord.push(originalstring[i]);
	}


