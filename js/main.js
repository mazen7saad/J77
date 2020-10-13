

/*console.log('Hello World!');*/


function updateDate(){
  var date = new Date();
  var setTime = document.getElementById("setTime");
  
  setTime.innerHTML = date.getHours() + ":" + date.getMinutes()+":"+date.getSeconds();
  
  var setDate = document.getElementById("setDate");
  setDate.innerHTML = date.getDate() +"-"+parseInt(date.getMonth()+1)+"-"+date.getFullyear();
}

setInterval(updateDate , 100);
onload = updateDate();


/*  الجزء المسؤال عن تغير الون */
function getColor(){
  var getColor = document.getElementById("setColor").value;
  localStorage.setItem("color" , getColor);
  
  
  /* الاجزء التي يتم تغيرها */
  document.getElementById("time").style.background = localStorage.getItem("color");
  
  document.getElementById("body").style.background = localStorage.getItem("color");
  
  document.getElementById("nav1").style.background = localStorage.getItem("color");
}


/*  */
function setColor(){
  document.getElementById("setColor").value = localStorage.getItem("color");
  
  
  document.getElementById("time").style.background = localStorage.getItem("color");
  
  document.getElementById("body").style.background = localStorage.getItem("color");
  
  document.getElementById("nav1").style.background = localStorage.getItem("color");
  
}

setInterval(setColor , 100);

































//========================================================================================================================