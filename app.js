"use strict"
let originalString = prompt("Enter a phrase","(here)")
let capitalizedWord = ""
for (var i = 0; originalString.length-1 >= i; i++){
  let char = originalString[i]
  if (i === 0) { capitalizedWord += char.toUpperCase() }  
  else if (originalString[i-1] === " ") { capitalizedWord += char.toUpperCase()}
  else	capitalizedWord += originalString[i];
  
}
alert(capitalizedWord)	


