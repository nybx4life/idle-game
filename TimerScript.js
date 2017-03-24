  var time = 0;
$(document).ready(function(){
 var saveTimer = setInterval(savePoint, 5000);
 var regTimer = setInterval(timeout, 1000);


  function timeout(){
    time += 1;

    if(localStorage.getItem('NewTempTimeCount') == null){
      var show_time = time;

       //debugger;
    document.getElementById("count").innerHTML = "The count: " + show_time + ".";

    }
    else{
    show_time = parseInt(localStorage.getItem('NewTempTimeCount')) + (time % 5);
    //debugger
    document.getElementById("count").innerHTML = "The count: " + show_time + ".";
    }
  }

  function savePoint(){
    //debugger
    if(localStorage.getItem('NewTempTimeCount') == null){
      localStorage.setItem('NewTempTimeCount', time);
    }
    else{
      localStorage.setItem('NewTempTimeCount', parseInt(localStorage.getItem('NewTempTimeCount')) + 5);
    }
    document.getElementById("progress").innerHTML = "Progress has been saved.";
  }

  $("#reset").on("click", function(event){
    event.preventDefault();
    localStorage.removeItem('NewTempTimeCount');
    time = 0;
    clearInterval(saveTimer);
    clearInterval(regTimer);
    saveTimer = null;
    regTimer = null;
    saveTimer = setInterval(savePoint, 5000);
    regTimer = setInterval(timeout, 1000);
    document.getElementById("progress").innerHTML = "Idler has been reset.";
  })
})
