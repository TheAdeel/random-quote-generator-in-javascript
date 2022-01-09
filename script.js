const colors = [
  "#0099e5",
  "#ff4c4c",
  "#34bf49",
  "#371777",
  "#f48924",
  "#7552cc",
  "#008374",
  "#008374",
];

// get all elements
const messageBox = document.querySelector(".message");
const message = document.querySelector(".message p");
const author = document.querySelector(".author");
const generateQuoteBtn = document.querySelector(".generate-quote");
const twitterShare = document.querySelector(".twitter-share");
const spinner = document.querySelector(".spinner");
const endPoint = "https://api.quotable.io/random";

// Lets fetch data from end point
generateQuoteBtn.addEventListener("click", getQuote);
async function getQuote(e) {
  spinner.classList.toggle("remove");

  await fetch(endPoint)
    .then((response) => response.json())
    .then((data) => {
      message.textContent = data.content;
      author.textContent = data.author;
      twitterShare.href = `https://twitter.com/intent/tweet?text=${data.content}`;
      spinner.classList.toggle("remove");
      changeColors();
    })
    .catch((err) => {
      console.log(err);
    });
}

// Change colors of some elments
function changeColors() {
  let num = Math.floor(Math.random() * 7);
  let color = colors[num];
  console.log(num);
  console.log(color);
  generateQuoteBtn.style.background = color;
  author.style.borderColor = color;
  messageBox.style.borderColor = color;
}
changeColors();
