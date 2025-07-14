const slidesButton = document.querySelector('.carousel-list');
const previousButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const slideStep = 2 
let cardwidth = 270;
let visiblecards = 5;
let totalcards = document.querySelectorAll('.carousel-container').length;

maxIndex = totalcards - visiblecards;

function updatecarousel(){
   slidesButton.style.transform = `translateX(-${currentIndex * cardwidth}px)`
}
   


nextButton.addEventListener('click', () => {
  if (currentIndex < maxIndex) {  // only move if we haven't reached the max scroll point
    currentIndex+=slideStep;  
 if (currentIndex > maxIndex) {
      currentIndex = totalcards - visiblecards;
    }
    updatecarousel();            // update carousel position visually
  }
});
previousButton.addEventListener('click', () =>{
     if (currentIndex > 0) {
    currentIndex -= slideStep; // Move back 2 slides
    if (currentIndex < 0) 
    currentIndex = 0; // Prevent going negative
    updatecarousel();
  }
});
function getValue(){
    const inputElement = document.querySelector('.js-input');
    let value = inputElement.value;
    inputElement.value = ''
}
const track = document.querySelector('.track-container');
const prevsButton = document.querySelector('.previous-button');
const nextsButton = document.querySelector('.nexts-button');

let setIndex = 0;
let cardWidthTotal = 270;
let slideIndex = 2;
let viewedCard = 5;
const totalCardsView = track.children.length 
let maximumIndex = totalCardsView - viewedCard;

function clickValue(){
    track.style.transform = `translateX(-${setIndex * cardWidthTotal}px)`
}
nextsButton.addEventListener('click', () =>{
  setIndex += slideIndex
  if(setIndex > maximumIndex){
    setIndex = maximumIndex
  }
  clickValue()
}
)
prevsButton.addEventListener('click', () =>{
  setIndex -= slideIndex;
  if (setIndex < 0){
    setIndex = 0
  }
  clickValue()
})




//console.log(totalCardsView)