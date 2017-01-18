var currentSlide = 0;
var feedbackItem = document.querySelector('.feedback__item');


function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    feedbackItem[currentSlide].className = 'feedback__item';
    currentSlide = (n+feedbackItem.length)%feedbackItem.length;
    feedbackItem[currentSlide].className = 'feedback__item--active';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};