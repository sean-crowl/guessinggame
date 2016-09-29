var a;
var b;
var c;
var counter = 10;

function setupGame() {
    document.getElementById("guessNum").innerHTML="Guesses Remaining: " +counter+ "";
    $("#guess1").hide();
    $("#guess2").hide();
    $("#guess3").hide();
    $("#guesstext").hide();
    $("#btnGuess").hide();
    $("#guess1").val("");
    $("#guess2").val("");
    $("#guess3").val("");
    $("#wintext").hide();
    $("#restartbtn").hide();
    $("#startbtn").show();
    $("#guess1").css('background-color', 'black');
    $("#guess2").css('background-color', 'black');
    $("#guess3").css('background-color', 'black');
    $("#guessNum").hide();
    $("#guessbox2").hide();
    $("#guessNum").val(10);
    $("#losetext").hide();
    counter = 10;
    numberGet();

    
    
}

    function numberGet() {
    a  = Math.floor(Math.random() * 10);
    b  = Math.floor(Math.random() * 10);
    while (b == a) {
        b  = parseInt(Math.random() * 10);
    }
    c  = Math.floor(Math.random() * 10);
    while (c == a || c == b) {
        c  = parseInt(Math.random() * 10);
    }

    console.log(a, b, c);

}



function handleGuess1() {
    counter--;
document.getElementById("guessNum").innerHTML="Guesses Remaining: " +counter+ "";
    var guess1 = $("#guess1").val();
    var guess2 = $("#guess2").val();
    var guess3 = $("#guess3").val();

    if (+guess1 == a) {
        $("#guess1").css('background-color', 'green');
    }
    if (+guess1 != a) {
        $("#guess1").css('background-color', 'red');
    }
    if (+guess1 != a && +guess1 == b || +guess1 == c) {
        $("#guess1").css('background-color', 'yellow');
    }
    if (+guess2 == b) {
        $("#guess2").css('background-color', 'green');
    }
    if (+guess2 != b) {
        $("#guess2").css('background-color', 'red');
    }
    if (+guess2 != b && +guess2 == a || +guess2 == c) {
        $("#guess2").css('background-color', 'yellow');
    }
    if (+guess3 == c) {
        $("#guess3").css('background-color', 'green');
    }
    if (+guess3 != c) {
        $("#guess3").css('background-color', 'red');
    }
    if (+guess3 != c && +guess3 == a || +guess3 == b) {
        $("#guess3").css('background-color', 'yellow');
    }
    if (guess1 == "" || guess2 == "" || guess3 == "") {
        $("#guess1").css('background-color', 'black');
        $("#guess2").css('background-color', 'black');
        $("#guess3").css('background-color', 'black');
        alert("You must enter a guess in each box! You have been penalized one try!")
    }
    if (+counter == 0) {
        $("#guess1").css('background-color', 'red');
        $("#guess2").css('background-color', 'red');
        $("#guess3").css('background-color', 'red');
        $("#guess1").val(a);
        $("#guess2").val(b);
        $("#guess3").val(c);
        $("#btnGuess").hide();
        $("#losetext").show();
        $("#restartbtn").show();
        $("guessbox2").hide();
        counter = 10;
    }
    else if (+guess1 == a && +guess2 == b && +guess3 == c)
    {
        $("#guess1").css('background-color', 'green');
        $("#guess2").css('background-color', 'green');
        $("#guess3").css('background-color', 'green');
        $("#btnGuess").hide();
        $("#wintext").show();
        $("#restartbtn").show();
        counter = 10;
        
    }
    console.log(guess1 + guess2 + guess3);

}



    function play1() {
   // Hide and show the appropriate divs.
    $("#startbtn").hide();
    $("#guess1").show();
    $("#guess2").show();
    $("#guess3").show();
    $("#guesstext").show();
    $("#btnGuess").show();
    $("#guessNum").show();
    $("#guessbox2").show();
    }


function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }

$(function() {
    // Wire up the event handlers.
    $("#startbtn").on("click", play1);
    $("#btnGuess").on("click", handleGuess1);
    $("#restartbtn").on("click", setupGame);


    setupGame();


});