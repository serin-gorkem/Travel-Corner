var dates = document.querySelectorAll(".calendar__number");
var text = document.querySelector(".calendar__text");
var clickCount = 0;
var clicked = null;
dates.forEach((date) => {
  date.addEventListener("click", function () {
    var selected = document.querySelectorAll(".calendar__number--current");
    if(clickCount === 0 )
    {
      clicked = date;
    }
    else if(clickCount === 1){
      //The first clicked .calendar__number element 
      //Array.prototype.indexOf.call(array,which element do you want to find index of);
      var firstElement = (Array.prototype.indexOf.call(dates, clicked) - 2 );
      var lastElement = (Array.prototype.indexOf.call(dates, date) - 2);
      var range = Math.abs(firstElement - lastElement);

      //Select the dates between
      /* 
      The value of i is depending on the selection way.
      For example a client selects the 1th and 30th days of the month the date should start from 2th and go to the 8th one
      But if we reversed the situation it has to go from 30th to 1th. And since range is still greater than the last element
      it will cause a problem with the sizing of the dates array.
    */
      if(firstElement < lastElement)
      {
        for (let i = firstElement; i < range + firstElement ; i++) {
          dates[i+2].classList.add("calendar__number--current");
        }
      }
      else
      {
        for (let i = lastElement; i < range + lastElement ; i++) {
          dates[i+2].classList.add("calendar__number--current");
        }
      }

    }else{
      selected.forEach((element) => {
        //Just so if client decides to press another date after it already selected two.
        element.classList.remove("calendar__number--current");
      });
      clickCount = 0;
      clicked = date;
    }
    date.classList.add("calendar__number--current");
    clickCount++;
  });
});

var booking = document.querySelectorAll(".booking__item");
var numbers = document.querySelectorAll(".sections__number");
/*To changing active page number */
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
