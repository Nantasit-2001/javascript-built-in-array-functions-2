function isPalindrome(string) {
  return string.split("").reverse().join("") === string ? true:false
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false