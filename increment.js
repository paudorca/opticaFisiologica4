function getValors(){
  var c = document.getElementById("valorColor"); 
  var color = c.options[c.selectedIndex].value;
  var conv = document.getElementById('square-input').value; 
  localStorage.setItem("color",color);
  localStorage.setItem("conversio",conv);  
  var win = window.open("increment.html", '_blank');
  win.focus();
}