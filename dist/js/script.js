//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
// Tambahkan kode berikut untuk menghapus navbar ketika layar di klik
document.addEventListener('click', function (event) {
  if (!navMenu.classList.contains('hidden') && !event.target.closest('#hamburger') && !event.target.closest('#nav-menu')) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});
// Tambahkan kode berikut untuk menghapus navbar ketika salah satu <li> di dalamnya diklik
const navItems = document.querySelectorAll('#nav-menu li');
navItems.forEach(function (navItem) {
  navItem.addEventListener('click', function () {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  });
});

//navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};
