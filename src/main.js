// query selector variables go here 👇
var title = document.querySelector(".poster-title");
var quote = document.querySelector(".poster-quote");
var image = document.querySelector(".poster-img");
var showRandomPosterBtn = document.querySelector(".show-random");
var makeYourOwnPosterBtn = document.querySelector(".show-form");
var formPage = document.querySelector(".poster-form");
var mainPage = document.querySelector(".main-poster");
var showSavedPostersBtn = document.querySelector(".show-saved");
var savedPostersPage = document.querySelector(".saved-posters");
var takeMeBackBtn = document.querySelector(".show-main");
var backToMainBtn = document.querySelector(".back-to-main");
var showMyPosterBtn = document.querySelector(".make-poster");
var titleInput = document.getElementById('poster-title');
var imageInput = document.getElementById('poster-image-url');
var quoteInput = document.getElementById('poster-quote')

// event listeners go here 👇
window.addEventListener("load", generatePoster);
showRandomPosterBtn.addEventListener("click", generatePoster);
makeYourOwnPosterBtn.addEventListener("click", showFormPage);
showSavedPostersBtn.addEventListener("click", showSavedPosterPage)
takeMeBackBtn.addEventListener("click", takeMeBack);
backToMainBtn.addEventListener("click", backToMain);
showMyPosterBtn.addEventListener("click", createUserPoster)
// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generatePoster() {
  image.src = images[getRandomIndex(images)];
  title.innerText = titles[getRandomIndex(titles)];
  quote.innerText = quotes[getRandomIndex(quotes)];
};

function showFormPage() {
  mainPage.classList.add("hidden");
  formPage.classList.remove("hidden");
};

function showSavedPosterPage() {
  mainPage.classList.add("hidden");
  savedPostersPage.classList.remove("hidden");
};

function takeMeBack() {
  mainPage.classList.remove("hidden");
  formPage.classList.add("hidden");
};

function backToMain(){
  mainPage.classList.remove("hidden");
  savedPostersPage.classList.add("hidden");
};

function createUserPoster() {
  event.preventDefault();
  formPage.classList.add("hidden");
  mainPage.classList.remove("hidden");
  images.push(imageInput.value);
  titles.push(titleInput.value);
  quotes.push(quoteInput.value);
  currentPoster = new Poster(imageInput.value, titleInput.value, quoteInput.value);
  image.src = imageInput.value;
  title.innerText = titleInput.value;
  quote.innerText = quoteInput.value;
};
