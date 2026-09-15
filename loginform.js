let loginForm = document.getElementById("loginForm");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
loginForm.addEventListener("submit",function(event){
    event.preventDefault();
    let username = usernameInput.value;
    let password = passwordInput.value;
    console.log("Username:", username);
    console.log("Password:", password);
});
