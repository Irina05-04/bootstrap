$(document).ready(function(){
   $(function (){   
   $("#back-top a").click(function (){
     $("body,html").animate({
       scrollTop:0
     }, 'fast');
   });
 });  
});