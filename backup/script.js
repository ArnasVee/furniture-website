const hamburger = document.querySelector(".hamburger")
const navBar = document.querySelector(".nav-hide")
const links = document.querySelectorAll(".navLink");
const pageLinks = document.querySelectorAll(".page-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navBar.classList.remove("active");
}));

document.querySelectorAll('.pagination-category').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('.pagination-category').forEach(link => {
      link.classList.remove('active');
    });
    link.classList.add('active');
  });
});

for (let i = 0; i < pageLinks.length; i++) {
  const link = pageLinks[i];

  link.addEventListener('click', () => {
    pageLinks.forEach((link) => {
      link.classList.remove('active-page-link');
      link.classList.add('page-link');
    });
    link.classList.add('active-page-link');
    link.classList.remove('page-link');
  });
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.1,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,
  initialSlide: 0,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var topSwiper = new Swiper(".myTopSwiper", {
  loop: true,
  navigation: {
    nextEl: ".top-swiper-button-next",
    prevEl: ".top-swiper-button-prev",
  },
});

function toggleHeight() {
  var topSwiper = document.querySelector('.topSwiper');
  var computedHeight = window.getComputedStyle(topSwiper).getPropertyValue('height');
  var expandBtn = document.querySelector('.topSlider-expand-btn');
  var hiddenContainer = document.querySelector('.topSlider-hidden-container');
  var hiddenP = document.querySelector('.topSlider-hidden-container-p');
  var expandedControls = document.querySelectorAll('.topSlider-controls-btn-container');



  if (computedHeight === '640px') {
    topSwiper.classList.add('expandedSwiper')
    expandBtn.classList.add('expanded');
    hiddenContainer.classList.add('expandedDiv')
    hiddenP.classList.remove('expandedP');
    hiddenP.style.opacity = '1';
    expandedControls.forEach(function(element) {
      element.classList.add('expandedControls');
    }) ;
  } else {
    topSwiper.classList.remove('expandedSwiper')
    expandBtn.classList.remove('expanded');
    hiddenContainer.classList.remove('expandedDiv')
    hiddenP.classList.add('expandedP');
    hiddenP.style.opacity = '0';
    expandedControls.forEach(function(element) {
      element.classList.remove('expandedControls');
    }) ;
  }
}

//  if (computedHeight === '640px') {
//     topSwiper.style.height = '55rem';
//     expandBtn.style.marginTop = '53rem';
//     expandBtn.classList.add('expanded');
//     hiddenContainer.style.height = '17rem';
//     hiddenContainer.style.width = '35rem';
//     hiddenP.classList.remove('expandedP');
//     hiddenP.style.opacity = '1';
//   } else {
//     topSwiper.style.height = '40rem';
//     expandBtn.style.marginTop = '38rem';
//     expandBtn.classList.remove('expanded');
//     hiddenContainer.style.height = '1.7rem';
//     hiddenContainer.style.width = '1rem';
//     hiddenP.classList.add('expandedP');
//     hiddenP.style.opacity = '0';
//   }

var visionSwiper = new Swiper(".myVisionSwiper", {
  loop: true,
  navigation: {
    nextEl: ".vision-swiper-button-next",
    prevEl: ".vision-swiper-button-prev",
  },
});

var bottomSwiper = new Swiper(".myBottomSwiper", {
  loop: true,
  slidesPerView: 1.8,
  spaceBetween: 20,
  initialSlide: 1,

  navigation: {
    nextEl: ".bottom-swiper-button-next",
    prevEl: ".bottom-swiper-button-prev",
  },
});


function debounce(func, wait) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function updateTestDivWidth() {
  var bottomSwiperSlide = document.querySelector('.bottom-swiper-slide');
  var computedWidth = window.getComputedStyle(bottomSwiperSlide).getPropertyValue('width');
  var testDiv = document.querySelector('.bottom-empty');
  testDiv.style.width = parseInt(computedWidth) + 20 + 'px';
}

updateTestDivWidth();

window.addEventListener('resize', debounce(updateTestDivWidth, 10));

