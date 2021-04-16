var csat = document.getElementById("csat").innerText;
window.addEventListener('wheel', function(event){
 if (event.deltaY < 0){
  console.log('scrolling up');
  csat = csat + 1;
  document.getElementById("csat").innerText = csat;
 }
 else if (event.deltaY > 0) {
  console.log('scrolling down');
  csat = csat - 1;
  document.getElementById("csat").innerText = csat;
 }
});
  

   

