let containerEl = document.getElementById("mainContainer");


let labelEl = document.createElement("label");
labelEl.setAttribute("for","username");
labelEl.textContent = "Username: ";
let inputEl = document.createElement("input");
inputEl.setAttribute("type","text");
inputEl.setAttribute("id","username");
inputEl.setAttribute("name","username");
containerEl.appendChild(labelEl);