const stripe = document.querySelector('.stripe');
let currentIndex = 0;

function updateTransform() {
  const tileWidth = document.querySelector('.tile').offsetWidth;
  stripe.style.transform = `translateX(-${currentIndex * tileWidth}px)`;
}

function next() {
  const totalTiles = document.querySelectorAll('.tile').length;
  const tilesPerView = getTilesPerView();
  if (currentIndex < totalTiles - tilesPerView) {
    currentIndex++;
    updateTransform();
  }
}

function previous() {
  if (currentIndex > 0) {
    currentIndex--;
    updateTransform();
  }
}

function getTilesPerView() {
  if (window.innerWidth >= 992) {
    return 3;
  } else if (window.innerWidth >= 768) {
    return 2;
  } else {
    return 1;
  }
}

window.addEventListener('resize', updateTransform);


// const delicious = document.getElementById("delicious");

// delicious.addEventListener("mouseenter", () => {
//   delicious.classList.add("hidden");
// });

// const delicious1 = document.getElementById("delicious1");

// delicious1.addEventListener("mouseenter", () => {
//   delicious1.classList.add("hidden");
// });

// const delicious3 = document.getElementById("delicious3");

// delicious3.addEventListener("mouseenter", () => {
//   delicious3.classList.add("hidden");
// });

/////////

window.onload = function () {
  var loadingElement = document.getElementById("loading");
  var contentElement = document.getElementById("content");

  function enableScroll() {
    document.body.style.overflow = "";
  }

  loadingElement.style.display = "flex"; // Show loader
  setTimeout(function () {
    loadingElement.style.display = "none"; // Hide loader
    contentElement.style.display = "block"; // Show content
    enableScroll(); // Enable scrolling
  }, 3000); // Adjust the time as needed
};
//////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function () {
//   var modal = document.getElementById("open-modal");
//   modal.style.display = "block"; // Show the modal when the page loads

//   var closeButton = document.querySelector(".close");
//   closeButton.addEventListener("click", function () {
//     modal.style.display = "none"; // Hide the modal when the close button is clicked
//   });
// });




