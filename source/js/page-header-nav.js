let nav = document.querySelector('.page-header__nav');


let navButton = document.querySelector('.page-header__toggle');
navButton.onclick = function() {
    nav.classList.toggle('page-header__nav--closed');
    nav.classList.toggle('page-header__nav--opened');
};
