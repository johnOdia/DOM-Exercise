//NUMBER 1
window.onload = code()

function code(){
//NUMBER 2
const heading = document.getElementById('change_heading')
heading.innerHTML = 'Hello World!'

//NUMBER 3
const selected = document.querySelector('.selected')
const brown = document.querySelector('.brown')
const green = document.querySelector('.green')
const blue = document.querySelector('.blue')
const yellow = document.querySelector('.yellow')

brown.addEventListener('mouseover', () => selected.innerHTML = 'brown')
green.addEventListener('mouseover', () => selected.innerHTML = 'green')
blue.addEventListener('mouseover', () =>  selected.innerHTML = 'blue')
yellow.addEventListener('mouseover', () => selected.innerHTML = 'yellow')

//NUMBER 4
const newDiv = document.createElement("div")

//NUMBER 5
newDiv.className = 'purple'
newDiv.backgroundColor = 'purple'

//NUMBER 6
const section = document.querySelector('section')
section.appendChild(newDiv)
}

