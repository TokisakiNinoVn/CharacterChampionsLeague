document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
    }
});
window.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || event.keyCode === 123) {
      alert('Access to website source code is not allowed!');
      event.preventDefault();
    }
  });
  
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    // alert('>> Tokisaki Nino: "Nói không với "Inspect" web nhé!"\n>> Github: TokisakiNinoVn.');
    alert('>> Tokisaki Nino: "Say no to "Inspect" website!"\n>> Github: TokisakiNinoVn.');
});
  


const imageElement = document.querySelector('.image');
const newImageUrls = [
  './images/AI.jpg',
  './images/1.jpg',
  './images/2.jpg',
  './images/4.png',
  './images/kurumi.jpg',
  './images/kurumiNewY.jpg',

];

function randomizeImage() {
  const randomImageUrl = newImageUrls[Math.floor(Math.random() * newImageUrls.length)];
  imageElement.src = randomImageUrl;
}

window.onload = randomizeImage;


