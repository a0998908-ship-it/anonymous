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
    "https://scontent.fsxr1-2.fna.fbcdn.net/v/t1.15752-9/604251540_884371850946668_5818772362644901665_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ocfEfyT9uOgQ7kNvwHvbpMs&_nc_oc=Adk_QQ5zWT2tXi2h4DQcTuvBzyyCwrWwLy6xYVEnWJFZSIYosrcvtD7m8sTbAVpGOwGL-9kDWkzVZK55cSdPx3n_&_nc_zt=23&_nc_ht=scontent.fsxr1-2.fna&oh=03_Q7cD4gFTWxHM6WtitDM0-yTYXyD8c1UvDqY-UXOXjKzn-jp9og&oe=69B4C571";
}
