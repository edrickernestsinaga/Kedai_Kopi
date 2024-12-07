//Toggle Class Active
const NavbarNav = document.querySelector('.Navbar-Nav');
//Ketika Hamburger Menu Di Tekan
document.querySelector('#hamburger-menu').onclick = () => {
  NavbarNav.classList.toggle('Active');
};

//klik di luar side bar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !NavbarNav.contains(e.target)) {
    NavbarNav.classList.remove('Active');
  }
});
