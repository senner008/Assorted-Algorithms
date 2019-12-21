function binarySearch(arr = [1,2,3,4,5,7,8,13,15,16,17,18,19], key = 13) {

    var middle = Math.round((arr.length - 1) / 2);

    if (arr.length === 1) {
        if (arr[0] === key) return true;
        return false;
    }

    return binarySearch( key < arr[middle] ? arr.slice(0, middle) : arr.slice(middle) , key)

}

console.log(binarySearch());