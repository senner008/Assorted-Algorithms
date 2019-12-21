function twosum(arr = [1,2,3,4,5], num = 6) {
    
    var resultArr = [];
    arr.forEach((n,index) => {
        arr.forEach((n2, index2) => {
            if (index !== index2 && n + n2 === num) {
                resultArr.push([n, n2].sort().toString());
            }
        });
    })
    return [...new Set(resultArr)]
        .map(item => item.split(","))
        .map(item => item.map(s => Number(s)));
}

console.log(twosum())