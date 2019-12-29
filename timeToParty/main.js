var celebs = [
    [6,7],
    [7,9],
    [10,11],
    [10,12],
    [8,10],
    [9,11],
    [6,8],
    [8,9]
];

sched2 = [[6.0, 8.0], [6.5, 12.0], [6.5, 7.0], [7.0, 8.0], [7.5, 10.0], [8.0, 9.0],
    [8.0, 10.0], [9.0, 12.0], [9.5, 10.0], [10.0, 11.0], [10.0, 12.0], [11.0, 12.0]]

function getTime(arr = sched2) {
    var obj = {};

    arr.forEach(c => {
        obj[c[0]] = c[0] in obj ? obj[c[0]] +1 : 1;
        obj[c[1]] = c[1] in obj ? obj[c[1]] -1 : -1;

    })
    var highest = 0; 
    var sum = 0;
    var bestTime = null;
    for (let o in obj) {
        sum += obj[o];
        if (sum > highest) {
            highest = sum;
            bestTime = o;
        }
    }
    console.log(obj)
    return bestTime;
}

console.log(getTime())