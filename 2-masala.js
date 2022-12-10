
function isPalindrome(x) {
    let word = x.toString()
    let toArray = word.split("")
    let arrayReverse = toArray.reverse()
    let result = arrayReverse.join("")
    if(x == Number(result)){
      return true
    }else {
      return false
    }
  }

 
