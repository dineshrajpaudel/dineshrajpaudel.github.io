const name = "Dinesh Raj Paudel";
const age = 20;
const job = "Web Developer";
const city = "Lamki";

const ul = document.createElement("ul");
document.body.appendChild(ul);

let html;
html = `
     <li>${name}</li>
     <li>${age}</li>
     <li>${job}</li>
     <li>${city}</li>
     `; //literal interpolation


ul.innerHTML = html;