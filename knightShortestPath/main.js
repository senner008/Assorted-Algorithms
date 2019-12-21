function knight(start, end) {

    const moves = [
        [-2,1],
        [-1,2],
        [1,2],
        [2,1],
        [-2,-1],
        [-1,-2],
        [1,-2],
        [2,-1]
    ];
    
    const obj = {}

    const formatPosition = pos => [pos.charCodeAt(0), Number(pos[1])];

    function recursive(oldPos, counter) {

     
        if (oldPos[0] < 97 || oldPos[1] < 1 || oldPos[0] > 104 || oldPos[1] > 8 ) {
            return false;
        }
        if (counter > 5) return false;

        counter++;

        const key = oldPos.toString();

        if ( key in obj ) {
           if (counter >= obj[key]) {
               return false;
           }
        } 
        obj[key] = counter;
       
        moves.forEach((move, index) => {

            const newMove = [
                oldPos[0] + move[0], 
                oldPos[1] + move[1]
            ];
          
            return recursive(newMove, counter);

        })
    }
    recursive(formatPosition(start),-1);
    return obj[formatPosition(end).toString()]
}


var result = knight("a1", "h8");
console.log(result)
