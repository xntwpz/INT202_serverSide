function largest(n, array) {
    let arrSort = array.sort((a, b) => b - a)

    const newArr = arrSort.slice(0, n)
    return newArr.reverse()
}

console.log(largest(2, [7, 6, 5, 4, 3, 2, 1]))


function smallestElement(n, arr) {
    let sortArr = arr.sort((a, b) => a - b)
    const newArr = sortArr.slice(0, n)
    return newArr
}
console.log(smallestElement(5, ['6', '8', '9', '40', '1', '12', '9']))

function reverseMiddle(arr) {
    if (arr.length > 0 && arr.length >= 4) {
        if (arr.length % 2 === 0) {
            
        } else {

        }
    }

    return [];
}

console.log(reverseMiddle(['6', '8', '9', '40']))