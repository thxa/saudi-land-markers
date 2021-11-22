function signupFormProcess()
{

    var signupFormObj = document.getElementById("signupForm");
    if (signupFormValidate(signupFormObj))
        displayDetails();
    else
        alert();
}


function signupFormValidate(signupFormObj)
{
    var	name = signupFormObj.name.value;
    var	email = signupFormObj.email.value;
    var password = signupFormObj.email.value;
    var passwordOK, emailOK;

    if (bmiFormObj.wantMail.checked)
    {
        emailOK = emailValid(email);
        alert("Warning: The e-mail feature is currently not supported.")
    }
    else
        emailOK = true;

    return heightOK && weightOK && emailOK;
}