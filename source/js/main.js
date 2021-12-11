var mainNav = document.querySelector('.main-nav');
var toggle = document.querySelector('.toggle');
var body = document.querySelector('body');

body.classList.remove('no-js');
toggle.classList.add('toggle--open');
mainNav.classList.add('main-nav--close');

toggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--close')) {
    toggle.classList.remove('toggle--open');
    toggle.classList.add('toggle--close');
    mainNav.classList.remove('main-nav--close');
    mainNav.classList.add('main-nav--open');
  } else {
    toggle.classList.remove('toggle--close');
    toggle.classList.add('toggle--open');
    mainNav.classList.add('main-nav--close');
    mainNav.classList.remove('main-nav--open');
  }
});
