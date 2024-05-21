function isPalindrome(string) {
  // Start coding here
  let wordContainer = string;
  let revWord = wordContainer.split("").reverse().join("");
  return string === revWord;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
