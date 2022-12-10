function negativeNumber(array){
     let numbers = [];
     for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
          numbers.push(element) ;
        } 
     }
     return numbers
}

