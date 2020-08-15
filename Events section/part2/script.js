// RACING GAME
const car1 = document.querySelector('.car1')
const car2 = document.querySelector('.car2')
const button = document.querySelector('button')


const moveCar1 = number => {
    let interval = setInterval( () => {
       number++
       car1.style.transform = `translateX(${number}px)`
       if (number === 1300){
           clearInterval(interval)
           alert('WINNER!~car1')
           location.reload()
       }
   }, Math.random()*30)
   return interval
}


const moveCar2 = number => {
    let interval = setInterval( () => {
       number++
       car2.style.transform = `translateX(${number}px)`
       if (number === 1300){
           clearInterval(interval)
           alert('WINNER!~car2')
           location.reload()
       }
   }, Math.random()*30)
   return interval
}

const play = () => {
    moveCar1(10)
    moveCar2(10)
}

button.addEventListener('click',() => {
    if (button.innerHTML === 'Start the race!'){
        play()
        button.innerHTML = 'Restart!'
    }else{
        location.reload()
    }
})