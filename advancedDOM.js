'use strict';

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
///////////////////////////////////////
// Modal window


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener
('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  } 
});

////////////////////////////////////////
//Page navitaion

//document.querySelectorAll('.nav__link').forEach(function(el) {
//  el.addEventListener('click', function(e) {
//    e.preventDefault();
//    const id = this.getAttribute('href'); //this= current element
//    console.log(id);
//    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//  });
//});

///////////////////////////////
//Event delegation 

//- when there are mils of elements to put an event-handler on them.
//Tech 1. Add eventListner to common parent element
//Tech 2. Determine what element originated the event. 

document.querySelector('.nav__links').addEventListener
('click', function(e) {
   e.preventDefault();
  //console.log(e.target);

  //Matching strategy (=Tech 2)
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); 
    console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
});

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');

//Not desirable. What if we have mils of tabs
//tabs.forEach(t=>t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');
  //const clicked2 = e.currentTarget;
  console.log(clicked);

  //Guard clause
  if(!clicked) return;

  //Active tab
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
  
  // Active content area
  console.log(clicked.dataset.tab)

  tabContent.forEach(c=>c.classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active')
});


////////////////////////////////////
//Button scrolling 
btnScrollTo.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);

    console.log(e.target.getBoundingClientRect());

    
console.log('Current scroll (X/Y', window.pageXOffset, pageYOffset);
console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
);
//Scrolling 
//window.scrollTo(
//    s1coords.left + window.pageXOffset, //the target position + window position
//    s1coords.top + window.pageYOffset,
//    console.log(s1coords.top, window.pageYOffset)
//    );
//   
//
//window.scrollTo({
//    left: s1coords.left + window.pageXOffset, 
//    top: s1coords.top + window.pageYOffset,
//    behavior: 'smooth'
//})

section1.scrollIntoView({behavior: 'smooth'})

});

//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
//** */.innerAdjacentHTML** <= 요거 공부하기.

const message = document.createElement('div');
message.classList.add('cookie-message');

//message.textContent = 'We use cookied for imporved functionality and analytics';
message.innerHTML = 
'We use cookied for imporved functionality and analytics.<button class = "btn btn--close-cookie">Got it!</button>';

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

//header.before(message);
//header.after(message);



//Delete elements
document
.querySelector('.btn--close-cookie')
.addEventListener('click', function() {
    //message.remove()
    message.parentElement.removeChild(message);
});


//Styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message)
.height, 10) + 30 + 'px';

//documentElement = root of css
document.documentElement.style.setProperty('--color-primary', 'orangered') 

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//Non-starndard
console.log(logo.designer);
console.log(logo.getAttribute('desiner'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log (logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'))

//Data attributes
console.log(logo.dataset.versionNumber);
//we use data attribute quite a lot when we work with UI 
//when we need to store data in the user interface.

// Classes
logo.classList.add('c', 'b');
logo.classList.remove('c', 'b');
logo.classList.toggle('c');
logo.classList.contains('c'); //Not includes like we call in Array.

//Don't use - This will overried all the existing classes. 
//logo.className = 'jonas'

//before learning Smooth scrolling


const h1 = document.querySelector('h1');
const alertH1 = function(e) {
    alert('addEventListner: Great! You are reading the heading :D')

};

h1.addEventListener('click', alertH1 );

//setTimeout(() => 
//h1.removeEventListener('mouseenter', alertH1), 3000);

// Reveal section

const allSections2 = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const[entry] = entries;
  console.log(entry)

  if(!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden')//콘솔로그로 공부
  observer.unobserve(entry.target);
  console.log(entry.target);
}

const sectionObserver = new IntersectionObserver
(revealSection, {
  root: null,
  threshold: 0.25,
});
allSections2.forEach(function(section) { //section들을 하나씩 돈면서
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});



