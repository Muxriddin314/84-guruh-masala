function sort(array){
    let positiveSum = 0;
    let negativeSum = 0;
    let result = []
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > 0) {
            ++positiveSum
        } else if(element < 0) {
            negativeSum += element;
        }   
    }
    result.push(positiveSum,negativeSum)
    return result
}

