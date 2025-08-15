const button = document.querySelector('.showme');
const h1 = document.querySelector('#pillado');
const p = document.querySelectorAll('p');
const pokemons = document.querySelectorAll('.pokemon');
const dataFunction = document.querySelectorAll('span[data-function="testMe"]');
console.log(h1);

for (const parrafo of p) {
    console.log(parrafo);
}
for (const pokemon of pokemons) {
    console.log(pokemon);
}
for (const span of dataFunction) {
    console.log(span.textContent);
}
console.log(`El tercer personaje es ====> ${dataFunction[2].textContent}`);
