function knight(start, end) {

    var moves = [
        [-2,1],
        [-1,2],
        [1,2],
        [2,1],
        [-2,-1],
        [-1,-2],
        [1,-2],
        [2,-1]
    ];
    
    var obj = {}

    var formatPosition = pos => [pos.charCodeAt(0), Number(pos[1])];

    function recursive(oldPos, counter) {

        if (oldPos[0] < 97 || oldPos[1] < 1 || oldPos[0] > 104 || oldPos[1] > 8 ) {
            return false;
        }
        if (counter > 5) return false;

        counter++;

        var key = oldPos.toString();

        if ( key in obj ) {
           if (counter >= obj[key]) {
               return false;
           } else {
            obj[key] = counter;
           }
        } else {
            obj[key] = counter;
        }
       
        moves.forEach((move, index) => {

            var newMove = [
                oldPos[0] + move[0], 
                oldPos[1] + move[1]
            ];
          
            return recursive(newMove, counter);

        })
    }
    recursive(formatPosition(start),-1);
    return obj[formatPosition(end).toString()]
}


Object.defineProperty( Set.prototype, "reduce", { value: function reduce(fn,z) { for ( const v of this ) z = fn(z,v); return z; } } );
function knight2(start,finish) {
  const fromXY = (x,y) => " abcdefgh"[x] + String(y) ;
  const toXY = ([x,y]) => [ " abcdefgh".indexOf(x), Number(y) ] ;
  const onBoard = ([x,y]) => x>=1 && x<=8 && y>=1 && y<=8 ;
  const moves = (x,y) => [ [x+1,y-2], [x+1,y+2], [x+2,y-1], [x+2,y+1], [x-1,y-2], [x-1,y+2], [x-2,y-1], [x-2,y+1] ].filter(onBoard) ;
  const allMoves = positions => positions.reduce( (set,pos) => moves(...toXY(pos)).reduce( (set,[x,y]) => set.add(fromXY(x,y)) , set ) , new Set ) ;
  return function move(positions,m) { return positions.has(finish) ? m : move( allMoves(positions), m+1 ) ; } ( new Set([start]), 0 ) ;
}

console.time("e")

var result = knight("a1", "h8");

console.timeEnd("e")

console.time("e1")

var result = knight2("a1", "h8");

console.timeEnd("e1")

console.log(result);
