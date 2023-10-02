const newDiv = document.createElement("div");
newDiv.textContent = "This is a dynamically created div.";
document.body.appendChild(newDiv);


const ul = document.createElement("ul");
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = (i + 1).toString();
    ul.appendChild(li);
  }
  newDiv.appendChild(ul);
  