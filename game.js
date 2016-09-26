var a;
var b;
var c;

function setupGame() {
    $("#guess1").hide();
    $("#guess2").hide();
    $("#guess3").hide();
    $("#guesstext").hide();
    $("#btnGuess").hide();
    $("#guess1").val("");
    $("#guess2").val("");
    $("#guess3").val("");
    

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
    else if (+guess1 == a && +guess2 == b && +guess3 == c)
    {
        $("#guess1").css('background-color', 'green');
        $("#guess2").css('background-color', 'green');
        $("#guess3").css('background-color', 'green');
        $("#btnGuess").hide();
        alert("You win!");
    }

}



    function play1() {
   // Hide and show the appropriate divs.
    $("#startbtn").hide();
    $("#guess1").show();
    $("#guess2").show();
    $("#guess3").show();
    $("#guesstext").show();
    $("#btnGuess").show();
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

    setupGame();
    numberGet();


});