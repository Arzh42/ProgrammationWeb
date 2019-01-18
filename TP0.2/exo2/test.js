let inter;
window.onload = function() {
	
	
	inter = setInterval(function() {
		changeOrientation();
	},1000);	
}
function changeOrientation() {
	let img = document.getElementById("image");
	if (img.classList.contains("imageDroite")) {
		img.classList.remove("imageDroite");
		img.classList.add("imageGauche");
	}
	else {
		img.classList.remove("imageGauche");
		image.classList.add("imageDroite");
	}
}
function clickFunction() {
	clearInterval(inter);
}