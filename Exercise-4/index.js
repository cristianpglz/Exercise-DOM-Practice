const buttonElement = document.createElement('button');
buttonElement.id = 'btnToClick ';
buttonElement.textContent = 'Click me!';
document.body.appendChild(buttonElement);
buttonElement.addEventListener('click', (event) => {
    console.log('Button clicked!');
    console.log(event);
});




const inputFocus = document.querySelector('.focus');
const inputText = document.querySelectorAll('input');
inputFocus.addEventListener('focus', () => {
    console.log('Input focused!');
    inputText.forEach(input => {
        console.log(input.value);
    });
});




const inputValue = document.querySelector('.value');
inputValue.addEventListener('input', () => {
    console.log('Input value changed!');
    console.log(inputValue.value);
});

