var slider = document.getElementById("myRange1");
var output = document.getElementById("demo");
const red = '#FF0000';
const white = '#FFFFFF'; 
const green = '#008000'; 
const blue = '#0000FF'; 

let color = localStorage.getItem('color'); 
let conversio = localStorage.getItem('conversio'); 

let aux = 100/(localStorage.getItem('conversio')*2);

function circulo(val) {
    let canvasCirculo = document.getElementById("circulo"); 
    let ctx = canvasCirculo.getContext('2d'); 
    ctx.clearRect(0, 0, 500, 200);
    ctx.fillStyle = color; 
    ctx.strokeStyle = color; 
    ctx.filter = `brightness(${(val/255)*100}%)`;

    ctx.beginPath; 
    ctx.arc(250, 200, 20*aux, 0,2*Math.PI,true); 
    ctx.fill(); 
    ctx.stroke();
    
  }

function circulo_inferior(val) {
    let canvasCirculo = document.getElementById("circulo2"); 
    let ctx = canvasCirculo.getContext('2d'); 
    ctx.clearRect(0, 0, 500, 200);
      ctx.fillStyle = color; 
      ctx.strokeStyle = color; 
      ctx.filter = `brightness(${(val/255)*100}%)`;

      ctx.beginPath; 
      ctx.arc(250, 0, 20*aux, 0,2*Math.PI,false); 
      ctx.fill(); 
      ctx.stroke();
}

function sizeRadio(val) {
  let canvasCirculo = document.getElementById("circulo"); 
  let canvasCirculo2 = document.getElementById("circulo2"); 
  let ctx = canvasCirculo.getContext('2d'); 
  let ctx2 = canvasCirculo2.getContext('2d');   

        ctx.clearRect(0, 0, 500, 200);
        ctx2.clearRect(0, 0, 500, 200);

        ctx.beginPath();
        ctx.arc(250, 200, parseInt(val)*aux, 0, Math.PI,true);
        ctx.fill();

        ctx2.beginPath();
        ctx2.arc(250, 0, parseInt(val)*aux, 0, Math.PI,false);
        ctx2.fill();
}

function updateTextInput1(val) {
  document.getElementById('textInput1').value=val; 
  circulo(val);
}

function updateTextInput11(val) {
  document.getElementById('textInput11').value=val; 
  sizeRadio(val); 
}

function updateTextInput2(val) {
  document.getElementById('textInput2').value=val; 
  circulo_inferior(val); 
}

function updateTextInput22(val) { //fondo de pantalla
    document.getElementById('textInput22').value=val; 
    let color = 'rgb('+ val + ',' + val + ',' + val + ')'; 
    document.body.style.backgroundColor = color; 

    let canvasCirculo1 = document.getElementById("circulo"); 
    let ctx1 = canvasCirculo1.getContext('2d'); 

    ctx1.strokeStyle = color; 

    let canvasCirculo2 = document.getElementById("circulo2"); 
    let ctx2 = canvasCirculo2.getContext('2d'); 

      ctx2.strokeStyle = color; 
}