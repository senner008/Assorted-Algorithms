function listPosition(word) {

    var counter = 0;
    var indexSum = 0;

    function rec(arr) {

        if (arr.length === 0 ) return;

        // console.log(countDuplicates(arr))

        var indexOfChar = arr.indexOf(word[counter++]);

        indexSum += (factorial(arr.length - 1) * indexOfChar) / countDuplicates(arr);

        rec(word.split("").slice(counter).sort());

    }

    rec(word.split("").slice(counter).sort())
    return indexSum + 1;

}


function factorial (n) {

    if (n === 1) {
        return 1;
    }
    if (n === 0) return false;
    return n * factorial(n - 1);

}

function countDuplicates(arr) {

    var obj = {};

    arr.forEach(n => {
        if (!obj.hasOwnProperty(n)) {
            obj[n] = 1;
          } else {
            obj[n]++;
          }
    })


    var returnSum = 1;
    for ( let o in obj) {
        returnSum *= obj[o] > 1 ? factorial(obj[o]) : 1
    }
 
    return returnSum;

}

// console.log(countDuplicates(["a", "a", "a", "b"]))
console.log(listPosition("BOOKKEEPER"))

















