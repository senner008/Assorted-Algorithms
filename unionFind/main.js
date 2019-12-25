
var obj = {};

function union (a,b) {
   a in obj ? obj[a].add(b) : obj[a] = new Set([b]);
   b in obj ? obj[b].add(a) : obj[b] = new Set([a]);
}

union(2,3);
union(2,4);
union(7,8);
union(3,8);

console.log(obj);

function find(start, end) {

    var found = false;
    var visited = {}

   function recursiveFind (current) {

        visited[current] = true;

        if (current === end || found) {
            found = true;
            return true;
        }
        if (!obj[current]) {
            return false;
        }

        obj[current].forEach(n => {
            if (n === start || visited[n]) return;
            return recursiveFind(n);
        })
   }

   recursiveFind(start);
   return found;
}
var result = find(3,2);
console.log(result)