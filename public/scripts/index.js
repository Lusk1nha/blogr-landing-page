const navbarOptions = document.querySelectorAll('.nav-options')

navbarOptions.forEach(option => {
  option.addEventListener('click', openOption)
})


function openOption() {
  if (this.classList[1] === 'selected' ) {
    return navbarOptions.forEach(option => option.classList.remove('selected'))
  }
  
  navbarOptions.forEach(option => option.classList.remove('selected'))

  window.requestAnimationFrame(() => {
    this.classList.toggle('selected')
  });
}