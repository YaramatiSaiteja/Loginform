let containerEl = document.getElementById("mainContainer");
let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Login Form";
containerEl.appendChild(headingEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for","username");
labelEl.textContent = "Username: ";
let inputEl = document.createElement("input");
inputEl.setAttribute("type","text");
inputEl.setAttribute("id","username");
inputEl.setAttribute("name","username");
containerEl.appendChild(labelEl);