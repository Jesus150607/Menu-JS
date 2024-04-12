var spinner=document.querySelector("#spinner");
document.querySelector("#btnver").onclick=()=>{
  spinner.innerHTML="<img src='spinner3.gif' width=400px height=300px>";
  setTimeout(()=>{
    spinner.innerHTML="<h1>Hola!</h1>";
  },2000);
}