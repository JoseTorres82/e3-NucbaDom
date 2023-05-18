
const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
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
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Rucula",
      "Jamón"
    ],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const listaOrdenada = document.querySelector('ol');
for (let i = 0; i < pizzas.length; i++) {
  const pizza = pizzas[i];
  const li = document.createElement('li');
  const contenido = document.createTextNode(` ${+ (i + 1)}  - ${pizza.nombre}.`);
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
buscador.placeholder = "Op. Nº";
inputB.appendChild(buscador);

const buttonB = document.querySelector('form');
const button = document.createElement('button');
button.type = "submit";
button.id = "button";
button.innerText = "Ver más";
buttonB.appendChild(button);

button.addEventListener('click', (e) => {
  e.preventDefault();

  const buscador = document.getElementById('buscador');
  const pedidos = document.getElementById('pedido-container');
  pedidos.innerHTML = '';
  const contenedorPizzas = document.getElementById('pizza-container');
  contenedorPizzas.innerHTML = '';

  pizzaStorege = []
  const saveOnLocalStorage = () => {
    localStorage.setItem("pizzasPedido", pizzaStorege);
  }

  const buscado = pizzas.find((pizza) => pizza.id == buscador.value);
  if (buscador.value == 0) {
    const h2 = document.createElement('h2');
    h2.innerText = "Selecciona una opción";
    contenedorPizzas.appendChild(h2);
    const img = document.createElement('img')
    img.src = './img/pizzaNull.png';
    contenedorPizzas.appendChild(img);
  }
  if (buscador.value > pizzas.length) {
    const h2 = document.createElement('h2');
    h2.innerText = "Selección no válida";
    contenedorPizzas.appendChild(h2);
    const img = document.createElement('img')
    img.src = './img/pizzaNull.png';
    contenedorPizzas.appendChild(img);
    const p = document.createElement('p');
    p.innerText = `Vuelve a intentar`;
    contenedorPizzas.appendChild(p);
  }
  else {
    const h2 = document.createElement('h2');
    h2.innerText = `${buscado.nombre}`;
    contenedorPizzas.appendChild(h2);
    const p = document.createElement('p');
    p.innerText = `Precio: $ ${buscado.precio}`;
    contenedorPizzas.appendChild(p);
    const img = document.createElement('img');
    img.src = buscado.imagen;
    contenedorPizzas.appendChild(img);
    const ingredientes = document.createElement('p');
    ingredientes.innerText = `Ingredientes: ${buscado.ingredientes}`;
    contenedorPizzas.appendChild(ingredientes);
    const h3 = document.createElement('h3');
    h3.innerText = `Su Pedido`;
    pedidos.appendChild(h3);
    const hr = document.createElement('hr');
    pedidos.appendChild(hr);
    const h4 = document.createElement('h4');
    h4.innerText = `${buscado.nombre}` + " $" +`${buscado.precio}`;
    pedidos.appendChild(h4);
    const a = document.createElement('a');
    a.innerText = "Hacer Pedido";
    a.href = "#"; 
    pedidos.appendChild(a);
    if (buscado.value !== pizzaStorege.length) {
      let i = 0 ; i++; pizzaStorege[i];
      const pizza = {
        id: buscado.id,
        nombre: buscado.nombre,
        precio: buscado.precio,
        }
        pizzaStorege.push(pizza);
        
        localStorage.setItem('pizzas', JSON.stringify(pizzaStorege));
        saveOnLocalStorage();
      }
  }
  


  buscador.value = "";
  buscador.focus();
});
