

let input=document.querySelector(".input");
let btn=document.querySelector(".btn");
let tbody=document.querySelector("tbody");


btn.addEventListener('click',(event)=>{
    event.preventDefault();
    const newElm= document.createElement("tr");
    newElm.setAttribute('class','row');
    newElm.innerHTML = `
    <tbody class="check-box"><input type="checkbox" id="check">
    <tbody id="data">${input.value}</tbody>
    <tbody class="edit-btn"><button class="edit"><i class="fa-solid fa-pen"></i></button></tbody>
    <tbody class="delete-btn"><button class="delete"><i class="fa-solid fa-trash"></i></button></tbody>`;
    tbody.appendChild(newElm);
});



