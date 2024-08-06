let anchor = document.getElementById("anchor");
let screen = window.innerHeight ;

 document.addEventListener("DOMContentLoaded", function(event) { 
 let anchor = document.getElementById("anchor");
 let screen = window.innerHeight / 2.8;

 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > screen || document.documentElement.scrollTop > screen) {
     anchor.style.display = "block";
   } else {
     anchor.style.display = "none";
   }
 }
  });

 function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  } 