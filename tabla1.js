var fila=document.querySelector("#fila");
var columna = document.querySelector("#columna");

var vfila = document.querySelector("#vfila");
var vcolumna = document.querySelector("#vcolumna");

let tabla = document.querySelector("#tabla");

vfila.innerHTML=fila.value;

fila.oninput =()=>{
  let f = parseInt(fila.value);
  let c = parseInt(columna.value);
  
  vfila.innerHTML=f;
  
  let tabla2 = '';
  
  for (let i = 0; i < f; i++) {
            tabla2 += '<tr>';
            for (let j = 0; j < c; j++) {
                tabla2 += '<td></td>';
            }
            tabla2 += '</tr>';
        }

        tabla.innerHTML = tabla2;
}

vcolumna.innerHTML=columna.value;

columna.oninput =()=>{
  let f = parseInt(fila.value);
  let c = parseInt(columna.value);
  
  vcolumna.innerHTML=c;
  
  let tabla2 = '';
  
  for (let i = 0; i < f; i++) {
            tabla2 += '<tr>';
            for (let j = 0; j < c; j++) {
                tabla2 += '<td></td>';
            }
            tabla2 += '</tr>';
        }

        tabla.innerHTML = tabla2;
}
