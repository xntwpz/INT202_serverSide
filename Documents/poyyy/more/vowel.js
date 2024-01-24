// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.


const getCount = (str) => {
    let count = 0
    const vowel = ['a','e','i','o','u']

    for (let char of str) {
        if(vowel.includes(char)){
            count++
        }
    }
    return count
}