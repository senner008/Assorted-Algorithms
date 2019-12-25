function bestTrade(arr = [32,46,26,38,40,48,42]) {
    var min = arr[0];
    var bestTrade = 0;
    arr.forEach(n => {
        min = n < min ? n : min;
        bestTrade = n - min > bestTrade ? n - min : bestTrade;
    })
    return bestTrade;
}

console.log(
    bestTrade()
)

console.log(
    bestTrade([10,18,4,5,9,6,16,12])
)