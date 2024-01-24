// DOM manipulation
// by id
const title = document.getElementById('main-heading')
console.log(title) // <h1 id="main-heading">Favorite Movie Franchise</h1>

// by className
const listItem = document.getElementsByClassName('list-items')
console.log(listItem) // HTMLCollection(5)

// tagName
const listItem2 = document.getElementsByTagName('li')
console.log(listItem2) // HTMLCollection(5)

// selector
const container = document.querySelector('div')
console.log(container) // return first


// selectorAll

const containerAll = document.querySelectorAll('div')
console.log(containerAll) // return NodeList(2)