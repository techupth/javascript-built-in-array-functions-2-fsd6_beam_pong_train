function isPalindrome(string) {
  // Start coding here
  return string.trim() === string.trim().split("").reverse().join("");
  // .trim() ช่วยให้เวลามี spacebar ด้านหน้าและหลัง ไม่มีผลกระทบ
}

//Example case
console.log(isPalindrome(" reviver ")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
