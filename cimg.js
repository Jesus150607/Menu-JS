let img=document.querySelector("#img");
document.querySelector("#btn1").onclick=()=>{
    img.innerHTML="<img src='\img1.jpeg' width=600px height=500px >";
    img.style.transform="rotateY(-180deg)";
    img.style.transition="all 0.5s linear";
    img.style.transitionStyle="preserve-3d";
    img.style.backfaceVisibility="hidden";
    setTimeout(()=>{
       img.style.transform="rotate(0deg)"
       img.style.transform="all 0.5s linear";
      
   },250);
}
document.querySelector("#btn2").onclick=()=>{
    img.innerHTML="<img src='\img3.jpeg' width=600px height=500px >";
    img.style.transform="rotateY(-180deg)";
    img.style.transition="all 0.5s linear";
    img.style.transitionStyle="preserve-3d";
    img.style.backfaceVisibility="hidden";
    setTimeout(()=>{
       img.style.transform="rotate(0deg)"
       img.style.transform="all 0.5s linear";
      
   },250);
}
document.querySelector("#btn3").onclick=()=>{
    img.innerHTML="<img src='\img5.jpeg' width=600px height=500px >";
    img.style.transform="rotateY(-180deg)";
    img.style.transition="all 0.5s linear";
    img.style.transitionStyle="preserve-3d";
    img.style.backfaceVisibility="hidden";
    setTimeout(()=>{
       img.style.transform="rotate(0deg)"
       img.style.transform="all 0.5s linear";
      
   },250);
}
document.querySelector("#btn4").onclick=()=>{
    img.innerHTML="<img src='\img2.jpeg' width=600px height=500px >";
    img.style.transform="rotateY(-180deg)";
    img.style.transition="all 0.5s linear";
    img.style.transitionStyle="preserve-3d";
    img.style.backfaceVisibility="hidden";
    setTimeout(()=>{
       img.style.transform="rotate(0deg)"
       img.style.transform="all 0.5s linear";
      
   },250);
}
