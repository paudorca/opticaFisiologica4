function getValors(){
  var e = document.getElementById("valorVision");
  var vision = e.options[e.selectedIndex].value;
  var c = document.getElementById("valorColor"); 
  var color = c.options[c.selectedIndex].value;
  var conv = document.getElementById('square-input').value; 
  localStorage.setItem("color",color);
  localStorage.setItem("conversio",conv);  
  if (vision == 'central') {
    var win = window.open("central.html", '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
  }
  else {
    var win = window.open("peripheric.html", '_blank');
    // Cambiar el foco al nuevo tab (punto opcional)
    win.focus();
  }
}