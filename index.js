function showMenu(){
	let menu=document.querySelector("#mobile-menu");
	menu.style.display="block";
}
function closeMenu(){
	let menu=document.querySelector("#mobile-menu");
	menu.style.display="none";
}
function fadeIn(){
	this.style.opacity=1;
}
function fadeOut(){
	this.style.opacity=0.75;
}
let pictures=document.querySelectorAll(".articles>.article>.picture");
for(let i=0;i<pictures.length;i++){
	pictures[i].addEventListener("mouseover", fadeIn);
	pictures[i].addEventListener("mouseout", fadeOut);
}