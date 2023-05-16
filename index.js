
const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

//lista Menu Opciones.

const listaOrdenada = document.querySelector('ol');
for( let i= 0; i < pizzas.length; i++ ){
  const pizza = pizzas[i];
  const li = document.createElement('li');
  const nombres = pizzas.map( (pizza) => pizza.nombre );
  const contenido = document.createTextNode(`${pizza.nombre}`);
  li.appendChild(contenido);
  listaOrdenada.appendChild(li);
}

const tituloBuscador = document.querySelector('form');
const h2 = document.createElement('h2');
h2.innerText = "Seleccione una opción del menú";
tituloBuscador.appendChild(h2);

const inputB = document.querySelector('form');
const buscador = document.createElement('input');
buscador.type = "number";
buscador.id = "buscador";
inputB.appendChild(buscador);

const buttonB = document.querySelector('form');
const button = document.createElement('button');
button.type = "submit";
button.id = "button";
button.innerText = "Buscar";
buttonB.appendChild(button);

button.addEventListener('click', (e) => {
  e.preventDefault();
  
  const buscador = document.getElementById('buscador');
  const buscado = pizzas.find((pizza) => pizza.id == buscador.value);
  if (buscador.value > pizzas.length) {
    alert('La opción ingresada no es válida');
    } else {
      const contenedorCard = document.createElement('div');
      contenedorCard.classList.add('pizza-container');
      const card = document.createElement('div');
      card.classList.add('pizza-card');
      const h2 = document.createElement('h2');
      h2.innerText = `${buscado.nombre}`;
      tituloBuscador.appendChild(h2);
      const p = document.createElement('p');
      p.innerText = `Precio: ${buscado.precio}`;
      tituloBuscador.appendChild(p);
      const img = document.createElement('img');
      img.src = buscado.imagen;
      tituloBuscador.appendChild(img);
      const ingredientes = document.createElement('p');
      ingredientes.innerText = `Ingredientes: ${buscado.ingredientes}`;
      tituloBuscador.appendChild(ingredientes);
      
      }
      });
//renderizar resultado en una card




