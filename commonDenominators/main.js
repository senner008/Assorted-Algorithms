var arr = [(1, 2), (1, 3), (1, 4)];



function convertFrac (lst) {
    var numberPattern = /\d+/g;

    const convertToArray = (str) => {
        var arr = [];
        var newlst = lst
        .match( numberPattern );

        for ( let i = 0; i < newlst.length; i = i +2) {
            arr.push([Number(newlst[i]),  Number(newlst[i +1])]);
        }
        return arr;
    }

    const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

    var gcd = function(a, b) {
        if (!b) {
        return a;
        }
    
        return gcd(b, a % b);
    }

    const getDenoms = (arr) => {
        var denom = arr[0][1];
        arr.forEach((frac, index) => {
            if (arr[index + 1]) {
                denom = lcm(denom, arr[index +1][1])
            }
        });
    
        return arr
            .map(n => {
                return [(denom / n[1]) * n[0], denom]
            });
    }

    const convertToString = (arr) => {
        var str = ""
        arr.forEach(a => {
            str += "(" + a.toString() + ")";
        })
        return str;
    }

    if (typeof(lst) === "string") {
        let lstarr = convertToArray(lst);
        let newarr =  getDenoms(lstarr)
        return convertToString(newarr);
    } else {
        let bla = getDenoms(lst)
        return convertToString(bla);
    }

   

}

var result = convertFrac('(1,3)(4,12)(3,12)');

var lst = [ [1, 2], [1, 3], [1, 4] ]
var result2 = convertFrac(lst);
console.log(result)
console.log(result2)

