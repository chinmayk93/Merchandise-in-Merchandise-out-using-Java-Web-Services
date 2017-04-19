<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <title>Fashion League</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="expires" content="0" />        
    <meta http-equiv="Content-Style-Type" content="text/css" />  
    
    <script src="/jquery/jquery.js"></script>
    <script src="/jadrn022/login.js"></script> 
    <link rel="stylesheet" type="text/css" href="/jadrn022/style.css" />
</head>

<body>
 <div class="exterior" id="exterior">
  
  
  <div class="login" id="login">
  <h2>Login</h2>
  <form name="login_form" method="post" action="/jadrn022/servlet/Login">
   <input type="text" id="username" name="username" size="20" placeholder="Username"/><br><br>
   <input type="password" id="password" name="password" size="20" placeholder="Password"/><br>
   <input type="reset" id="resetbtn" class="button" value="Clear"/>
   <input type="submit" id="submitbtn" class="button"  value="Log In"/>
  </form>
  </div>
<div id="error_msg">Invalid username or password</div>
 </div>

</body>
</html>

