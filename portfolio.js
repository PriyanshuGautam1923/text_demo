$("#navButton").click(function () {
  $("#img").toggleClass("navimg");
});
const pichov = document.getElementsByClassName("pichov");
const image = document.getElementsByClassName("bimage");
const text = document.getElementsByClassName("btext");
for (let j = 0; j < image.length; j++) {
  pichov[j].addEventListener("mouseenter", function () {
    image[j].classList.add("script-handle-image");
    text[j].classList.remove("d-none");
    this.style.backgroundColor = "rgb(23 21 21)";
  });
  pichov[j].addEventListener("mouseleave", function () {
    text[j].classList.add("d-none");
    image[j].classList.remove("script-handle-image");
    this.style.backgroundColor = "white";
  });
}

/*var obj1=document.getElementById("remove1");
var obje1=document.getElementById("rem1");
var objec1=document.getElementById("sp1");
obj1.addEventListener("mouseover",function(){
	obje1.classList.toggle("hide");
	obj1.classList.toggle("show");
	obj1.classList.toggle("justify-content-center");
	objec1.classList.toggle("hide");
});
	
obj1.addEventListener("mouseout",function(){
	obje1.classList.toggle("hide");
	obj1.classList.toggle("show");
	obj1.classList.toggle("justify-content-center");
	objec1.classList.toggle("hide");
});
	
var obj2=document.getElementById("remove2");
var obje2=document.getElementById("rem2");
var objec2=document.getElementById("sp2");
obj2.addEventListener("mouseover",function(){
	obje2.classList.toggle("hide");
	obj2.classList.toggle("show");
	obj2.classList.toggle("justify-content-center");
	objec2.classList.toggle("hide");
});
	
obj2.addEventListener("mouseout",function(){
	obje2.classList.toggle("hide");
	obj2.classList.toggle("show");
	obj2.classList.toggle("justify-content-center");
	objec2.classList.toggle("hide");
});
	var obj3=document.getElementById("remove3");
var obje3=document.getElementById("rem3");
var objec3=document.getElementById("sp3");
obj3.addEventListener("mouseover",function(){
	obje3.classList.toggle("hide");
	obj3.classList.toggle("show");
	objec3.classList.toggle("hide");
});
	
obj3.addEventListener("mouseout",function(){
	obje3.classList.toggle("hide");
	obj3.classList.toggle("show");
	obj3.classList.toggle("justify-content-center");
	objec3.classList.toggle("hide");
});
	var obj4=document.getElementById("remove4");
var obje4=document.getElementById("rem4");
var objec4=document.getElementById("sp4");
obj4.addEventListener("mouseover",function(){
	obje4.classList.toggle("hide");
	obj4.classList.toggle("show");
	obj4.classList.toggle("justify-content-center");
	objec4.classList.toggle("hide");
});
	
obj4.addEventListener("mouseout",function(){
	obje4.classList.toggle("hide");
	obj4.classList.toggle("show");
	obj4.classList.toggle("justify-content-center");
	objec4.classList.toggle("hide");
});
	var obj5=document.getElementById("remove5");
var obje5=document.getElementById("rem5");
var objec5=document.getElementById("sp5");
obj5.addEventListener("mouseover",function(){
	obje5.classList.toggle("hide");
	obj5.classList.toggle("show");
	obj5.classList.toggle("justify-content-center");
	objec5.classList.toggle("hide");
});
	
obj5.addEventListener("mouseout",function(){
	obje5.classList.toggle("hide");
	obj5.classList.toggle("show");
	obj5.classList.toggle("justify-content-center");
	objec5.classList.toggle("hide");
});
*/
var cc = document.getElementsByClassName("chesscom")[0];
cc.addEventListener("click", function () {
  window.location.href = "https://www.chess.com/member/pransoo";
});
var lc = document.getElementsByClassName("lichess")[0];
lc.addEventListener("click", function () {
  window.location.href = "https://lichess.org/@/priyanshugautam1";
});
var gh = document.getElementsByClassName("github")[0];
gh.addEventListener("click", function () {
  window.location.href = "https://github.com/PriyanshuGautam1923";
});
var ln = document.getElementsByClassName("linkedin")[0];
ln.addEventListener("click", function () {
  window.location.href =
    "https://www.linkedin.com/in/priyanshu-gautam-66b7b2205/";
});
var f = document.getElementsByClassName("fb")[0];
f.addEventListener("click", function () {
  window.location.href = "https://www.facebook.com/priyanshu.gautam.73700136/";
});
var i = document.getElementsByClassName("ig")[0];
i.addEventListener("click", function () {
  window.location.href = "https://www.instagram.com/priyanshugautam1923/";
});
