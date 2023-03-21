var dates = document.querySelectorAll(".calendar__number");
var text = document.querySelector(".calendar__text");

dates.forEach((date) => {
  date.addEventListener("click", function () {
    var selected = document.querySelector(".calendar__number--current");
    selected.classList.remove("calendar__number--current");
    date.classList.add("calendar__number--current");
  });
});
var booking = document.querySelectorAll(".booking__item");
var numbers = document.querySelectorAll(".sections__number");
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    numbers.forEach((element) => {
      element.classList.remove("active");
    });
    booking.forEach((element) => {
      element.classList.remove("enable");
    });
    booking[i].classList.add("enable");
    numbers[i].classList.add("active");
  });
}
$(".checkout--button .btn").click(function () {
  if (!$(".checkout--button .btn").hasClass("active-btn")) {
    $(".checkout--button .btn").addClass("active-btn");
  } else {
    $(".checkout--button .btn").removeClass("active-btn");
  }
});
