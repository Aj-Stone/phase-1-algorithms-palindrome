function isPalindrome(word) {
  // const noUnd = word.split('').splice(0,9).join('')
  // console.log(noUnd)

  const lowerCase = word.toLowerCase()
  console.log(lowerCase)

  const backwards = lowerCase.split('').reverse().join('')
  console.log(backwards)

  return lowerCase === backwards
}

/* 
  Add your pseudocode here

  -takes in a string
  -makes sure its the same forward as it is backwards
  -returns true if it does
  -returns false if it isn't
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

console.log(isPalindrome('Hannah'))