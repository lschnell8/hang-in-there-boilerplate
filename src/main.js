// query selector variables go here 👇
// Buttons:
var backToMainBtn = document.querySelector(".back-to-main");
var makeYourOwnPosterBtn = document.querySelector(".show-form");
var savePosterBtn = document.querySelector('.save-poster');
var showMyPosterBtn = document.querySelector(".make-poster");
var showRandomPosterBtn = document.querySelector(".show-random");
var showSavedPostersBtn = document.querySelector('.show-saved');
var takeMeBackBtn = document.querySelector(".show-main");

// Pages:
var formPage = document.querySelector(".poster-form");
var mainPage = document.querySelector(".main-poster");
var savedPostersPage = document.querySelector(".saved-posters");

// Misc:
var image = document.querySelector(".poster-img");
var imageInput = document.getElementById('poster-image-url');
var savedPostersGrid = document.querySelector('.saved-posters-grid');
var title = document.querySelector(".poster-title");
var titleInput = document.getElementById('poster-title');
var quote = document.querySelector(".poster-quote");
var quoteInput = document.getElementById('poster-quote');

// event listeners go here 👇
window.addEventListener("load", generatePoster);
backToMainBtn.addEventListener("click", backToMain);
makeYourOwnPosterBtn.addEventListener("click", showFormPage);
savedPostersPage.addEventListener("dblclick", removePoster);
savePosterBtn.addEventListener("click", savePoster);
showMyPosterBtn.addEventListener("click", createUserPoster)
showRandomPosterBtn.addEventListener("click", generatePoster);
showSavedPostersBtn.addEventListener("click", showSavedPostersPage);
takeMeBackBtn.addEventListener("click", takeMeBack);
// functions and event handlers go here 👇
// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generatePoster() {
  image.src = images[getRandomIndex(images)];
  title.innerText = titles[getRandomIndex(titles)];
  quote.innerText = quotes[getRandomIndex(quotes)];
  currentPoster = new Poster(image.src, title.innerText, quote.innerText);
};

function showFormPage() {
  hideMainPage();
  unhideFormPage();
};

function showSavedPostersPage() {
  hideMainPage();
  unhideSavedPostersPage();
  displayMiniPoster();
};

function takeMeBack() {
  unhideMainPage();
  hideFormPage();
};

function backToMain(){
  unhideMainPage();
  hideSavedPosterPage();
};

function createUserPoster() {
  event.preventDefault();
  hideFormPage();
  unhideMainPage();
  images.push(imageInput.value);
  titles.push(titleInput.value);
  quotes.push(quoteInput.value);
  currentPoster = new Poster(imageInput.value, titleInput.value, quoteInput.value);
  image.src = imageInput.value;
  title.innerText = titleInput.value;
  quote.innerText = quoteInput.value;
};

function savePoster() {
if (!savedPosters.includes(currentPoster)) {
  savedPosters.push(currentPoster);
  };
};


function displayMiniPoster() {
  savedPostersGrid.innerHTML = "";
  for (var i = 0; i < savedPosters.length; i++) {
    savedPostersGrid.innerHTML += `<div class="mini-poster" id=${savedPosters[i].id}><img class="poster-img" src=${savedPosters[i].imageURL} alt="nothin' to see here">
      <h2 class="poster-title">${savedPosters[i].title}</h2>
      <h4 class="poster-quote">${savedPosters[i].quote}</h4></div>`
}
};

function removePoster() {
  var trash = event.target.closest('.mini-poster')
  for(var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].id === Number(trash.id)) {
      savedPosters.splice([i], 1);
      displayMiniPoster();
    }
  }
};

function hideMainPage() {
  mainPage.classList.add("hidden");
};

function unhideFormPage() {
  formPage.classList.remove("hidden");
};

function unhideSavedPostersPage() {
  savedPostersPage.classList.remove('hidden');
};

function unhideMainPage() {
  mainPage.classList.remove("hidden");
};

function hideFormPage() {
  formPage.classList.add("hidden");
};

function hideSavedPosterPage() {
  savedPostersPage.classList.add("hidden");
};
