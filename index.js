let modal = document.getElementById("modal");
let videos = [];
for (let i = 0; i < 8; i++) {
  videos.push(document.getElementById("video" + i));
}
let dots = document.getElementsByClassName("dot");

function openModal(index) {
modal.style.display = "block";
showVideo(index);
videos[index].contentWindow.postMessage('{"method":"play"}', "*");
}


function closeModal() {
modal.style.display = "none";
for (let video of videos) {
video.contentWindow.postMessage('{"method":"pause"}', "*");
}
}

function showVideo(index) {
for (let video of videos) {
video.contentWindow.postMessage('{"method":"pause"}', "*");
}

for (let i = 0; i < 8; i++) {
if (i == index) {
  videos[i].style.display = "block";
  dots[i].className = "dot active";
  videos[i].contentWindow.postMessage('{"method":"play"}', "*");
} else {
  videos[i].style.display = "none";
  dots[i].className = "dot";
}
}
}
document.onkeydown = function(e) {
switch (e.keyCode) {
case 27: 
  closeModal();
  break;
}
};
function scrollSliderLeft() {
let slides = document.querySelector(".slides");
if (slides.scrollLeft > 0) {
slides.scrollBy({left: -200, behavior: "smooth"});
} else {
console.log("Reached the left end of the slider.");
}
}

function scrollSliderRight() {
let slides = document.querySelector(".slides");
slides.scrollBy({left: 200, behavior: "smooth"});
}
