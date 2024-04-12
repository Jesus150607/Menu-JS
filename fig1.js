let valor = document.querySelector("#ancho");
let value = document.querySelector("#vancho"); 
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