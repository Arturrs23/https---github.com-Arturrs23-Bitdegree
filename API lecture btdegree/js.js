"use strict";

const getOneButton = document.querySelector('#get1');

const singleID = document.querySelector('#singleId');

const getAllButton = document.querySelector('#getAllButton');

const output = document.querySelector('#output');

const createForm = document.querySelector('#createForm');

console.log(getOneButton, output);

 

getOneButton.addEventListener('click', ()=>{

  const id = singleId.value;

  console.log(id, singleId);

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  .then(response => response.json())

  .then((json) => (output.innerText = JSON.stringify(json)));

 

});




getAllButton.addEventListener('click', ()=>{

  const id = getAllButton.value;

  console.log(id, getAllButton);

  fetch(`https://jsonplaceholder.typicode.com/posts/`)

  .then(response => response.json())

  .then((json) => (output.innerHTML= json.map(item => `<li>${item.id} - ${item.title}</li>` ).join("")));

 

});

 

// submiting data

createForm.addEventListener("submit", (event)=> {

  event.preventDefault();

  const [title, body, userId] = [event.target[0].value, event.target[1].value, event.target[2].value];

  console.log(title, body, userId);

  fetch('https://jsonplaceholder.typicode.com/posts', {

    method: 'POST',

    body: JSON.stringify({

      title: 'foo',

      body: 'bar',

      userId: 1,

    }),

    headers: {

      'Content-type': 'application/json; charset=UTF-8',

    },

  })

    .then((response) => response.json())

    .then((json) => (output.innerText = JSON.stringify(json)));

 

})