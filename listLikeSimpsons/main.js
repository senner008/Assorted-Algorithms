// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''



function list(names){
    return names
        .map((obj,index) => {
            if (index === names.length -1  && index !== 0) {
                return " & " + obj.name
            }
            return names.length > 1 && index !== 0 ? ", " + obj.name : obj.name
        })
        .join("");
}

console.log(list([ {name: 'Bart'} ]))
  