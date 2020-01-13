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


function listPosition2(word) {
    var indexer = {}; // D:3 B:1 A:0 C:2
    var counts = []; // 2 1 1 1

    var lettersCount = 0;
    word.split("").sort().forEach(function(x){
        if ( indexer[x] == undefined ) {
            indexer[x] = lettersCount;
            counts[lettersCount] = 0;
            lettersCount ++;
        }
    });

    var term = 1;
    var sum = term;
    word.split("").reverse().forEach(function(x, i){
        var step = i + 1, idx = indexer[x];
        counts[idx] ++;
        term /= counts[idx];
        for (var j = 0; j < idx; ++j) 
            if (counts[j] != 0) 
                sum += term * counts[j];
        term *= step;
    });
    return sum;
}

console.time("e");
console.log(listPosition("QUESTION")) // 24572
console.log(listPosition("BOOKKEEPER")) // 10743

console.timeEnd("e");

console.time("e1");
console.log(listPosition2("QUESTION")) // 24572
console.log(listPosition2("BOOKKEEPER")) // 10743

console.timeEnd("e1");

















