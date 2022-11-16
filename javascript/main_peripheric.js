      const red = '#FF0000';
      const white = '#FFFFFF'; 
      const green = '#008000'; 
      const blue = '#0000FF'; 
      const red_factor = 21.26; 
      const white_factor = 100; 
      const green_factor = 71.52; 
      const blue_factor = 7.22; 
      

      window.addEventListener('load', (event) => {
        draw2(); 
      });

      const color = localStorage.getItem('color'); 

      let aux = 100/(localStorage.getItem('conversio')*2);

      console.log('aux es' + 100/(aux*2))

      function draw() {
      var can1 = document.getElementById("circulo");
      var ctx1 = can1.getContext("2d");
      let radius = document.getElementById('myRange2');
      let brillo = document.getElementById('myRange1'); 
    
      let brillo2 = (brillo.value/255) * 100;    
      if (radius.value > 101) { return; }

        ctx1.clearRect(0, 0, 500, 200);
        ctx1.beginPath();
        ctx1.arc(250, 100, parseInt(radius.value)*aux, 0, 2 * Math.PI);
        ctx1.fillStyle = color;
        ctx1.strokeStyle = color;
        ctx1.filter = `brightness(${brillo2}%)`;
        ctx1.fill();
  }
    
      function draw2() {
        var can2 = document.getElementById("circulo2");
        var ctx2 = can2.getContext("2d");
        let radius = document.getElementById('myRange3');
        let distancia = document.getElementById('myRange4'); 
            
        if (radius.value > 101) { return; }

          ctx2.clearRect(0, 0, 500, 200);
          ctx2.beginPath();
          ctx2.arc(250,10+((distancia.value -25)*aux)*2,parseInt(radius.value)*aux, 0, 2 * Math.PI);
          ctx2.fillStyle = red;
          ctx2.strokeStyle = red;
          ctx2.fill(); 
      }

function updateTextInput1(val) {
      document.getElementById('textInput1').value=val;
      console.log(val);  
      var ndr = parseFloat(val)/255.0; 
      var aux = 0.95*ndr + 0.05; 
      if (color == 'blue') {
        var result = blue_factor*Math.pow(aux,2.40); 
      }
      else if (color == 'red') {
        var result = red_factor*Math.pow(aux,2.40); 
      }
      else if (color == 'green') {
        var result = green_factor*Math.pow(aux,2.40); 
      }
      else {
        var result = white_factor*Math.pow(aux,2.40); 
      }
      let luminancia = document.getElementById('luminancia');
      luminancia.value = result.toFixed(2);
}

function updateTextInput2(val) {
  document.getElementById('textInput2').value=val; 
}

function updateTextInput3(val) {
  document.getElementById('textInput3').value=val; 
}

function updateTextInput4(val) {
  document.getElementById('textInput4').value=val; 
}
