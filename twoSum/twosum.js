function twosum(arr = [1,2,2,3,3,4,5,5], num = 6) {
    
  var hash = {};  
  var solutions = [];
  arr.forEach(n => {
    if (hash[num - n] > 0) {
        solutions.push([n, num - n])
        hash[num-n] = hash[num - n] -1;
    } else {
        hash[n] = !(n in hash) ? 1 : hash[n] + 1;
    }
  })
  return solutions;
}

console.log(twosum())