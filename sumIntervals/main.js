
function sumIntervals(arr) {

    arr.sort((a,b) => {
        return a[0] - b[0]
    });
   
    var sum = 0,
        highest = arr[0][0];
    
    for (let interval of arr) {
        let key = interval[0]
        let val = interval[1];
        sum += val - key;
        if (key < highest) {
            sum -= Math.min(highest, val) - key
        }
        highest = Math.max(highest , val);
    }
    return sum
}

var arr = [
    [1, 2],
    [6, 10],
    [11, 15]
]; // 9
var arr2 =  [
    [1, 4],
    [7, 10],
    [3, 5]
 ]; // => 7

 var arr3 = [
    [1,5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
 ];

 var arr4 = [
    [1,11],
    [20,30],
    [1, 15],
    [2,16],
    [2,13],
    [18, 25],
    [1,30]

 ];

 var arr5 = [
     [-1, 500],
     [1,500],
     [49, 400],
     [-10, -1],
 ];


var result = sumIntervals(arr);
var result2 = sumIntervals(arr2);
var result3 = sumIntervals(arr3);
var result4 = sumIntervals(arr4);
var result5 = sumIntervals(arr5);


console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
