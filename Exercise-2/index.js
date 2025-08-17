const div = document.createElement('div');
div.textContent = 'Este es un div creado con JavaScript';
document.body.appendChild(div);


const div2 = document.createElement('div');
const p = document.createElement('p');
p.textContent = 'Este es un párrafo dentro de un div creado con JavaScript';
document.body.appendChild(div2);
div2.appendChild(p);

const div3 = document.createElement('div');
document.body.appendChild(div3);
for (let i = 0; i < 6; i++) {
    const p2 = document.createElement('p');
    p2.textContent = `Este es el párrafo número ${i + 1}`;
    div3.appendChild(p2);
}


const p3 = document.createElement('p');
p3.textContent = 'Soy dinámico!';
document.body.appendChild(p3);



const h2 = document.querySelectorAll('h2.fn-insert-here');
h2.forEach(el => el.textContent = 'Wubba Lubba dub dub');


const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
});
document.body.appendChild(ul);


const deleted = document.querySelectorAll('.fn-remove-me');
deleted.forEach(el => el.remove());


const p4 = document.createElement('p');
p4.textContent = '¡Voy en medio!!';
const divs = document.querySelectorAll('div');
if (divs.length > 0) {
    const firstDiv = divs[0];
    firstDiv.insertAdjacentElement('afterend', p4);
}



const divEspecific = document.querySelectorAll('div.fn-insert-here');
const pEspecific = document.createElement('p');
for (let i = 0; i < divEspecific.length; i++) {
    pEspecific.textContent = `Voy dentro!`;
    divEspecific[i].appendChild(pEspecific.cloneNode(true));
}
