var csat = parseInt(document.getElementById("csat").innerHTML);
window.addEventListener('wheel', function(event){
 if (event.deltaY < 0){
  console.log('scrolling up');
  csat = csat + 1;
  document.getElementById("csat").innerHTML = csat;
 }
 else if (event.deltaY > 0) {
  console.log('scrolling down');
  csat = csat - 1;
  document.getElementById("csat").innerHTML = csat;
 }
});
  

   

