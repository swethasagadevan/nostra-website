
var flashclose = document.getElementById("flashclose");
var flashdiscount= document.getElementById("flashdiscount");

flashclose.addEventListener("click",function(){
    flashdiscount.style.display="none";
})

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
 

var sliderarrowleft = document.querySelector(".slider-arrow-left")
var sliderarrowright = document.querySelector(".slider-arrow-right")
var sliderimg=document.getElementById("sliderimg")
var slidermargin=0;

   

sliderarrowleft.addEventListener("click",function(){

    //console.log(slidermargin)
    slidermargin=slidermargin-93;
    //console.log(slidermargin)
    if (slidermargin>0){
        sliderimg.style.marginLeft="-"+slidermargin +"vw";

        //console.log(slidermargin)
    }
    else{
        slidermargin=200;
        sliderimg.style.marginLeft="-"+slidermargin+"vw";
    }

    
})


sliderarrowright.addEventListener("click",function(){
    //console.log(slidermargin)
    slidermargin= slidermargin+93;
   // console.log(slidermargin)
    if(slidermargin>200){
        slidermargin=0;
        sliderimg.style.marginLeft=0;
    }
    else{
        sliderimg.style.marginLeft="-"+slidermargin+"vw";
        
    }
    })
