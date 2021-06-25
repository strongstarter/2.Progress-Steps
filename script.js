'use strict'
const progress = document.querySelectorAll('.progressBar')
const previous = document.querySelector('.prev')
const next = document.querySelector('.next')
const step2 = document.querySelector('.step2')
const step3 = document.querySelector('.step3')
const step4 = document.querySelector('.step4')
const connector1 = document.querySelector('.connector1')



next.addEventListener('click', () => {
        progress.forEach((step)=> {
        step2.classList.add('active')
        connector1.classList.add('active')
        previous.classList.add('active')
    })
    
})

previous.addEventListener('click', () => {
    step2.classList.remove('active')
    connector1.classList.remove('active')
    previous.classList.remove('active')
})
    