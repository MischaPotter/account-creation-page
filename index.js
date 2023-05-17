
let username;
let password;
let passwordCheck;

function checkCredentials() {

    username = document.getElementById('username-input').value
    password = document.getElementById('password-input').value
    //document.cookie = "cookie1 = username"
    //document.cookie = "cookie2 = password"
    passwordCheck = document.getElementById("password-input-two").value

    let passwordLength = passwordCheck.length;
    
    if(password.value === passwordCheck.value && username.length >= 5 && passwordLength >=7 /*&& /(!|@|#|$|%|^|&|*)/.test(username)*/) {
        window.location.assign("file:///Users/mischapotter/Downloads/Password%20Checker%20for%20discord/login/login-page.html")
    } else if(password.value === passwordCheck.value && username.length < 5) {
        document.getElementById("username-check").innerHTML = "Your username isn't long enough."
        clearPasswordCheck()
    } else if(password.value !== passwordCheck.value && username.length >= 5) {
        document.getElementById("password-check").innerHTML = "Your passwords don't match."
        clearUsernameCheck()
    } else if(password.value === passwordCheck.value && username.length >=5 && passwordLength < 7) {
        document.getElementById("password-check").innerHTML = "Your passwords aren't long enough."
        clearUsernameCheck()
    } else if(password.value !== passwordCheck.value && username.length < 5) {
        document.getElementById("password-check").innerHTML = "Your password and username aren't right."
        clearUsernameCheck
    }
    else {
        alert("Something went wrong.");
    }
}

function clearPasswordCheck() {
    document.getElementById("password-check").innerHTML = ""
}

function clearUsernameCheck() {
    document.getElementById("username-check").innerHTML = ""
}

    /*
        } else if (password.value === passwordCheck.value && username.length >= 5 && username !== username.test((/!|@|#|$|%|^|&|*)/))) {
            document.getElementById("username-check").innerHTML = "Your username doesn't have a symbol in it."
        }
    */

/*(username.includes("@", "#", "!", "$", "%", "^", "&", "*")) */

//  && username.length >= 5
// password.value === passwordCheck.value && 

    /*
        else if(password.value === passwordCheck.value && userName.length < 5) {
            document.getElementById("username-check").innerHTML = "Your username isn't long enough."
        }
        else if(password.value !== passwordCheck.value && userName.length >= 5) {
            alert("Your username is correct, but your password is wrong.")
        }
    */