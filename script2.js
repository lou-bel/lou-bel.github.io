let carouselWidth = 400; 

let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");
let textRow = document.getElementById("carousel-image-row");

let imageNum = 0
let textNum = 0

function showNextImage() {

	imageNum += 1
	textNum += 1
	checkControls()
	let shiftLeft = -(carouselWidth * imageNum)
	imageRow.style.left = shiftLeft + "px"
	textRow.style.left = shiftLeft + "px"
}

document.getElementById("button-next").onclick = showNextImage;

function showPrevImage() {

	
	imageNum -= 1
	checkControls()
	let shiftRight = -(carouselWidth * imageNum)
	imageRow.style.left = shiftRight + "px"
	
}

document.getElementById("button-previous").onclick = showPrevImage;

let totalImages = document.getElementsByClassName("carousel-image").length;

function checkControls() {
	
	if (imageNum===0) {
		prevButton.classList.add("hidden");
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden");
	}
	
	if (imageNum===totalImages-1) {
		nextButton.classList.add("hidden");
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden");
	}
} 


