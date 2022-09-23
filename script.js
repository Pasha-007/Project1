let hamburger = document.getElementById('hamburger')
menu = document.getElementById('menu')
header = document.getElementById('header')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active')
    menu.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    header.style.background = window.pageYOffset > (header.offsetHeight) ? '#000' : ''
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

let videoButton = document.getElementById('button'),
    overlay = document.getElementById('overlay'),
    closeButton = document.getElementById('close'),
    video = document.getElementById('video')

videoButton.addEventListener('click', () => {
  overlay.style.display = 'flex'
  closeButton.style.display = 'block'
  video.play()
})

closeButton.addEventListener('click', () => {
  overlay.style.display = 'none'
  closeButton.style.display = 'none'
  video.pause()
})

AOS.init()