const removeMin = number => {
    if (number.length === 0) {
        return []
    }
    const minIndex = number.indexOf(Math.min(...number))
    return [...number.slice(0, minIndex), ...number.slice(minIndex + 1)]
}

console.log(removeMin([2,2,1,2,1])) // [2,2,2,1]
console.log(removeMin([5,3,2,1,4])) // [5,3,2,4]