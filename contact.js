// sliding navbar 
var navbar = document.getElementById("navbar")
var slidingnavclose =document.querySelector(".slidingnav-close");
var slidingnav = document.getElementById("slidingnav");

navbar.addEventListener("click",function(){
    slidingnav.style.display="block";
})

slidingnavclose.addEventListener("click",function(){
    slidingnav.style.display="none";
})