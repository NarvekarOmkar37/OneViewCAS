var email = document.forms['form']['Username'];
var password = document.forms['form']['password'];

var x=document.form.Username.value;  
	var atposition=x.indexOf("@");  
	var dotposition=x.lastIndexOf(".");

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){

	var x=document.form.Username.value;  
	var atposition=x.indexOf("@");  
	var dotposition=x.lastIndexOf(".");  
	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;  
	  }

	if (password.value.length < 6) 
	{
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}

function email_Verify(){

	if (atposition=1 || dotposition>=atposition+2 || dotposition+2<=x.length){ 

		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}

function pass_Verify(){
	if (password.value.length >= 5) {
	
		pass_error.style.display = "none";
		return true;
	}
}