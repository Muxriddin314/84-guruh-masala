
function isLeapYear(year) {
    let result = null;
    
    if(year % 400 != 0) {
      result = false
    }
    else if(year % 4 == 0 ){
      result = true
    }
    else {
      result = false
    }
    return result
  }

