// 1. change color in id
const title = document.querySelector('#main-heading')
title.style.color = 'red'
console.log(title)

// 2.change size in class
const listItems = document.querySelectorAll('.list-items')
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '2rem'
}


// 3.crete element
const ul = document.querySelector('ul') // parent
const li =document.createElement('li') // creating

// 4.adding Element
ul.append(li)

// 5.modifying the text
li.innerText = 'X-men'

// 6.modifying Attributes

li.setAttribute('id','main-heading')
li.removeAttribute('id')

li.classList.add('list-items')

// 7. remove
li.remove()