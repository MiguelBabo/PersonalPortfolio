// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Steam card effect

function map(val, minA, maxA, minB, maxB) {
    return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
  }
  
  function Card3D(card, ev) {
    let img = card.querySelector('img');
    let imgRect = card.getBoundingClientRect();
    let width = imgRect.width;
    let height = imgRect.height;
    let mouseX = ev.offsetX;
    let mouseY = ev.offsetY;
    let rotateY = map(mouseX, 0, 180, -25, 25);
    let rotateX = map(mouseY, 0, 250, 25, -25);
    let brightness = map(mouseY, 0, 250, 1.5, 0.5);
    
    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    img.style.filter = `brightness(${brightness})`;
  }
  
  var cards = document.querySelectorAll('.card3d');
  
  cards.forEach((card) => {
    card.addEventListener('mousemove', (ev) => {
      Card3D(card, ev);
    });
    
    card.addEventListener('mouseleave', (ev) => {
      let img = card.querySelector('img');
      
      img.style.transform = 'rotateX(0deg) rotateY(0deg)';
      img.style.filter = 'brightness(1)';
    });
  });

document.getElementById("Home").onclick = function () {
    window.scrollTo(0,0)
};
document.getElementById("Habilities").onclick = function () {
    window.scrollTo(0,1000)
};
document.getElementById("Graduation").onclick = function () {
    window.scrollTo(0,1650)
};
document.getElementById("Projects").onclick = function () {
    window.scrollTo(0,2200)
};
document.getElementById("Medias").onclick = function () {
  window.scrollTo(0,2800)
};

