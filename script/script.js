// Animações

window.addEventListener('load', function () {
  var element = document.querySelector('.fadeup-hdr')
  var position = element.getBoundingClientRect()

  // ativa sempre que for visível
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('visible')
  } else {
    element.classList.remove('visible')
  }
})

window.addEventListener('scroll', function () {
var element = document.querySelector('.fadeup-hdr')
var position = element.getBoundingClientRect()

// ativa sempre que for visível
if (position.top < window.innerHeight && position.bottom >= 0) {
  element.classList.add('visible')
} else {
  element.classList.remove('visible')
}
})

window.addEventListener('load', function () {
  var element = document.querySelector('.quote-transition')
  var position = element.getBoundingClientRect()

  // ativa sempre que for visível
  if (position.top < window.innerHeight && position.bottom >= 0) {
    element.classList.add('visible')
  } else {
    element.classList.remove('visible')
  }
})

window.addEventListener('scroll', function () {
var element = document.querySelector('.quote-transition')
var position = element.getBoundingClientRect()

// ativa sempre que for visível
if (position.top < window.innerHeight && position.bottom >= 0) {
  element.classList.add('visible')
} else {
  element.classList.remove('visible')
}
})

window.addEventListener('scroll', function () {
    var element = document.querySelector('.scroll-element')
    var position = element.getBoundingClientRect()
  
    // ativa sempre que for visível
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('visible')
    } else {
      element.classList.remove('visible')
    }
})

window.addEventListener('scroll', function () {
    var element = document.querySelector('.scroll-sec')
    var position = element.getBoundingClientRect()
  
    // ativa sempre que for visível
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('visible')
    } else {
      element.classList.remove('visible')
    }
})

window.addEventListener('scroll', function () {
    var element = document.querySelector('.scroll-fadeup')
    var position = element.getBoundingClientRect()
  
    // ativa sempre que for visível
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('visible')
    } else {
      element.classList.remove('visible')
    }
})

window.addEventListener('scroll', function () {
    var element = document.querySelector('.scroll-fadeup-02')
    var position = element.getBoundingClientRect()
  
    // ativa sempre que for visível
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('visible')
    } else {
      element.classList.remove('visible')
    }
})

window.addEventListener('scroll', function () {
    var element = document.querySelector('#scroll-fadeup-03')
    var position = element.getBoundingClientRect()
  
    // ativa sempre que for visível
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('visible')
    } else {
      element.classList.remove('visible')
    }
})

window.addEventListener('scroll', function () {
    var element = document.querySelector('.car-fade')
    var position = element.getBoundingClientRect()
    // ativa sempre que for visível
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add('visible')
    } else {
      element.classList.remove('visible')
    }
})