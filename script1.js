'use strict'
const progress = document.querySelectorAll('.step')
const connector = document.querySelectorAll('.connector')
const previous = document.querySelector('.prev')
const next = document.querySelector('.next')

next.addEventListener('click', () => {
    for(let i = 0; i < i.length; i++) {
       progress.forEach(step => {
           console.log(step)
        previous.classList.add('active')
       })
         
       
    }
  
})