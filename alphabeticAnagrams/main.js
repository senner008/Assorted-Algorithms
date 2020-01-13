function listPosition(word) {

    function recursive(arr, counter) {

        var sortedArr = arr.slice(counter).sort();

        if (!sortedArr.length) return 0;

        var indexOfChar = sortedArr.indexOf(word[counter++]);
        
        return ((factorial(sortedArr.length - 1) * indexOfChar) / factorialOfEqualMultiplied(sortedArr)) + recursive(wordArr, counter);
    }

    const wordArr = word.split("");

    return recursive(wordArr, 0) + 1;

}

const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

function factorialOfEqualMultiplied(arr) {

    var obj = {};

    arr.forEach(n => {
        obj[n] = !obj.hasOwnProperty(n) ? 1 : obj[n] + 1;
    })

    var returnSum = 1;
    for ( let o in obj) {
        returnSum *= factorial(obj[o]);
    }
    return returnSum;
}


console.log(listPosition("QUESTION")) // 24572
console.log(listPosition("BOOKKEEPER")) // 10743



















