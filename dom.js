// Step 1: Select elements
const message = document.querySelector('#message');
const button = document.querySelector('#changeBtn');

// Step 2: Handle click using onclick property
button.onclick = function () {
  if (message.innerHTML === 'Hello! I am learning JavaScript DOM') {
    message.innerHTML = 'You clicked the button!';
    message.style.color = 'white';
    message.style.backgroundColor = 'teal';
    message.style.padding = '10px';
    message.style.borderRadius = '8px';
  } else {
    message.innerHTML = 'Hello! I am Ajwa';
    message.style.color = 'black';
    message.style.backgroundColor = 'transparent';
  }
};
