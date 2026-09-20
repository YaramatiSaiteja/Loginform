let loginForm = document.getElementById("loginForm");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let usernameError = document.getElementById("usernameError");
let passwordError = document.getElementById("passwordError");

let formData = {
    username: "",
    password: ""
}

usernameInput.addEventListener("blur",function(event){
    if(event.target.value === ""){
        usernameError.textContent = "Username is required.";
    } else {
        usernameError.textContent = "";
    }
});

usernameInput.addEventListener("change",function(event){
    formData.username = event.target.value;
});

passwordInput.addEventListener("change",function(event){
    formData.password = event.target.value;
});

passwordInput.addEventListener("blur",function(event){
    if(event.target.value === ""){
        passwordError.textContent = "Password is required.";    
    } else {
        passwordError.textContent = "";
    }
});

loginForm.addEventListener("submit",function(event){
    event.preventDefault();
});