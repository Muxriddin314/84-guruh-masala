
function isLeapYear(year) {
    let result = null;
    if(year % 4 == 0 ){
      result = true
    }

    else if(year % 400 != 0) {
      result = false
    }
    else {
      result = false
    }
    return result
  }

