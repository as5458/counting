const decbtn=document.getElementById("decbt");
const resbtn=document.getElementById("resbt");
const incbtn=document.getElementById("incbt");
const countlabel=document.getElementById("lab");
let count=0;
incbtn.onclick=function() {
    count++;
    countlabel.textContent=count;
}
decbtn.onclick=function (){
    count--;
    countlabel.textContent=count;
}
resbtn.onclick=function(){
   count=0;
    countlabel.textContent=count;
}