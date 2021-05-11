var aside= document.getElementById("mainAside");
var obj= document.getElementById("cntnt");
var asideOn = false

document.getElementById("btton").addEventListener("click",function(){
	if(asideOn){
		aside.style.left="-200px";
		asideOn=false;
	}else{
		aside.style.left="0px";
		asideOn=true;
	}
	obj.classList.toggle("mar");
});