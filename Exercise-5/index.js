const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
const imags = [
    "https://www.scienceofnoise.net/wp-content/uploads/2017/09/13925729_1047819035273744_1542604087485586549_o.jpg",
    "https://f4.bcbits.com/img/a3732810115_16.jpg",
    "https://m.media-amazon.com/images/I/71cr-UivXLL.jpg",
    "https://m.media-amazon.com/images/I/71vnDtc53WL._UF1000,1000_QL80_.jpg",
    "https://f4.bcbits.com/img/a2943586639_16.jpg",    
]
const sectionContainer = document.querySelector("#section1");
const ul = document.createElement("ul");
albums.forEach((album) => {
  const li = document.createElement("li");
  li.textContent = album;
  const img = document.createElement("img");
  img.src = imags[albums.indexOf(album)];
  img.alt = "Imagen del álbum";
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Agregar al carrito";
  buttonElement.addEventListener('click', (event) => {
    console.log('Button clicked!');
    console.log(event);
});
  




  ul.appendChild(li);
  li.appendChild(img);
  li.appendChild(buttonElement);

});
sectionContainer.appendChild(ul);

