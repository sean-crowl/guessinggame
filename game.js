function numberGet() {
    var a, b, c;
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

numberGet();

function isNumberKey(evt)
       {
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if (charCode != 46 && charCode > 31 
            && (charCode < 48 || charCode > 57))
             return false;

          return true;
       }