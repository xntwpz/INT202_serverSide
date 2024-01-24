
const buttonTwo = document.querySelector(".btn-2")
function alertBtn() {
    alert('i Love  Js')
}
buttonTwo.addEventListener('click', alertBtn)

// mouse over
const box1 = document.querySelector('.boxes.box-1')
const box2 = document.querySelector('.boxes.box-2')
const box3 = document.querySelector('.boxes.box-3')
function changeBgColor() {
    box1.style.backgroundColor = 'lightblue'
    box2.style.backgroundColor = 'lightsalmon'
    box3.style.display = "none"
}
box1.addEventListener("mouseover", changeBgColor);
// remove display none and show the third box when clicked on it
box1.addEventListener("click", () =>{
    box3.style.display = 'block'
})
// function to reset all background colors
function resetColors(){
    box1.style.backgroundColor='';
    box2.style.backgroundColor='';
    box3.style.backgroundColor=''
}
// add a click event listener for each boxes that will call the resetColors function
[box1,box2,box3].forEach((box)=>box.addEventListener('click',resetColors))

