let dia= document.querySelector("#dia");
let vdia= document.querySelector("#vdia");
let sig= document.querySelector("#sig");
let fecha= document.querySelector("#fecha");
let img=document.querySelector("#img");

dia.oninput =()=>{
    fecha.innerHTML=sig.value;
    vdia.innerHTML=dia.value;
    let d=parseInt(dia.value);
    let f=(sig.value);
    fecha.innerHTML=d+"-"+f;
    if((d>=21&&f=="Marzo")||(d<=19&&f=="Abril"))
    img.innerHTML="<img src='\aries.jpg' width=600px height=500px >";
 if((d>=23&&f=="Septiembre")||(d<=22&&f=="Octubre"))
 img.innerHTML="<img src='\libra.jpg' width=600px height=500px>";

 if((d>=20&&f=="Abril")||(d<=20&&f=="Mayo"))
 img.innerHTML="<img src='ttt.jpg' width=600px height=500px>";

 if((d>=23&&f=="Octubre")||(d<=21&&f=="Noviembre"))
 img.innerHTML="<img src='\escor.jpg' width=600px height=500px>";
 if((d>=21&&f=="Mayo")||(d<=20&&f=="Junio"))
 img.innerHTML="<img src='\gemi.jpg' width=600px height=500px>";
 if((d>=22&&f=="Noviembre")||(d<=21&&f=="Diciembre"))
 img.innerHTML="<img src='\sagi.jpg' width=600px height=500px>";
 if((d>=21&&f=="Junio")||(d<=22&&f=="Julio"))
 img.innerHTML="<img src='\cancer.jpg' width=600px height=500px>";
 if((d>=22&&f=="Diciembre")||(d<=19&&f=="Enero"))
 img.innerHTML="<img src='\capri.jpg' width=600px height=500px>";
 if((d>=23&&f=="Julio")||(d<=22&&f=="Agosto"))
 img.innerHTML="<img src='\leo.jpg' width=600px height=500px>";
 if((d>=20&&f=="Enero")||(d<=18&&f=="Febrero"))
 img.innerHTML="<img src='\acuario.jpg' width=600px height=500px>";


 if((d>=23&&f=="Agosto")||(d<=22&&f=="Septiembre"))
 img.innerHTML="<img src='virgo.jpg' width=600px height=500px>";


 if((d>=19&&f=="Febrero")||(d<=20&&f=="Marzo"))
 img.innerHTML="<img src='\piscis.jpg' width=600px height=500px>";

 img.style.transform="rotateY(-180deg)";
 img.style.transition="all 0.5s linear";
 img.style.transitionStyle="preserve-3d";
 img.style.backfaceVisibility="hidden";
 setTimeout(()=>{
    img.style.transform="rotate(0deg)"
    img.style.transform="all 0.5s linear";
   
},250);
}
sig.onchange =()=>{
    fecha.innerHTML=sig.value;
    vdia.innerHTML=dia.value;
    let d=parseInt(dia.value);
    let f=(sig.value);
    fecha.innerHTML=d+"-"+f;
 
    if((d>=21&&f=="Marzo")||(d<=19&&f=="Abril"))
    img.innerHTML="<img src='\aries.jpg' width=600px height=500px >";
 if((d>=23&&f=="Septiembre")||(d<=22&&f=="Octubre"))
 img.innerHTML="<img src='\libra.jpg' width=600px height=500px>";

 if((d>=20&&f=="Abril")||(d<=20&&f=="Mayo"))
 img.innerHTML="<img src='ttt.jpg' width=600px height=500px>";

 if((d>=23&&f=="Octubre")||(d<=21&&f=="Noviembre"))
 img.innerHTML="<img src='\escor.jpg' width=600px height=500px>";
 if((d>=21&&f=="Mayo")||(d<=20&&f=="Junio"))
 img.innerHTML="<img src='\gemi.jpg' width=600px height=500px>";
 if((d>=22&&f=="Noviembre")||(d<=21&&f=="Diciembre"))
 img.innerHTML="<img src='\sagi.jpg' width=600px height=500px>";
 if((d>=21&&f=="Junio")||(d<=22&&f=="Julio"))
 img.innerHTML="<img src='\cancer.jpg' width=600px height=500px>";
 if((d>=22&&f=="Diciembre")||(d<=19&&f=="Enero"))
 img.innerHTML="<img src='\capri.jpg' width=600px height=500px>";
 if((d>=23&&f=="Julio")||(d<=22&&f=="Agosto"))
 img.innerHTML="<img src='\leo.jpg' width=600px height=500px>";
 if((d>=20&&f=="Enero")||(d<=18&&f=="Febrero"))
 img.innerHTML="<img src='\acuario.jpg' width=600px height=500px>";


 if((d>=23&&f=="Agosto")||(d<=22&&f=="Septiembre"))
 img.innerHTML="<img src='virgo.jpg' width=600px height=500px>";


 if((d>=19&&f=="Febrero")||(d<=20&&f=="Marzo"))
 img.innerHTML="<img src='\piscis.jpg' width=600px height=500px>";

 img.style.transform="rotateY(-180deg)";
 img.style.transition="all 0.5s linear";
 img.style.transitionStyle="preserve-3d";
 img.style.backfaceVisibility="hidden";
 setTimeout(()=>{
    img.style.transform="rotate(0deg)"
    img.style.transform="all 0.5s linear";
   
},250);
}