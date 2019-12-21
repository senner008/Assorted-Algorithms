 function longestSlideDown (pyramid) {
    let pyramidTemplate = [];

    const getHighestAbove = (rowIndex, columnIndex) => {  
        const aboveLeftOrRight = (direction) => pyramidTemplate[rowIndex - 1][columnIndex + direction] || 0;
        return Math.max(aboveLeftOrRight(-1), aboveLeftOrRight(0));
    }

    // Top to bottom solution
    pyramid.forEach((row, rowIndex) => {

        pyramidTemplate.push(pyramid[rowIndex]);
        
        if (rowIndex === 0) {
            return;
        }

        row.forEach((column, columnIndex) => {
            const abovePlusCurrent = pyramid[rowIndex][columnIndex] + getHighestAbove(rowIndex, columnIndex);
            pyramidTemplate[rowIndex][columnIndex] = abovePlusCurrent;
        });

    });

    return pyramidTemplate[pyramidTemplate.length -1].reduce((a,b) => b > a ? b : a)
    

}

// function longestSlideDown (pyramid) {
//     let pyramidSum = [];

//     pyramid.forEach((r, i) => {
//       pyramidSum.push(r.map((e) => {
//         return (i === i) ? e : 0;
//       }));
//     });
//     // console.log(pyramidSum)

//     for (let i = 1 ; i < pyramidSum.length; i++) {
//         for (let j = 0; j < pyramidSum[i].length; j++) {
//             if (j === 0) {
//                 pyramidSum[i][j] = pyramidSum[i-1][0] + pyramid[i][0];
//             }
//             else if (j === pyramidSum[i].length - 1) {
//                 pyramidSum[i][j] = pyramidSum[i-1][j-1] + pyramid[i][j];
//             }
//             else {
//                 pyramidSum[i][j] = pyramid[i][j] + Math.max(pyramidSum[i-1][j - 1], pyramidSum[i-1][j]);
//             }

//             // pyramidSum[i][j] = pyramid[i][j] + Math.max(pyramidSum[i+1][j], pyramidSum[i+1][j+1]);
//         }
//     }

//     return pyramidSum[pyramidSum.length -1].reduce((a,b) => b > a ? b : a)
//     // return pyramidSum[0][0];



 

//   }




//  var result = longestSlideDown(
//  [
//  [3],
//  [7, 4],
//  [2, 4, 6],
//  [8, 5, 9, 3]
//  ])

  var result = longestSlideDown(
  [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20,  4, 82, 47, 65],
  [19,  1, 23, 75,  3, 34],
  [88,  2, 77, 73,  7, 63, 67],
  [99, 65,  4, 28,  6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]
  ]
  );

  

  console.log(result)