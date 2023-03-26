let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
      let navbar = document.querySelector(".navbar");
      if(entry.isIntersecting)
      {
          navbar.classList.remove("fixed-position");
      }
      else{
          navbar.classList.add("fixed-position");
      }
      
  })
},
{
  threshold: 1,
})
let mainPage = document.querySelector("#main-page");
observer.observe(mainPage);
var placeHolders = document.querySelectorAll(".search-bar label");
placeHolders.forEach((placeHolder) => {
  placeHolder.innerHTML = placeHolder.innerHTML
    .split("")
    .map(
      (letter, idx) =>
        `<span style ="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
var searchBar = document.querySelector(".search-bar input");
var letters = document.querySelectorAll(".discover span");
searchBar.addEventListener("click", function () {
  letters.forEach((letter) => {
    if (letter.classList.contains("move-up")) {
      letter.classList.remove("move-up");
    } else {
      letter.classList.add("move-up");
    }
  });
});

var cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", function () {
    removeClasses();
    this.classList.toggle("show");
    this.classList.remove("hide");
  });
});
function removeClasses() {
  cards.forEach((card) => {
    card.classList.toggle("hide");
  });
}
var zones = document.querySelectorAll(".zone");
$(".arrow.right").click(function () {
  carousel(zones,1,zones.length,-1);
});
$(".arrow.left").click(function () {
  carousel(zones,zones.length,1,1);
});
function carousel(size,first,last,rate)
{
  var index = 1;
  for (let i = 0; i < size.length; i++) {
    //First select the each review depending on the index number.
    var review = document.querySelectorAll(".review0"+index);
    review.forEach(element => 
      {
        /*Logic: 
        We need to check every individual review element in order to change their position in the carousel.
        to achieve this effect we need to switch
        1 to 3, 2 to 1,and 3 to 2.
        But there is a catch, if we do the switching per element there will be two review03 at the end, and to solve this
        problem I added a new class called "a" so this way the switched element wont be effecting the effect twice. */
        //the main reason to use a foreach loop is to make sure that we selected both switched review03s.
        if(!element.classList.contains("a"))
        {
          if(index === first)
          {
            element.classList.replace("review0"+first,"review0"+last);
          }
          else
          {
            element.classList.replace("review0"+index,"review0"+(index + rate));
          }
          index++;
          element.classList.add("a");
        }
      })
    }
    /*We are resetting both index and the a class.*/
    if(index >= size.length)
    {
      index = 1;
      size.forEach(content =>{
        content.classList.remove("a");
      })
    }
}


let index = 0;
var images = document.querySelectorAll(".tips-image .image");
var info = document.querySelectorAll(".tips-info .info");
$(".arrow-one").click(function () { 
  if(index < images.length - 1)
  {
    images[index].classList.toggle("switch-page");
    info[index].classList.toggle("switch-page");
  
    images[index + 1].classList.toggle("switch-page");
    info[index + 1].classList.toggle("switch-page");
    index++;
  }
  else
  {
    images[index].classList.toggle("switch-page");
    info[index].classList.toggle("switch-page");
    
    index = 0;
    images[index].classList.toggle("switch-page");
    info[index].classList.toggle("switch-page");
  }
});

$(".arrow-two").click(function () { 
  if(index > 0 && index < images.length )
  {
    images[index].classList.toggle("switch-page");
    info[index].classList.toggle("switch-page");
    index--;
    images[index].classList.toggle("switch-page");
    info[index].classList.toggle("switch-page");
  }
  else
  {
    images[index].classList.toggle("switch-page");
    info[index].classList.toggle("switch-page");
    index = images.length - 1 ;
    images[index].classList.toggle("switch-page");
    info[index].classList.toggle("switch-page");
  }
});