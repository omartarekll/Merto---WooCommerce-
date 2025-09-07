$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 6,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left py-3 bg-white  position-absolute top-50 start-0 translate-middle-y"></i>',
      '<i class="fa-solid fa-chevron-right  py-3 bg-white position-absolute top-50 end-0 translate-middle-y "></i>',
    ],
  });
});

// *** timer ***
let hours = 48;
let minutes = 5;
let seconds = 6;

function updateTimer() {
  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    minutes = 59;
    hours--;
  }

  if (hours < 0) {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

let timer = setInterval(updateTimer, 1000);

// *** top arrow
window.addEventListener("scroll", (e) => {
  let = document.getElementsByClassName("hero-section");

  if (e.target.documentElement.scrollTop > 350) {
    let topBtn = document.getElementById("topBtn");
    topBtn.classList.remove("d-none");
  } else {
    topBtn.classList.add("d-none");
  }
});

// *** Form validation ***
let myForm = document.getElementById("myForm");

myForm.addEventListener("input", (e) => {
  if (e.target.id == "userName") nameValidation(e.target);
  else if (e.target.id == "userEmail") emailValidation(e.target);
});

let nameValidation = (element) => {
  let inputValue = element.value.trim();
  if (inputValue.length < 3)
    handleError(element, "Enter at least 3 characters");
  else handleError(element);
};

let emailValidation = (input) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  !emailRegex.test(input.value)
    ? handleError(input, "Please enter a valid email")
    : handleError(input);
};

let handleError = (input, msg = "") => {
  input.nextElementSibling.innerText = msg;
};

// *** top arrow
window.addEventListener("scroll", (e) => {
  let = document.getElementsByClassName("hero-section");

  if (e.target.documentElement.scrollTop > 60000) {
    let topBtn = document.getElementById("topBtn");
    topBtn.classList.remove("d-none");
  } else {
    topBtn.classList.add("d-none");
  }
});

// *** owl carousel ****
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left py-3 bg-white  position-absolute top-50 start-0 translate-middle-y"></i>',
      '<i class="fa-solid fa-chevron-right  py-3 bg-white position-absolute top-50 end-0 translate-middle-y "></i>',
    ],
    dots: false,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      768: { items: 3 },
      992: { items: 4 },
      1200: { items: 5 },
    },
  });
});
