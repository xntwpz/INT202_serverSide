let ul = document.querySelector('ul')

console.log(ul.parentNode.parentNode) //<body></body>
console.log(ul.parentElement.parentElement) //<body></body>

const html = document.documentElement
console.log(html.parentNode) // #document
console.log(html.parentElement) // #null

console.log(ul.childNodes) // NodeList(11) ถ้าเพิ่มคอมเม้นnodelistจะเพิ่ม
console.log(ul.firstChild)
console.log(ul.lastChild)
ul.childNodes[3].style.backgroundColor = 'lightblue'

console.log(ul.children) // HTML Collection(5) 
console.log(ul.firstElementChild)
console.log(ul.lastElementChild)


//sibling node traversal
const div = document.querySelector('div')
console.log(div.childNodes) // NodeList(5) [text, h1#main-heading, text, ul, text]
console.log(ul.previousSibling) // text
console.log(ul.nextSibling) //text
console.log(ul.previousElementSibling) //<h1></h1>
console.log(ul.nextElementSibling) // null
