let items = document.querySelectorAll('#featureContainer .carousel .carousel-item');
items.forEach((el) => {
  const minPerSlide = 4
  let next = el.nextElementSibling
  for (var i=1; i<minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})
$(document).ready(function(){
  $('#featureCarousel').carousel({interval: false});
  $('#featureCarousel').carousel('pause');
});

let items2 = document.querySelectorAll('#featureContainer .carousel .carousel-item');
items2.forEach((el) => {
  const minPerSlide2 = 6
  let next2 = el.nextElementSibling
  for (var i=1; i<minPerSlide2; i++) {
    if (!next2) {
      // wrap carousel by using first child
      next2 = items2[0]
    }
    let cloneChild2 = next2.cloneNode(true)
    el.appendChild(cloneChild2.children[0])
    next2 = next2.nextElementSibling
  }
})
$(document).ready(function(){
  $('#featureCarousel').carousel({interval: false});
  $('#featureCarousel').carousel('pause');
});