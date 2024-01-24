function firstReverseTry(arr) {
    //coding and coding..
    if (0 <= arr.length <= 50) {
        if(arr.length > 0) {
        let index0 = arr[arr.length - 1]
        arr[arr.length-1] = arr[0]
        arr[0] = index0
        }        
        return arr
    }
    return []

}
console.log(firstReverseTry(['6', '8', '9', '40', '1', '12', '9']))