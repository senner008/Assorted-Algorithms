
// This is a recursive solution
// It creates a tree structure where
// getPossibilitiesRecursively 
// returns:
// left : take new item
// or right : do not take new item.


function packBagpack(scores, weights, capacity) {

    function getPossibilitiesRecursively (itemCounter, knapsack, weight, score) {
    
        if (weight > capacity) return false;
    
        if (itemCounter === scores.length) {
            bestScore = score > bestScore ? score : bestScore;
            return false;
        }
   
        knapsack.push(scores[itemCounter]);
        var newweight = weight + weights[itemCounter];
        var newscore = score + scores[itemCounter];
    
        return getPossibilitiesRecursively(itemCounter +1, knapsack, newweight, newscore)
            ||  getPossibilitiesRecursively(itemCounter +1, knapsack, weight, score);
    }
    
    var bestScore = 0;

    getPossibilitiesRecursively(0, [], 0, 0);
    
    return bestScore;
      
  }

var test1 = packBagpack([15, 10, 9, 5], [1, 5, 3, 4], 8); 

var test2 = packBagpack([20, 5, 10, 40, 15, 25], [1, 2, 3, 8, 7, 4], 10); 

console.log(test1) // 29

console.log(test2) // 60



