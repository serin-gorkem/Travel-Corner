let observer03 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
var elements = document.querySelectorAll(".element");
elements.forEach((element) => {
  observer03.observe(element);
});
elements.forEach((element) => {
    element.addEventListener("mouseover",function(){
        element.querySelector(".text").classList.add("effect");
        element.querySelector(".image").classList.add("effect");

    });
    element.addEventListener("mouseout",function(){
        element.querySelector(".text").classList.remove("effect");
        element.querySelector(".image").classList.remove("effect");
    });
});
