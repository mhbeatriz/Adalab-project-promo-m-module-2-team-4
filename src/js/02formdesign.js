'use strict'

const palette1=document.querySelector(".palette-1");
const palette2=document.querySelector(".palette-2");
const palette3=document.querySelector(".palette-3");

const label1= document.querySelector(".label1");
const label2= document.querySelector(".label2");
const label3= document.querySelector(".label3");


function labelPallete1 (){
    //line
    card.line.classList.add ("js-color2");
    card.line.classList.remove ("js-color5", "js-color8");
    //title
    card.title.classList.add ("js-color1");
    card.title.classList.remove ("js-color4", "js-color7");
    //border 
    card.border.forEach((bordericon) => bordericon.classList.add("js-color3"));
        // card.border.classList.add ("js-color3");
    // card.border.classList.remove ("js-color6", "js-color9");
    card.border.forEach((bordericon) => bordericon.classList.remove ("js-color6", "js-color9"));
    //icon
    card.icon.classList.add ("js-color1");
    card.icon.classList.remove ("js-color4", "js-color7");
     
    FormData.pallete="1"; 
}
function labelPallete2 (){
    //line
    card.line.classList.add ("js-color5");
    card.line.classList.remove ("js-color2", "js-color8");
    //title
    card.title.classList.add ("js-color4");
    card.title.classList.remove ("js-color1", "js-color7");
    //border 
    card.border.forEach((bordericon) => bordericon.classList.add("js-color6"));
    // card.border.classList.add ("js-color6");
    // card.border.classList.remove ("js-color3", "js-color9");
    card.border.forEach((bordericon) => bordericon.classList.remove ("js-color3", "js-color9"));
    //icon
    card.icon.classList.add ("js-color4");
    card.icon.classList.remove ("js-color1", "js-color7");
     
    FormData.pallete="2"; 
}
function labelPallete3 (){
    //line
    card.line.classList.add ("js-color8");
    card.line.classList.remove ("js-color2", "js-color5");
    //title
    card.title.classList.add ("js-color7");
    card.title.classList.remove ("js-color1", "js-color4");
    //border 
    // card.border.classList.add ("js-color9");
    card.border.forEach((bordericon) => bordericon.classList.add("js-color9"));
    // card.border.classList.remove ("js-color3", "js-color6");
    card.border.forEach((bordericon) => bordericon.classList.remove ("js-color6", "js-color3"));
    //icon
    card.icon.classList.add ("js-color4");
    card.icon.classList.remove ("js-color1", "js-color7");
     
    FormData.pallete="3"; 
}

label2.addEventListener('change', labelPallete2);

label1.addEventListener('change', labelPallete1);

label3.addEventListener('change', labelPallete3);





