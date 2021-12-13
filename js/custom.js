//1.0 get element from html
var UserName = document.getElementById('UserName');
var UserErr = document.getElementById('UserErr');

var userEmail = document.getElementById('userEmail');
var emailErr = document.getElementById('emailErr');

var userPass = document.getElementById('userPass');
var passErr = document.getElementById('passErr');

var rePass = document.getElementById('rePass');
var rePassErr = document.getElementById('rePassErr');

//2.0 create function for submit button

function subm() {

    //user name
    if (UserName.value == "") {
        UserName.style.borderColor = "Red";
        UserName.focus();
        UserErr.innerHTML = "please fill your name first"
        return false;
    }
    //user email
    if (userEmail.value == "") {
        userEmail.style.borderColor = "Red";
        userEmail.focus();
        emailErr.innerHTML = "please fill your email"
        return false;
    }
    //user Password
    if (userPass.value == "") {
        userPass.style.borderColor = "Red";
        userPass.focus();
        passErr.innerHTML = "please insert your Password"
        return false;
    }
    if (userPass.value.length <= 5) {

        userPass.style.borderColor = "Red";
        userPass.focus();
        passErr.innerHTML = "please insert at least 6 character"
        return false;
    }
    //user confirm pass

    if (rePass.value == "") {
        rePass.style.borderColor = "Red";
        rePass.focus();
        rePassErr.innerHTML = "please confirm your password"
        return false;
    }
    if (rePass.value != userPass.value) {
        rePass.style.borderColor = "Red";
        rePass.focus();
        rePassErr.innerHTML = "Your password & confirm password did't match"
        return false;
    }
}

// 3.0 to create a function remove error after filling input tag


function errRemove() {
    if (UserName.value != "") {
        UserName.style.borderColor = "#f1f1f1";
        UserErr.innerHTML = ""
    }
}

function errRemove() {
    if (userEmail.value != "") {
        userEmail.style.borderColor = "#f1f1f1";
        emailErr.innerHTML = ""
    }
}

function errRemove() {
    if (userPass.value != "") {
        userPass.style.borderColor = "#f1f1f1";
        passErr.innerHTML = ""
    }
}

function errRemove() {
    if (rePass.value != "") {
        rePass.style.borderColor = "#f1f1f1";
        rePassErr.innerHTML = ""
    }
}

//4.0 create an event in js
UserName.addEventListener('blur', errRemove);

userEmail.addEventListener('blur', errRemove);

userPass.addEventListener('blur', errRemove);

rePass.addEventListener('blur', errRemove);

//mode js
var btn = document.getElementById('btn')
var model = document.getElementById('model')

btn.addEventListener('click', function () {
    model.style.display = "flex";
})