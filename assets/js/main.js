// Define City Buttons
var KabulBtn=document.querySelector(".Kabul");
var HeratBtn=document.querySelector(".Herat");
var MazarBtn=document.querySelector(".Mazar");
var NingarharBtn=document.querySelector(".Ningarhar");

//Define City Dives
var City_Kabul=document.querySelector(".City_Kabul");
var City_Herat=document.querySelector(".City_Herat");
var City_Mazar=document.querySelector(".City_Mazar");
var City_Ningarhar=document.querySelector(".City_Ningarhar");

function city(showContect){
    City_Herat.setAttribute("id","hidden");
    City_Mazar.setAttribute("id","hidden");
    City_Ningarhar.setAttribute("id","hidden");
    City_Kabul.setAttribute("id","hidden");
    if(showContect==City_Kabul){
        City_Kabul.removeAttribute("id");
    }
    else if(showContect==City_Herat){
        City_Herat.removeAttribute("id");
    }
    else if(showContect==City_Mazar){
        City_Mazar.removeAttribute("id");
    }
    else if(showContect==City_Ningarhar){
        City_Ningarhar.removeAttribute("id");
    }

}

