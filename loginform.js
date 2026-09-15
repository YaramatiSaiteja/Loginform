let loginForm = document.getElementById("loginForm");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit",function(event){
    event.preventDefault();
    let username = usernameInput.value;
    let password = passwordInput.value;
    console.log("Username:", username);
    console.log("Password:", password);
});

usernameInput.addEventListener("blur",function(event){
    if(event.target.value === ""){
        usernameError.textContent = "Username is required.";
    } else {
        usernameError.textContent = "";
    }
});

passwordInput.addEventListener("blur",function(event){
    if(event.target.value === ""){
        passwordError.textContent = "Password is required.";    
    } else {
        passwordError.textContent = "";
    }
});