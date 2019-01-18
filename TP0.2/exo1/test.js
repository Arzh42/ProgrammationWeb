
window.onload = function() {
	function fact(b) {
		if (b==0) {
			return 1;
		}
		else {
			return b*fact(b-1);
		}
	}
	let div = document.createElement("h1");
	div.innerHTML = "Bonjour le monde "+fact(9);
	document.getElementById("test").appendChild(div);
}