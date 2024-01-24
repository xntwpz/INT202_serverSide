function isPythagoreanTriple(integer) {
    integer.sort((a, b) => a - b)
    return integer[0] ** 2 + integer[1] ** 2 === integer[2] ** 2
}

console.log(isPythagoreanTriple([100, 4, 5]))

function isPythagoreanTriple(i) {
    var [a, b, c] = i.sort((a, b) => a - b)

    return (a * a + b * b) === c * c
}