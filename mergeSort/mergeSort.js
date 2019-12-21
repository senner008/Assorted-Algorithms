

function splitArrays (arr = [1,3,2,2,3,5,2134,24,6,245,3,1,7,3,2,4]) {

    if (arr.length < 3) {
        if (arr.length === 1) return arr
        return arr[0] < arr[1] ? arr : [arr[1], arr[0]];      
    }

    var middle = Math.round((arr.length - 1) / 2);

    var left = arr.slice(0, middle);
    var right = arr.slice(middle);

    return merge(splitArrays(left), splitArrays(right));

}

function merge(left, right) {
    var arr = [];
    var leftCounter = 0;
    var rightCounter = 0;

    while (leftCounter < left.length || rightCounter < right.length ) {
        let leftItem = left[leftCounter];
        let rightItem = right[rightCounter];

        if(leftItem <= rightItem || !rightItem) {
            arr.push(leftItem);
            leftCounter++;
        } 
        else {
            arr.push(rightItem);
            rightCounter++;
        }  
    }
    return arr;

}


console.log(splitArrays())