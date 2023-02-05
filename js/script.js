//Модальне попап вікно
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//Sub-list
"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    ios: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows:function(){
        return navigator.userAgent.match(/IEMobile/i);
    },  
    any: function () {
        return(
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.ios() ||
          isMobile.Opera() ||
          isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0;index < menuArrows.length; index ++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function() {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }


} else {
    document.body.classList.add('_pc');
} 

//Burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//Swiper
const swiper = new Swiper('.text-slider', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slideToClickedSlide: true,
  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  slidesPerGroup: 1,
  centeredSlides: true,
  initialSlide: 0,
  loop: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 2.5,
      spaceBetween: 25,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2.2,
    },
    576: {
      slidesPerView: 1.7,
    },
    375: {
      slidesPerView: 1,
    },
  },
});

var swiper2 = new Swiper(".parallax-slider", {
  
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  grabCursor: true,
});

//tabs
const tabs = document.querySelectorAll(".tabs__tab");
const contents = document.querySelectorAll(".content__item");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => tab.classList.remove ("active"));
        tab.classList.add("active");
        contents.forEach((c) => c.classList.remove("active"));
        contents[index].classList.add("active");
    });
});
tabs[0].click();

//spoller
const accordion = document.querySelectorAll('.spoller__item')

for (item of accordion) {
  item.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
    } else {
        for (el of accordion) {
            el.classList.remove('active')
        }
        this.classList.add('active')
    }
  })
}