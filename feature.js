const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");

// Function to move the "No" button
function moveButton() {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;

  const phrases = ["Nice try!🤣", "You can't escape!😗", "Just say yes!🥲", "Really?🙄"];
  noButton.innerText = phrases[Math.floor(Math.random() * phrases.length)];
}

// Function for when she clicks "Yes"
function handleYesClick() {
  document.getElementById("question").innerText = "buahhahahhaha!!I KNEW IT LOVE YOU MY KUCHIEPUCHIEEEE!!💋💋😚😘💖";
  document.querySelector(".buttons").style.display = "none";
  document.getElementById("cat-img").src =
    "IMG_20251228_144635.png";
}

