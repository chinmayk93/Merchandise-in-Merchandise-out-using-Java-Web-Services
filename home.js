
$(document).ready(function() {

    $("#tabs").tabs();  
    $("#date").datepicker();
    $("#date2").datepicker(); 
    $("#sku").focus();
   
    $("#date").val($.datepicker.formatDate("mm/dd/yy", new Date()));
    $('#logoutbtn').on('click',function(e){
       $.get('Logout',function(response){
          $('body').html(response);
          history.go(1);
       });
    });
    $('#resetbutton').on('click',function(){
      $('#sku').val("");
      $('#date').val("");
      $('#quantity').val("");
      $('#message_line').text("");
      $('#vendor').val("");
      $('#category').val("");
      $('#mid').val("");
      $('#cost').val("");
      $('#retail').val("");
      $('#description').val("");
      $('#features').val("");
      $('#pic').html("<h5>&nbsp;</h5>");
    });
    $('#sku').on('focus',function(e){
      $('#sku').css("border-color","#4e4edb");     
    });
    $('#date').on('focus',function(e){
      $('#date').css("border-color","#4e4edb");    
    });
    $('#quantity').on('focus',function(e){
      $('#quantity').css("border-color","#4e4edb");    
    });
    $('#date').on('blur',function(e){
      $('#date').css("border-color","grey");
    });
    $('#quantity').on('blur',function(e){
      $('#quantity').css("border-color","grey");
    });

    $('#sku').on('blur',function(e){
       $('#sku').css("border-color","grey");  
       if($('#sku').val != "" && new RegExp('^([A-Z]{3}-[0-9]{3})$').test($('#sku').val()) == true)
       {  param = "sku="+$("#sku").val();
          $.get('Home',param,function(response){
             if(response == "fail")
             { var sku_val =  $("#sku").val();
               $('#message_line').text("Sku:"+ sku_val +" record doesn\'t exist!");
               $('#sku').val("");
               $('#vendor').val("");
               $('#category').val("");
               $('#mid').val("");
               $('#cost').val("");
               $('#retail').val("");
               $('#description').val("");
               $('#features').val("");
               $('#pic').html("<h5>&nbsp;</h5>");
               $('#sku').focus();
             }
             else
             {
               $('#message_line').text(""); 
               var parts = response.split("|");   
               $('#vendor').val(parts[0]);
               $('#category').val(parts[1]);
               $('#mid').val(parts[2]);
               $('#description').val(parts[3]);
               $('#features').val(parts[4]);
               $('#cost').val(parts[5]);
               $('#retail').val(parts[6]);
               receive(parts[7]);
             }
           });
        }
    }); 
    var now = new Date();
    $('#addbutton').on('click',function(e){
       if($('#date').val() == "")
       {
         $('#date').addClass("error");
         $('#message_line').text("Please enter Date!");
         $('#date').focus();
         e.preventDefault();
       }
       else if($('#date').datepicker('getDate') > now)
       {
          $('#date').addClass('error');
          $('#message_line').text("Invalid Date!! Future date selected");
          $('#date').focus();
          e.preventDefault();
       }
       else if($('#sku').val() == "")
       { 
         $('#sku').addClass("error"); 
         $('#message_line').text("Please enter SKU!");
         $('#sku').focus();
         e.preventDefault();
       }
       else if(new RegExp('^([A-Z]{3}-[0-9]{3})$').test($('#sku').val()) == false)
       {
         $('#sku').addClass("error");
         $('#message_line').text("Invalid! SKU should be of the form ABC-123");
         $('#sku').focus();
         e.preventDefault(); 
       }
       else  if($('#quantity').val() == "")
       {
         $('#quantity').addClass("error");
         $('#message_line').text("Please enter Quantity!");
         $('#quantity').focus();
         e.preventDefault();
       }
       else if(new RegExp('^([1-9]{1}[0-9]*)$').test($('#quantity').val()) == false)
       {
         $('#quantity').addClass("error");
         $('#message_line').text("Invalid Quantity!");
         $('#quantity').focus();
         e.preventDefault();
       }
       else
       {
         param = "sku="+$("#sku").val()+
          "&date="+$("#date").val()+
          "&quantity="+$("#quantity").val();
         $.post('Received',param,function(response){
          $('#message_line').text("Sku:"+$('#sku').val()+" updated successfully!"); 
          $("#date").val($.datepicker.formatDate("mm/dd/yy", new Date()));
          $('#sku').val("");
          $('#quantity').val("");
          $('#vendor').val("");
          $('#category').val("");
          $('#mid').val("");
          $('#cost').val("");
          $('#retail').val("");
          $('#description').val("");
          $('#features').val("");
          $('#pic').html("<h5>&nbsp;</h5>");
         }); 
       } 
     });
/////////////////////////////Merchandise OUT////////////////////////////////////

    $("#date2").val($.datepicker.formatDate("mm/dd/yy", new Date()));

    $('#resetbutton2').on('click',function(){
      $('#sku2').val("");
      $('#date2').val("");
      $('#quantity2').val("");
      $('#message_line2').text("");
      $('#vendor').val("");
      $('#category').val("");
      $('#mid').val("");
      $('#cost').val("");
      $('#retail').val("");
      $('#description').val("");
      $('#features').val("");
      $('#pic').html("<h5>&nbsp;</h5>");
    });
    $('#sku2').on('focus',function(e){
      $('#sku2').css("border-color","#4e4edb");
    });
    $('#date2').on('focus',function(e){
      $('#date2').css("border-color","#4e4edb");
    }); 
    $('#quantity2').on('focus',function(e){
      $('#quantity2').css("border-color","#4e4edb");    
    });
    $('#date2').on('blur',function(e){
      $('#date2').css("border-color","grey");
    });
    $('#quantity2').on('blur',function(e){
      $('#quantity2').css("border-color","grey");
    });

    $('#sku2').on('blur',function(e){
        $('#sku2').css("border-color","grey");

        if($('#sku2').val != "" && new RegExp('^([A-Z]{3}-[0-9]{3})$').test($('#sku2').val()) == true)
        {  param = "sku="+$("#sku2").val();
           $.get('Home',param,function(response){
             if(response == "fail")
             {
               var sku_val2 = $("#sku2").val();
               $('#message_line2').text("Sku:"+ sku_val2 +" record doesn\'t exist!");
               $('#sku2').val("");
               $('#vendor').val("");
               $('#category').val("");
               $('#mid').val("");
               $('#cost').val("");
               $('#retail').val("");
               $('#description').val("");
               $('#features').val("");
               $('#pic').html("<h5>&nbsp;</h5>");
               $('#sku2').focus();
             }
             else
             {
               $('#message_line2').text("");
               var parts = response.split("|");
               $('#vendor').val(parts[0]);
               $('#category').val(parts[1]);
               $('#mid').val(parts[2]);
               $('#description').val(parts[3]);
               $('#features').val(parts[4]);
               $('#cost').val(parts[5]);
               $('#retail').val(parts[6]);
               receive(parts[7]);
             }
           });
        }
    });

    $('#addbutton2').on('click',function(e){
       if($('#date2').val() == "")
       {
         $('#date2').addClass("error");
         $('#message_line2').text("Please enter Date!");
         $('#date2').focus();
         e.preventDefault();
       }
       else if($('#date2').datepicker('getDate') > now)
       {
          $('#date2').addClass('error');
          $('#message_line2').text("Invalid Date!! Future date selected");
          $('#date2').focus();
          e.preventDefault();
       }
       else if($('#sku2').val() == "")
       {
         $('#sku2').addClass("error");
         $('#message_line2').text("Please enter SKU!");
         $('#sku2').focus();
         e.preventDefault();
       }
       else if(new RegExp('^([A-Z]{3}-[0-9]{3})$').test($('#sku2').val()) == false)
       {
         $('#sku2').addClass("error");
         $('#message_line2').text("Invalid! SKU should be of the form ABC-123");
         $('#sku2').focus();
         e.preventDefault();
       }
       else  if($('#quantity2').val() == "")
       {
         $('#quantity2').addClass("error");
         $('#message_line2').text("Please enter Quantity!");
         $('#quantity2').focus();
         e.preventDefault();
       }
       else if(new RegExp('^([1-9]{1}[0-9]*)$').test($('#quantity2').val()) == false)
       {
         $('#quantity2').addClass("error");
         $('#message_line2').text("Invalid Quantity!");
         $('#quantity2').focus();
         e.preventDefault();
       } 
       else
       {
         param = "sku="+$("#sku2").val()+
          "&date="+$("#date2").val()+
          "&quantity="+$("#quantity2").val();
         $.post('Sent',param,function(response){
          if(response == "success"){ 
          $('#message_line2').text("Sku:"+$('#sku2').val()+" updated successfully!"); 
          $("#date2").val($.datepicker.formatDate("mm/dd/yy", new Date()));
          $('#sku2').val("");
          $('#quantity2').val("");
          $('#vendor').val("");
          $('#category').val("");
          $('#mid').val("");
          $('#cost').val("");
          $('#retail').val("");
          $('#description').val("");
          $('#features').val("");
          $('#pic').html("<h5>&nbsp;</h5>");}
          else{ 
          $('#quantity2').focus();
          $('#message_line2').text("Sorry..Insufficient stock!");}
         }); 
       }
    });    
});
function receive(img) {
 var toDisplay = "<img src='/~jadrn022/proj1/images/"+ img.toLowerCase() +"'>";
 $('#pic').html(toDisplay);
}

