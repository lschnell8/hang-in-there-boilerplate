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
var quoteInput = document.getElementById('poster-quote');
var savePosterBtn = document.querySelector('.save-poster');
var showSavedPostersBtn = document.querySelector('.show-saved');
// event listeners go here 👇
window.addEventListener("load", generatePoster);
showRandomPosterBtn.addEventListener("click", generatePoster);
makeYourOwnPosterBtn.addEventListener("click", showFormPage);
showSavedPostersBtn.addEventListener("click", showSavedPosterPage)
takeMeBackBtn.addEventListener("click", takeMeBack);
backToMainBtn.addEventListener("click", backToMain);
showMyPosterBtn.addEventListener("click", createUserPoster)
savePosterBtn.addEventListener("click", savePoster);
showSavedPostersBtn.addEventListener("click", showSavedPostersPage);
// savedPostersPage.addEventListener("dblclick", removePoster);
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

function savePoster() {
if (!savedPosters.includes(currentPoster)) {
  savedPosters.push(currentPoster);
  };
};

function showSavedPostersPage() {
  mainPage.classList.add('hidden');
  savedPostersPage.classList.remove('hidden');
  displayMiniPoster();
};

function displayMiniPoster() {
  // clearSavedAreaInnerHTML();
  for (var i = 0; i < savedPosters.length; i++) {
    var miniPoster = `<article class="saved-posters-grid mini-cover" id=${savedPosters[i].id}>
      <img class="poster-img" src=${savedPosters[i].imageURL} alt="nothin' to see here">
      <h1 class="poster-title">${savedPosters[i].title}</h1>
      <h3 class="poster-quote">${savedPosters[i].quote}</h3>
    </article>`
    savedPostersPage.insertAdjacentHTML("afterbegin", miniPoster)
};
};

// function clearSavedAreaInnerHTML() {
//   savedPostersPage.innerHTML = '';
// };

// function removePoster() {
//   event.target.closest('.mini-poster')
//   for(var i = 0; i < savedPosters.length; i++) {
//     savedPosters[i].splice(i, 1);
//   }
// }
