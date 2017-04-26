function enquiry_validation()
{
var frm=document.memberfrm;
var emailformat=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if(document.getElementById("name").value=="" || document.getElementById("name").value=="Name")
{
alert("Please enter your name");
document.getElementById("name").focus();
return false;
}

if(!emailformat.test(document.getElementById("email").value))
{
alert("Please Enter Valid Email Address");
document.getElementById("email").focus();
return false;
}

if(document.getElementById("mobile").value=="" || document.getElementById("mobile").value=="Mobile No")
{
alert("Please enter Mobile Number");
document.getElementById("mobile").focus();
return false;
}

if(isNaN(document.getElementById("mobile").value))
{
alert("Please enter Correct Mobile Number");
frm.phone.focus();
return false;
}

if(document.getElementById("Registration").value=="" || document.getElementById("Registration").value=="Registration")
{
alert("Please enter Registration");
document.getElementById("Registration").focus();
return false;
}

if(document.getElementById("Carmodel").value=="" || document.getElementById("Carmodel").value=="Car model")
{
alert("Please enter Car model");
document.getElementById("Carmodel").focus();
return false;
}


if(document.getElementById("city").value=="" || document.getElementById("city").value=="Subject")
{
alert("Please enter subject");
document.getElementById("city").focus();
return false;
}



if(document.getElementById("address").value=="" || document.getElementById("address").value=="Message")
{
alert("Please enter Message");
document.getElementById("address").focus();
return false;
}


//frm.submit();
document.memberfrm.submit();
}
