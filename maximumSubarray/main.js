
// var maxSequence = function(arr){
//     var highest = 0;
//     // var counter = 0;

//     for( let i = 0; i < arr.length; i++ ) {
//         let sum = 0;  

//         if (arr[i] < 0 || arr[i -1] > 0) {
//             continue;
//         }
  
//         for (let j = i; j < arr.length; j++  ) {
//             // counter++;
//             sum += arr[j];
//             if (sum > highest) {
//                 highest = sum;
//             }
//         }
//     }
//     // console.log(counter)
//     return highest;
// }

var maxSequence = function(arr){
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
      sum += arr[i];
      min = Math.min(sum, min);
      ans = Math.max(ans, sum - min);
      console.log("--------------")
      console.log("sum : " + sum)
      console.log("min : " + min)
      console.log("ans : " + ans)

    }
    return ans;
  }

console.time("f")
var result = maxSequence(
    [
        1, 2, -5, 5
    ]
    )

    console.timeEnd("f")
    console.log (result)
// should be 6: [4, -1, 2, 1]