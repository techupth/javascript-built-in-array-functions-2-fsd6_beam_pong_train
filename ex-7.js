function isPalindrome(string) {
  // Start coding here
  let normalText = string;
  let reverseText = string.split("").reverse().join("");
  if (reverseText === normalText) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
