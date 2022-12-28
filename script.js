function checkPasswords(){
    const password = document.getElementById("password")
    const confirm =document.getElementById("confirm");
    const error = document.getElementById("password-error")
    if(password.value != confirm.value || password.value == "" || confirm.value == ""){
        password.setCustomValidity("Les mots de passe ne correspondent pas");
        password.reportValidity();
        confirm.setCustomValidity("Les mots de passe ne correspondent pas");
        confirm.reportValidity();
        password.classList.add('error');
        confirm.classList.add('error');
        error.style.opacity = 1;
    } else{
        password.setCustomValidity("");
        password.reportValidity();
        confirm.setCustomValidity("");
        confirm.reportValidity();
        password.classList.remove('error');
        confirm.classList.remove('error');
        error.style.opacity = 0;
    }
}

function checkForm(){
    getData(document.getElementById("create-account"))
    alert("Account created")
}

function getData(form) {
    var formData = new FormData(form);
    console.log(Object.fromEntries(formData));
  }