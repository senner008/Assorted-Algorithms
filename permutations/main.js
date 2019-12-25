function permutations(total = ["a", "b", "c"]) {

    var results = [];

    function rec (current, remaining) {

        if (remaining.length === 0) {
            results.push(current);
        }

        remaining.forEach((r, index) => {
            let newArr = [...current, r];
            let remainingClone = remaining.filter((item, indexThis) => index !== indexThis); 
            return rec(newArr, remainingClone);
        })
       
    }

    rec([], total);
    return results;
}
var results = permutations();
console.log(results)

