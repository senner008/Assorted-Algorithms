

var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac."


var justify = function(str, lineWidth) {
    const arr = createWordArrays(str, lineWidth);
    return createFinalString(arr, lineWidth);
}

const createWordArrays = (str, lineWidth) => {
    var arr = [];
    var subArr = [];
    var word = "";
    var wordsLength = 0;

    for (let i = 0; i < str.length; i++) {

        let c = str[i];

        if (c === " ") {
            subArr.push(word);
            if (word.length > lineWidth) return false;
            wordsLength += word.length;
            word = "";
            wordLength = 0;
        } else  {
            word += c;
        }

        if (wordsLength + subArr.length - 1 > lineWidth) {
            var w = subArr.pop();
            arr.push(subArr);
            subArr = [w];
            wordsLength = w.length;
        }       
    }

    subArr.push(getLastWordInString(str))
    arr.push(subArr);
    return arr;
}

const getLastWordInString = (str) => {
    var cIndex = 1;
    var word = ""
    while (str[cIndex +1 ] !== " ") {
        word += str[str.length - cIndex];
        cIndex++;
    }
    return word.split("").reverse().join("");
}

function createFinalString(arr, lineWidth) {
    var finalstr = "";
    arr.forEach((wordsArr, index, thisArr)  => {
        if (index === thisArr.length - 1) return;
        
        var wordsLength = wordsArr.reduce((a,b) => a + b.length, 0);
        var arr = calcSpaces(lineWidth - wordsLength, wordsArr.length - 1);
        var counter = 0;
        var newstr = "";
        wordsArr.forEach(w => {
            newstr += w + " ".repeat(arr[counter++]);
        })
        finalstr += newstr + "\n";
    })
    finalstr += arr[arr.length -1].join(" ");
    return finalstr;
}

function calcSpaces(nSpaces, nWords) {

    if (nWords === 0) return [0];

    var upper = Math.ceil(nSpaces/nWords);
    var lower = Math.floor(nSpaces/nWords);

    var arr = []

    while (nSpaces != 0) {

        if (nSpaces % lower === 0 && (nSpaces / lower) + arr.length === nWords) {
            nSpaces = nSpaces - lower;
            arr.push(lower)
        } else {
            nSpaces = nSpaces - upper;
            arr.push(upper);
        }
    }
    return arr;
}

var result = justify(text, 30);
console.log(result)