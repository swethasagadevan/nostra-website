
var flashclose = document.getElementById("flashclose");
var flashdiscount = document.getElementById("flashdiscount");

flashclose.addEventListener("click", function () {
    flashdiscount.style.display = "none";
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


// selecting sections
var filter = document.getElementById("sec-filter")
var secOccasions = document.getElementById("sec-occasionsFilter")
var secColors = document.getElementById("sec-colorsFilter")
var secArrivals = document.getElementById("sec-arrivalsFilter")

// selecting filters

var occasionsFilter = document.getElementsByName("Occasions")
var colorsFilter = document.getElementsByName("Colors")
var arrivalsFilter = document.getElementsByName("Arrivals")



var selectedOccasion=[];
var selectedColors=[];
var selectedArrival=[];

secOccasions.addEventListener("click",function(){
    selectedOccasion=[];
    for (i=0;i<occasionsFilter.length;i++){        
        if (occasionsFilter[i].checked){
            //console.log("checked")
            selectedOccasion.push(occasionsFilter[i].value.toUpperCase())
        }
    }
})

secColors.addEventListener("click",function(){
    selectedColors=[];
    for (i=0;i<colorsFilter.length;i++){        
        if (colorsFilter[i].checked){
            //console.log("checked")
            selectedColors.push(colorsFilter[i].value.toUpperCase())
        }
    }
})

secArrivals.addEventListener("click",function(){
    selectedArrival=[];
    for (i=0;i<arrivalsFilter.length;i++){        
        if (arrivalsFilter[i].checked){
            //console.log("checked")
            selectedArrival.push(arrivalsFilter[i].value.toUpperCase())
        }
    }
})


// collection selection


var collections = document.getElementById("sec-collections")
var collectiondiv = collections.querySelectorAll("div")
var collectiontag = collections.querySelectorAll("#tag")
var noResult = document.getElementById("noResult")

//console.log(collectiondiv[0])

filter.addEventListener("click",function(){

    var selectedFilter = selectedOccasion.concat(selectedColors,selectedArrival)

    // console.log(selectedOccasion,selectedColors,selectedArrival)
    
    // var collectionName = collectiontag[i].textContent.toUpperCase()

    for (i=0;i<collectiontag.length;i++){
        
        var collectionName = collectiontag[i].textContent.toUpperCase()
            // console.log(collectionName)
            //console.log(selectedFilter)
        isAvailable=false;
        for (j=0;j<selectedFilter.length;j++){
            if (collectionName.includes(selectedFilter[j]))
            {
                //console.log(collectiondiv[i],"true")
                isAvailable=true;
                
            }
            
            if (isAvailable == true){
                //console.log(collectiondiv[i],"none")
                collectiondiv[i].style.display="block"
            }
            else{
                collectiondiv[i].style.display="none"
                
            }
        }

        }
        
    })


    var inputcollection = document.getElementById("inputcollection")

    inputcollection.addEventListener("keyup",function(event){

        // console.log(event.key)
        //console.log(collectiontag)
        //console.log(inputcollection.value)

        var collectionname = [...collectiontag].map(function(a,index){
            return a.innerHTML
        })

        // console.log(collectionname)

       collectionname.forEach(function(colname,index){
            if( colname.includes(inputcollection.value)){
                collectiondiv[index].style.display="block";
            }
            else{
                collectiondiv[index].style.display="none";

            }
       })

    })

      
