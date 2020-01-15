

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac."


var justify = function(str, len) {

    var arr = [];
    var subArr = [];
    var word = "";
    var wordsLength = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
     
        if (c === " " || i === str.length -1) {

            if (i === str.length - 1) {
                word += c;
            }
            subArr.push(word);
            if (word.length > len) return false;
            wordsLength += word.length;
            word = ""
            wordLength = 0;
        } else  {
            word += c;
        }

        if (wordsLength + subArr.length - 1 > len) {
            var w = subArr.pop();
            arr.push(subArr);
            subArr = [w];
            wordsLength = w.length;
        }
       
    }
    arr.push(subArr);

    var finalstr = "";
    arr.forEach((wordsArr, index, thisArr)  => {
        if (index === thisArr.length - 1) return;
        var totalLength = wordsArr.reduce((a,b) => a + b.length, 0);
        var arr = calcSpaces(len - totalLength, wordsArr.length - 1);
        var counter = 0;
        var newstr = ""
        wordsArr.forEach(w => {
            newstr += w + " ".repeat(arr[counter++]);
        })
        finalstr += newstr + "\n";
    })
    finalstr += arr[arr.length -1].join(" ");
    return finalstr
}

function calcSpaces(spaces, words) {

    if (words === 0) return [0];

    var upper = Math.ceil(spaces/words);
    var lower = Math.floor(spaces/words);

    var arr = []

    while (spaces != 0) {

        if (spaces % lower === 0 && (spaces / lower) + arr.length === words) {
            spaces = spaces - lower;
            arr.push(lower)
        } else {
            spaces = spaces - upper;
            arr.push(upper);
        }
    }
    return arr;
}



var result = justify(text, 30);
console.log(result)