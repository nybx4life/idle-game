$(document).ready(function(){
    var score = localStorage.clickcount;
    var timer_increment = 1;
    //localStorage.setItem('timeValue',timer_increment)
    setInterval(timeout, 3000);

    function timeout(){
        score = parseInt(score)+timer_increment;
        // debugger
        document.getElementById("result").innerHTML = "Your score: " + score + " point(s).";
        checkValues();
    }


    function clickCounter() {
        if(typeof(Storage) !== "undefined") {
            if(localStorage.clickcount){
                localStorage.clickcount = parseInt(score)+1;
                 score = localStorage.clickcount;}
            else {
                localStorage.clickcount = 1;}
            document.getElementById("result").innerHTML = "Your score: " + score + " point(s).";}
        else {
            document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";}

    }

    function checkValues(){
        if(score >= 20){
            $("#Upgrade1").show(); }
        else{
            $("#Upgrade1").hide();}
    }

    $("#ClickCounter").on("click", function(event){
        event.preventDefault();
        clickCounter();
    })

    if(localStorage.clickcount > 20){

        $("#Upgrade1").show();
    }
    else{
        $("#Upgrade1").hide();
    }

    $("#ButtonUpgrade1").on("click", function(event){

            event.preventDefault();
            score -= 20;
             localStorage.clickcount = parseInt(score);
             timer_increment += 1;
            //debugger
            document.getElementById("result").innerHTML = "Your score: " + score + " point(s).";
    })



})
