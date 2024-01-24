function closeCompare(a, b, margin){
    let absolute = Math.abs(a-b)
    if(margin >= absolute){ // close to
        return 0
    } else{
        margin = 0
        if(a<b){
            return -1
        } else if(a>b){
            return 1
        } else {
            return 0
        }
    }
}

console.log(closeCompare(1.99,5,3))

// solution 2
function closeCompare(a, b, margin = 0) {
    if (Math.abs(a - b) <= margin) return 0;
    return (a < b) ? -1 : 1;
  } // in return can assign if condition 