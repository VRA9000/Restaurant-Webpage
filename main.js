const containerEl = document.querySelector(".containerr");

 const text = ["Where taste..meets innovation and design.."];


let textIndex = 0;

let characterIndex = 0;

function updateText () {
 containerEl.innerHTML = `
<h2> ${text[textIndex]}</h2>

`
}


