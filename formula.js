var a=document.querySelector("#a");
var b= document.querySelector("#b");
var c = document.querySelector("#c");
var va=document.querySelector("#va");
var vb= document.querySelector("#vb");
var vc = document.querySelector("#vc");
var x1 = document.querySelector("#x1");
let x2 = document.querySelector("#x2");
a.oninput =()=>{
    let av = parseFloat(a.value);
    let bv = parseFloat(b.value);
    let cv = parseFloat(c.value);
    va.innerHTML=av;
    vb.innerHTML=bv;
    vc.innerHTML=cv;

    let factor=Math.pow(bv,2)-4*av*cv;
    if (factor ===0) {
        let k= (-bv/2*av).toFixed(2);
        x1.innerHTML= "X1 ="+k;
    } else  if(factor>0){
        let s1=((-bv)+Math.sqrt(factor))/(2*av) .toFixed(2);
        let s2=((-bv)-Math.sqrt(factor))/(2*av) .toFixed(2);
        x1.innerHTML= "X1 ="+s1;
        x2.innerHTML= "X2 ="+s2;
    }else if(factor<0){
        if (isNaN (factor)){
            x1.innerHTML= "No hay Solucion";
        }

    }
    
  
}
b.oninput =()=>{
    let av = parseFloat(a.value);
    let bv = parseFloat(b.value);
    let cv = parseFloat(c.value);
    va.innerHTML=av;
    vb.innerHTML=bv;
    vc.innerHTML=cv;

    let factor=Math.pow(bv,2)-4*av*cv;
    if (factor ===0) {
        let k= (-bv/2*av).toFixed(2);
        x1.innerHTML= "X1 ="+k;
    } else  if(factor>0){
        let s1=((-bv)+Math.sqrt(factor))/(2*av) .toFixed(2);
        let s2=((-bv)-Math.sqrt(factor))/(2*av) .toFixed(2);
        x1.innerHTML= "X1 ="+s1;
        x2.innerHTML= "X2 ="+s2;
    }else if(factor<0){
        if (isNaN (factor)){
            x1.innerHTML= "No hay Solucion";
        }

    }
     
   
}
c.oninput =()=>{
    let av = parseFloat(a.value);
    let bv = parseFloat(b.value);
    let cv = parseFloat(c.value);
    va.innerHTML=av;
    vb.innerHTML=bv;
    vc.innerHTML=cv;

    let factor=Math.pow(bv,2)-4*av*cv;
    if (factor ===0) {
        let k= (-bv/2*av).toFixed(2);
        x1.innerHTML= "X1 ="+k;
    } else  if(factor>0){
        let s1=((-bv)+Math.sqrt(factor))/(2*av) .toFixed(2);
        let s2=((-bv)-Math.sqrt(factor))/(2*av) .toFixed(2);
        x1.innerHTML= "X1 ="+s1;
        x2.innerHTML= "X2 ="+s2;
    }else if(factor<0){
        if (isNaN (factor)){
            x1.innerHTML= "No hay Solucion";
        }

    }
 
}
function updateRoots() {
    let av = parseFloat(a.value);
    let bv = parseFloat(b.value);
    let cv = parseFloat(c.value);
    va.innerHTML = av;
    vb.innerHTML = bv;
    vc.innerHTML = cv;

    let factor = Math.pow(bv, 2) - 4 * av * cv;
    if (factor === 0) {
        let k = (-bv / (2 * av)).toFixed(2);
        x1.innerHTML = "X1 =" + k.toFixed(2);
        x2.innerHTML = ""; 
    } else if (factor > 0) {
        let s1 = ((-bv) + Math.sqrt(factor)) / (2 * av).toFixed(2);
        let s2 = ((-bv) - Math.sqrt(factor)) / (2 * av).toFixed(2);
        x1.innerHTML = "X1 =" + s1.toFixed(2);
        x2.innerHTML = "X2 =" + s2.toFixed(2);
    } else if (factor < 0) {
        x1.innerHTML = "No hay Solucion";
        x2.innerHTML = ""; 
    }
}

a.oninput = updateRoots;
b.oninput = updateRoots;
c.oninput = updateRoots;

