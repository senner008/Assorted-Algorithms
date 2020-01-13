
// This is a recursive solution
// It creates a tree structure where
// getPossibilitiesRecursively 
// returns:
// left : take new item
// or right : do not take new item.


function packBagpack(scores, weights, capacity) {

    function getPossibilitiesRecursively (itemCounter, weight, score) {
    
        if (weight > capacity) return false;
    
        if (itemCounter === scores.length) {
            bestScore = score > bestScore ? score : bestScore;
            return false;
        }

        var newweight = weight + weights[itemCounter];
        var newscore = score + scores[itemCounter];
    
        return getPossibilitiesRecursively(itemCounter +1, newweight, newscore)
            ||  getPossibilitiesRecursively(itemCounter +1, weight, score);
    }
    
    var bestScore = 0;

    getPossibilitiesRecursively(0, 0, 0);
    
    return bestScore;
      
  }

var test1 = packBagpack([15, 10, 9, 5], [1, 5, 3, 4], 8); 

console.log(test1) // 29

// Optimal solution if total weight is small from code wars using Dynamic programming:

function packBagpack2(scores, weights, capacity) {
    let load = Array.from({ length: capacity + 1 }, () => 0);
    for (let i = 0; i < weights.length; i++) {
      load = load.map(
        (l, w) => Math.max(l, weights[i] <= w && load[w - weights[i]] + scores[i])
      );
    }
    return load.pop();
  }
