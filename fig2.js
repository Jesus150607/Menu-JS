let valor = document.querySelector("#ancho");
let value = document.querySelector("#vancho"); 
let sombra="";
let caja =document.querySelector("#caja"); 
valor.oninput=()=>{
  let n=parseInt(valor.value);
  value.innerHTML=n;
  caja.style.width=n+"px"
}
let alto = document.querySelector("#alto");
let altu = document.querySelector("#valto"); 
alto.oninput=()=>{
  let f=parseInt(alto.value);
  altu.innerHTML=f;
  caja.style.height=f+"px"
}
let color =document.querySelector("#color");
color.onchange=()=>{ 
let co=color.value;
  caja.style.background=co;
}
let valo = document.querySelector("#anchob");
let valu = document.querySelector("#vanchob"); 
valo.oninput=()=>{
  let n=parseInt(valo.value);
  valu.innerHTML=n;
  caja.style.borderWidth=n+"px";
}
let colorb=document.querySelector("#colorb");
colorb.oninput = () => {
  let n = colorb.value;
  caja.style.borderColor = n;
}
let tipob= document.querySelector("#tipob");
tipob.onchange = () => {
  let r = tipob.value;
  
  caja.style.borderStyle = r;
}
let valor1 = document.querySelector("#radius");
let value1 = document.querySelector("#vradius"); 
valor1.oninput=()=>{
  let a=parseInt(valor1.value);
  vradius.innerHTML=a;
  caja.style.borderRadius=a+"%";

}
let valor2 = document.querySelector("#rotate");
let value2 = document.querySelector("#vrotate"); 
valor2.oninput=()=>{
  let rot=parseInt(valor2.value);
  vrotate.innerHTML=rot;
  caja.style.rotate=rot+"deg";

}

let valor3 = document.querySelector("#traslatex");
let value3 = document.querySelector("#vtraslatex"); 
valor3.oninput=()=>{
  let x=parseInt(valor3.value);
  vtraslatex.innerHTML=x;
  caja.style.transform="translateX("+x+"px)";

}
let valor4 = document.querySelector("#traslatey");
let value4 = document.querySelector("#vtraslatey"); 
valor4.oninput=()=>{
  let y=parseInt(valor4.value);
  vtraslatey.innerHTML=y;
  caja.style.transform="translateY("+y+"px)";

}
let valor5 = document.querySelector("#escale");
let value5 = document.querySelector("#vescale"); 
valor5.oninput=()=>{
  let ess=parseInt(valor5.value);
  vescale.innerHTML=ess;
  caja.style.transform="scale("+ess+")";
}
let valor6 = document.querySelector("#sombrax");
let value6 = document.querySelector("#vsombrax"); 
valor6.oninput=()=>{
  let sx=parseInt(valor6.value);
  vsombrax.innerHTML=sx;
  caja.style.boxShadow= `${sx}px 10px 10px black`;

}
let valor7 = document.querySelector("#sombray");
let value7 = document.querySelector("#vsombray"); 
valor7.oninput=()=>{
  let sy=parseInt(valor7.value);
  vsombray.innerHTML=sy;
  caja.style.boxShadow=`10px ${sy}px 10px  black`;
}
let valor8 = document.querySelector("#tams");
let value8 = document.querySelector("#vtams"); 
valor8.oninput=()=>{
  let ts=parseInt(valor8.value);
  vtams.innerHTML=ts;
  caja.style.boxShadow=`10px  10px  10px ${ts}px black`;

}
let valor9 = document.querySelector("#dis");
let value9 = document.querySelector("#vdis"); 
valor9.oninput=()=>{
  let ds=parseInt(valor9.value);
  vtams.innerHTML=ds;
  caja.style.boxShadow=`10px  10px ${ds}px 10px black`;

}
let valor10 = document.querySelector("#vcolors");
 
valor10.oninput=()=>{
  let cso=valor10.value;
  vcolors.innerHTML=cso;
  caja.style.boxShadow="10px  10px  10px "+cso;

}

