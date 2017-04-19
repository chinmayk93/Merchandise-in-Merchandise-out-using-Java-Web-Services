<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">



<head>
   <meta charset="utf-8">
   <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
   <meta http-equiv="Expires" content="0"/>
   <title>Fashion League</title>
   <link rel="stylesheet" href="/jadrn022/style.css">
   <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <script type="text/javascript" src="/jadrn022/home.js"></script>
   
</head>

<body>
<div class="exterior">

<div id="welcome_msg">Welcome, <%= session.getAttribute("username") %></div>
<input type="button" value="Logout" id="logoutbtn" />
<table>
<tr>
<td>
    <div id="tabs">
      <ul>
        <li><a href="#tabs-1"><span>Merchandise In</span></a></li>
        <li><a href="#tabs-2"><span>Merchandise Out</span></a></li>
      </ul>
       
      <div id="tabs-1">
       <table>
       <tr>
       <h3> Inventory Received</h3>
       <td>
           <table>
          <tr class="spacer">
             <td>Date:<font color="red">*</font></td>
             <td><input type="date" id="date" size="10" placeholder='mm/dd/yyyy' tabindex=1/></td>
          </tr>
          <tr class="spacer">
             <td>Enter SKU:<font color="red">*</font></td>
             <td><input type="text" id="sku" placeholder="ABC-123" size="10" tabindex=2/></td>
           </tr>
          <tr>
             <td>Enter Quantity:<font color="red">*</font></td>
             <td><input type="text" id="quantity" size="10" tabindex=3/></td>
            </tr>
         </table>
       </td>

       </tr>
      </table>
 	 <table>
          <tr>
      	     <td><input type="reset" id="resetbutton"  class="button" value="Clear"/></td>
             <td><input type="submit" id="addbutton" class="button" value="Add" tabindex=4/></td>
          </tr>
         </table>
 	 <div id="message_line">&nbsp;</div>
      </div>

       <div id="tabs-2">
       <table>
       <tr>
       <h3> Inventory Sent Out</h3>
       <td>
           <table>
          <tr class="spacer">
             <td>Date:<font color="red">*</font></td>
             <td><input type="date" id="date2" size="10" placeholder='mm/dd/yyyy' tabindex=1/></td>
          </tr>
          <tr class="spacer">
             <td>Enter SKU:<font color="red">*</font></td>
             <td><input type="text" id="sku2" placeholder="ABC-123" size="10" tabindex=2/></td>
           </tr>
          <tr>
             <td>Enter Quantity:<font color="red">*</font></td>
             <td><input type="text" id="quantity2" size="10" tabindex=3/></td>
            </tr>
         </table>
       </td>

       </tr>
      </table>
         <table>
          <tr>
             <td><input type="reset" id="resetbutton2"  class="button" value="Clear"/></td>
             <td><input type="submit"  id="addbutton2" class="button" value="Remove" tabindex=4/></td>
          </tr>
         </table>
         <div id="message_line2">&nbsp;</div>
      </div>
   
</div>
</td>
<td>
   <div id="login1">
 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Manufacturer's ID:<input type="text" id="mid" readonly="readonly" size="1"/>
          <table>
          <tr class="spacer_right_top">
             <td>Vendor:</td>
             <td class="col_spacer"><input type="text" id="vendor" readonly="readonly" size="7"/></td>
              <td class="col_spacer2">Cost:</td>
             <td><input type="text" id="cost"  readonly="readonly" size="7"/></td>
           </tr>
          <tr class="spacer_right">
             <td>Category:</td>
             <td class="col_spacer"><input type="text" id="category" readonly="readonly" size="7"/></td>
            <td class="col_spacer2">Retail: $</td>
             <td><input type="text" id="retail" readonly="readonly" size="7"/></td>

          </tr>
        
         <table>
         <tr>
         <td>
         <table>
         <tr class="spacer_right">
            <td>Description:</td>
             <td><textarea id="description" rows="2" cols="34" readonly="readonly"></textarea></td>
          </tr>
         <tr>   
             <td>Features:</td>
             <td><textarea id="features" rows="6" cols="34" readonly="readonly"></textarea></td>
          </tr>
          </table>
          </td>
          <td><div id="pic"></div>
          </tr>
          </table>
          </table>
     </div>
</td>
</tr>
</table>
</div>
</body>
</html>


