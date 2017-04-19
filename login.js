
      
$(document).ready( function() {
    var errorMsg = $('#error_msg');
    var element = new Array(2);
    element[0] = $("#username");
    element[1] = $("#password");
                  
    $("#username").focus();
     $("#username").on('focus', function() {
        $('#username').css("border-color","#4e4edb");
     });
     $("#password").on('focus', function() {
        $('#password').css("border-color","#4e4edb");
     });

    $("#username").on('blur', function() {
        $('#username').css("border-color","grey");
        if(($("#username").val()) != "") {
            $(this).removeClass("error");
            errorMsg.text("");
            }
        });
    $("#password").on('blur', function() {
        $('#password').css("border-color","grey");
        if(($("#password").val()) != "") {
            $(this).removeClass("error");
            errorMsg.text("");
            }
        });
    $(':submit').on('click', function(e) {
      if($("#username").val() == ""){
       errorMsg.text("Please enter your username!");
       element[0].focus();
       e.preventDefault();
      }
      else if($("#password").val() == ""){
       errorMsg.text("Please enter your password!");
       element[1].focus();
       e.preventDefault();
      }
      else{
        return;
      }  
    });
        
    $(':reset').on('click', function() {
        for(var i=0; i < 2; i++)
            element[i].removeClass("error");
        errorMsg.text("");
        element[0].focus();
        });                                       
});




