var a;
var b;
var c;

function setupGame() {
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

    if (+guess1 == a) {
        $("#guess1").css('background-color', 'green');


    }
}

    function play1() {
   // Hide and show the appropriate divs.
    $("#startbtn").hide();
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

    numberGet();


});