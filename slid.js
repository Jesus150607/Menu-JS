let valor = document.querySelector("#valor");
let dv = document.querySelector("#value");
let cajita = document.querySelector("#cajita")
valor.oninput = () => {
  
  let n=parseInt(valor.value);
  dv.innerHTML = n;
  cajita.style.width=n+"px";
  cajita.style.height=n+"px";
}