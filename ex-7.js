function isPalindrome(string) {
  let reverseWord = string.split("").reverse().join(""); 
  let resultCheck = reverseWord === string; 
return resultCheck; 
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false