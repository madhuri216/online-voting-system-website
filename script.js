function vote(candidate) {
  alert("Thank you! You voted for " + candidate + ".");
}

function loadImage(event, imgId) {
  const image = document.getElementById(imgId);
  image.src = URL.createObjectURL(event.target.files[0]);
}
