const menuButton = document.querySelector('.menu_button');
const navList = document.querySelector('.nav__list');
const closeButton = document.querySelector('.close__button');

// Function to open the navigation
function openNav() {
    navList.style.transform = 'translateX(0)'; // Display the navList
}

// Function to close the navigation
function closeNav() {
    navList.style.transform = 'translateX(-100%)'; // Hide the navList
}

// Event listeners
menuButton.addEventListener('click', openNav); // Open navList on menu button click
closeButton.addEventListener('click', closeNav); // Close navList on close button click



//Dropdown Menu 
const dropDownBtns = document.querySelectorAll('.nav__link');
const dropDownLists = document.querySelectorAll('.dropdown__list');

for (let i = 0; i < dropDownBtns.length; i++) {
    dropDownBtns[i].addEventListener('click', () => {
        // Close all dropdown lists
        for (let j = 0; j < dropDownLists.length; j++) {
            if (j !== i) {
                dropDownLists[j].classList.remove('open');
            }
        }
        
        // Toggle the clicked dropdown list
        if (dropDownLists[i].classList.contains('open')) {
            dropDownLists[i].classList.remove('open');
        } else {
            dropDownLists[i].classList.add('open');
        }
    });
}



//Swiper

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 1300, 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.trending__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 2000,
    slidesPerView: 4, // Default value for large screens
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
      },
      // when window width is >= 1440px (example for larger screens)
      1440: {
        slidesPerView: 4,
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.mp_hero_left', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 2000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.main__slider__container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 800,
    slidesPerView: 4, // Default value for large screens
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 4,
      },
      // when window width is >= 1440px (example for larger screens)
      1440: {
        slidesPerView: 4,
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("theme-toggle");

  // Function to set light theme
  function setLightTheme() {
      document.documentElement.style.setProperty('--background-body-color', '#ffffff');
      document.documentElement.style.setProperty('--header-background-color', '#f0f0f0');
      localStorage.setItem('theme', 'light');
  }

  // Function to set dark theme
  function setDarkTheme() {
      document.documentElement.style.setProperty('--background-body-color', '#040404');
      document.documentElement.style.setProperty('--header-background-color', '#333333');
      localStorage.setItem('theme', 'dark');
  }

  // Check the user's device preference and set the initial theme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkTheme();
  } else {
      setLightTheme();
  }

  // Check if the user has manually set a theme preference
  const userPreference = localStorage.getItem('theme');
  if (userPreference) {
      if (userPreference === 'dark') {
          setDarkTheme();
      } else {
          setLightTheme();
      }
  }

  // Toggle theme on button click
  toggleButton.addEventListener('click', function() {
      if (localStorage.getItem('theme') === 'dark') {
          setLightTheme();
      } else {
          setDarkTheme();
      }
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopButton = document.getElementById('scroll-to-top');

  // Show the button when the user scrolls down 20px from the top of the document
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  }

  // Smooth scroll to the top of the page when the button is clicked
  scrollToTopButton.addEventListener('click', function() {
      scrollToTop(0, 300); // Scroll to top over 300 milliseconds (0.3 seconds)
  });

  // Function to smoothly scroll to the top
  function scrollToTop(scrollTarget, speed) {
      let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > scrollTarget) {
          let scrollStep = -currentScroll / (speed / 15);
          let scrollInterval = setInterval(function() {
              if (document.documentElement.scrollTop !== scrollTarget) {
                  window.scrollBy(0, scrollStep);
              } else {
                  clearInterval(scrollInterval);
              }
          }, 15);
      }
  }
});

