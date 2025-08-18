const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ulContainer = document.createElement('ul');
document.body.appendChild(ulContainer);
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulContainer.appendChild(li);
})



const revoveClass = document.querySelectorAll('.fn-remove-me');
revoveClass.forEach(el => el.remove());





const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divContainer = document.querySelectorAll('.printHere');
const ulCars = document.createElement('ul');
cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = cars;
    ulCars.appendChild(li);
});

