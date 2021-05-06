const buttonMobileNavBar = document.querySelector('.button--navbar')
const navbarContent = document.querySelector('.navbar-content')

buttonMobileNavBar.addEventListener('click', function() {
  this.classList.toggle('click')

  window.requestAnimationFrame(() => {
    navbarContent.classList.toggle('mobile-navbar')
  })
})