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
const divContainer = document.querySelectorAll('div[data-function="printHere"]');
const ulCars = document.createElement('ul');
divContainer.forEach(div => {
    div.appendChild(ulCars);
    cars.forEach(car => {
        const li = document.createElement('li');
        li.textContent = car;
        ulCars.appendChild(li);
    });
});







const countriesDiv = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
function createDivs() {
    countriesDiv.forEach(country => {
        const randomNumber = Math.floor(Math.random() * 1000);
        const number = countriesDiv.indexOf(country) + 2;
        const div = document.createElement('div');
        const h = document.createElement(`h${number}`);
        const img = document.createElement('img');

        h.textContent = country.title;
        img.src = country.imgUrl;
        img.alt = "Imagen aleatoria";
        img.onerror = function() {
            img.src = `https://picsum.photos/300/200?random=${randomNumber}`;
            img.alt = "Imagen original no encontrada - reemplazada por una aleatoria";
        };
        div.appendChild(h);
        div.appendChild(img);
        document.body.appendChild(div);
    });
    
}
createDivs();






const buttonEliminate = document.createElement('button');
const buttonRegenerate = document.createElement('button');
buttonRegenerate.textContent = 'Regenerar divs';
buttonEliminate.textContent = 'Eliminar último div';
function loadButtons() {
    document.body.appendChild(buttonRegenerate);
    document.body.appendChild(buttonEliminate);
}
loadButtons();
buttonRegenerate.addEventListener('click', () => {
    document.querySelectorAll('div').forEach(div => div.remove());
    createDivs();
    loadButtons();
    createDeleteButtons();
});
buttonEliminate.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');
    if (divs.length > 0) {
        const lastDiv = divs[divs.length - 1];
        lastDiv.remove();
    }
});










const buttonElementDelete = document.createElement('button');
const divsToDelete = document.querySelectorAll('div img');
function createDeleteButtons() {
    divsToDelete.forEach(img => {
        const buttonElementDelete = document.createElement('button');
        buttonElementDelete.textContent = 'Eliminar este div';
        buttonElementDelete.addEventListener('click', () => {
            img.parentElement.remove();
        });
        img.parentElement.appendChild(buttonElementDelete);
    });
}createDeleteButtons();

