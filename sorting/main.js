var arr = [];
function createRandomArray(n) {

    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 1000) +1);  
    }
}

createRandomArray(10000000);
// console.log(arr);

var clone = arr.slice(0);
console.time("e")
clone.sort();
console.timeEnd("e")


var newArr = [];

console.time("e1")
arr.forEach(n => {
    newArr[n -1] = n;
});
console.timeEnd("e1")
// console.log(newArr)