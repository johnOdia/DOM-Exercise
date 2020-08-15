//NUMBER 1
const container = document.getElementById('container')

//NUMBER2
const container2 = document.querySelector('#container')

//NUMBER 3
const list = document.querySelectorAll('.list')

//NUMBER 4
const third = document.querySelector('ol .third')
third.innerHTML = 'hello'

//NUMBER 5
container.innerHTML =  "Hello!"

//NUMBER 6
const footer = document.querySelector('.footer')
footer.classList.add('main')

//NUMBER 7
footer.classList.remove('main')

//NUMBER 8
const li = document.createElement('li')

//NUMBER 9
li.innerHTML = 'four'

//NUMBER 10
const ul = document.querySelector('ul')
ul.append(li)

//NUMBER 11
const ol = document.getElementsByTagName('ol')
for (let i = 0; i < ol.length; i++){
    ol[i].style.backgroundColor = 'green'
}
//NUMBER 12
footer.remove()